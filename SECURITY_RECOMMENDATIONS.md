# Security Recommendations for Contact Form

## Issue #21: Form Security (HIGH PRIORITY)

### Current Problem
The Google Sheets form submission URL is currently exposed in the client-side code at:
```
src/components/ContactUs.jsx (line 31)
```

This poses security risks:
- URL can be abused by bots
- No rate limiting
- No CSRF protection
- No input sanitization server-side

### Recommended Solutions

## Option 1: Backend API with Node.js/Express (Recommended)

### Step 1: Create Backend API

Create a new folder `backend` in your project root:

```bash
mkdir backend
cd backend
npm init -y
npm install express cors body-parser nodemailer express-rate-limit helmet dotenv
```

### Step 2: Create `backend/server.js`

```javascript
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Input sanitization function
const sanitizeInput = (input) => {
  return input.trim().replace(/[<>]/g, '');
};

// Contact form endpoint
app.post('/api/contact', limiter, async (req, res) => {
  try {
    const { Name, Email, Message, Phone } = req.body;

    // Validation
    if (!Name || !Email || !Message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email address' 
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(Name),
      email: sanitizeInput(Email),
      message: sanitizeInput(Message),
      phone: Phone ? sanitizeInput(Phone) : ''
    };

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@alchemyevents.in',
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone:</strong> ${sanitizedData.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</small></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Also send to Google Sheets
    // You can keep the Google Sheets integration here on the backend

    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Step 3: Create `backend/.env`

```env
PORT=5000
FRONTEND_URL=http://localhost:3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

**Note:** For Gmail, you need to create an App Password:
1. Go to Google Account settings
2. Security → 2-Step Verification → App passwords
3. Generate a new app password for "Mail"

### Step 4: Update Frontend ContactUs.jsx

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus({ type: '', message: '' });

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok && data.success) {
      setFormData({ Name: '', Email: '', Message: '', Phone: '' });
      setStatus({
        type: 'success',
        message: data.message
      });
    } else {
      throw new Error(data.message || 'Failed to submit form');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    setStatus({
      type: 'error',
      message: error.message || 'Something went wrong. Please try again later.'
    });
  } finally {
    setLoading(false);
  }
};
```

### Step 5: Run the Backend

```bash
cd backend
node server.js
```

---

## Option 2: Serverless Functions (Vercel/Netlify)

If you're deploying to Vercel or Netlify, you can use serverless functions:

### For Vercel:

Create `api/contact.js`:

```javascript
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { Name, Email, Message, Phone } = req.body;

    // Validation
    if (!Name || !Email || !Message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Configure email transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@alchemyevents.in',
      subject: `New Contact Form Submission from ${Name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${Name}</p>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Phone:</strong> ${Phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${Message}</p>
      `
    });

    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message!' 
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong.' 
    });
  }
}
```

Then update your frontend to call `/api/contact` instead.

---

## Option 3: Keep Google Sheets but Add Protection

If you want to keep the current Google Sheets approach temporarily:

1. **Add reCAPTCHA v3** to prevent bot submissions
2. **Add client-side rate limiting** (though this can be bypassed)
3. **Monitor the Google Sheet** for spam and block IPs if needed

### Install reCAPTCHA:

```bash
npm install react-google-recaptcha-v3
```

### Update ContactUs.jsx:

```javascript
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

function ContactUs() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('contact_form');
    
    // Include token in your submission
    // ... rest of your code
  };
}
```

---

## Deployment Considerations

### For Production:

1. **Use Environment Variables** for all sensitive data
2. **Enable HTTPS** (required for production)
3. **Set up proper CORS** policies
4. **Add logging** for monitoring
5. **Set up error tracking** (Sentry, LogRocket, etc.)
6. **Add honeypot fields** to catch bots
7. **Implement CSRF tokens** for additional security

### Recommended Hosting:

- **Backend:** Railway, Render, Heroku, or AWS Lambda
- **Frontend:** Vercel, Netlify, or AWS Amplify

---

## Priority Action Items

1. ✅ **Immediate:** Add reCAPTCHA to current form (1-2 hours)
2. ⚠️ **Short-term:** Set up backend API (4-6 hours)
3. 🔒 **Long-term:** Implement full security audit (ongoing)

---

## Additional Security Measures

### Add to ContactUs.jsx:

```javascript
// Honeypot field (hidden from users, catches bots)
<input
  type="text"
  name="website"
  style={{ display: 'none' }}
  tabIndex="-1"
  autoComplete="off"
/>

// In handleSubmit, reject if honeypot is filled:
if (formData.website) {
  return; // Bot detected
}
```

### Add Input Validation:

```javascript
const validateForm = () => {
  const errors = {};
  
  if (!formData.Name || formData.Name.length < 2) {
    errors.Name = 'Name must be at least 2 characters';
  }
  
  if (!formData.Email || !/\S+@\S+\.\S+/.test(formData.Email)) {
    errors.Email = 'Please enter a valid email';
  }
  
  if (!formData.Message || formData.Message.length < 10) {
    errors.Message = 'Message must be at least 10 characters';
  }
  
  return errors;
};
```

---

## Testing Checklist

- [ ] Test form submission with valid data
- [ ] Test form submission with invalid data
- [ ] Test rate limiting (submit 6+ times quickly)
- [ ] Test with empty fields
- [ ] Test with XSS attempts (e.g., `<script>alert('test')</script>`)
- [ ] Test email delivery
- [ ] Test error handling
- [ ] Test on mobile devices
- [ ] Test with slow internet connection

---

## Contact for Implementation

If you need help implementing these security measures, consider:
1. Hiring a backend developer
2. Using a form service like Formspree, FormSubmit, or Getform
3. Using a headless CMS with built-in forms (Contentful, Strapi)

---

*Document created: November 27, 2024*
*Priority: HIGH - Implement within 1-2 weeks*
