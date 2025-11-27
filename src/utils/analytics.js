// Google Analytics 4 Utility Functions
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID

/**
 * Initialize Google Analytics
 * Call this once when your app loads
 */
export const initGA = (measurementId = 'G-XXXXXXXXXX') => {
  if (typeof window !== 'undefined') {
    // Create dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];
    
    function gtag() {
      window.dataLayer.push(arguments);
    }
    
    // Make gtag available globally
    window.gtag = gtag;
    
    // Initialize GA4
    gtag('js', new Date());
    gtag('config', measurementId, {
      send_page_view: true,
      cookie_flags: 'SameSite=None;Secure'
    });
    
    console.log('Google Analytics initialized with ID:', measurementId);
  }
};

/**
 * Log a page view
 * Call this on route changes
 */
export const logPageView = (path, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path || window.location.pathname,
      page_title: title || document.title,
      page_location: window.location.href
    });
    
    console.log('Page view logged:', path || window.location.pathname);
  }
};

/**
 * Log a custom event
 * @param {string} action - The action being tracked (e.g., 'click', 'submit', 'download')
 * @param {string} category - The category of the event (e.g., 'CTA', 'Form', 'Navigation')
 * @param {string} label - Additional info about the event (e.g., 'Contact Form', 'WhatsApp Button')
 * @param {number} value - Optional numeric value
 */
export const logEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
    
    console.log('Event logged:', { action, category, label, value });
  }
};

/**
 * Log a form submission
 * @param {string} formName - Name of the form (e.g., 'Contact Form', 'Newsletter Signup')
 * @param {string} formLocation - Where the form is located (e.g., 'Contact Page', 'Footer')
 */
export const logFormSubmission = (formName, formLocation) => {
  logEvent('form_submit', 'Form', `${formName} - ${formLocation}`);
};

/**
 * Log a button click
 * @param {string} buttonName - Name of the button (e.g., 'Get Quote', 'Call Now')
 * @param {string} buttonLocation - Where the button is located
 */
export const logButtonClick = (buttonName, buttonLocation) => {
  logEvent('click', 'Button', `${buttonName} - ${buttonLocation}`);
};

/**
 * Log a phone call click
 * @param {string} phoneNumber - The phone number clicked
 * @param {string} location - Where the click occurred
 */
export const logPhoneClick = (phoneNumber, location) => {
  logEvent('click', 'Phone', `${phoneNumber} - ${location}`);
};

/**
 * Log a WhatsApp click
 * @param {string} location - Where the click occurred
 */
export const logWhatsAppClick = (location) => {
  logEvent('click', 'WhatsApp', location);
};

/**
 * Log an email click
 * @param {string} email - The email address clicked
 * @param {string} location - Where the click occurred
 */
export const logEmailClick = (email, location) => {
  logEvent('click', 'Email', `${email} - ${location}`);
};

/**
 * Log a scroll depth milestone
 * @param {number} percentage - Percentage scrolled (25, 50, 75, 100)
 */
export const logScrollDepth = (percentage) => {
  logEvent('scroll', 'Engagement', `${percentage}% scrolled`);
};

/**
 * Log a video interaction
 * @param {string} action - 'play', 'pause', 'complete'
 * @param {string} videoName - Name of the video
 */
export const logVideoInteraction = (action, videoName) => {
  logEvent(action, 'Video', videoName);
};

/**
 * Log a file download
 * @param {string} fileName - Name of the file downloaded
 * @param {string} fileType - Type of file (e.g., 'PDF', 'Brochure')
 */
export const logFileDownload = (fileName, fileType) => {
  logEvent('download', 'File', `${fileName} - ${fileType}`);
};

/**
 * Log a social media click
 * @param {string} platform - Social media platform (e.g., 'Facebook', 'Instagram')
 * @param {string} location - Where the click occurred
 */
export const logSocialClick = (platform, location) => {
  logEvent('click', 'Social Media', `${platform} - ${location}`);
};

/**
 * Log a search query
 * @param {string} searchTerm - The search term entered
 */
export const logSearch = (searchTerm) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm
    });
  }
};

/**
 * Log user timing (for performance tracking)
 * @param {string} name - Name of the timing event
 * @param {number} value - Time in milliseconds
 * @param {string} category - Category (e.g., 'Load Time', 'API Call')
 */
export const logTiming = (name, value, category) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: value,
      event_category: category
    });
  }
};

/**
 * Set user properties
 * @param {object} properties - User properties to set
 */
export const setUserProperties = (properties) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', properties);
  }
};

/**
 * Log an exception/error
 * @param {string} description - Description of the error
 * @param {boolean} fatal - Whether the error was fatal
 */
export const logException = (description, fatal = false) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: description,
      fatal: fatal
    });
  }
};

// Export all functions as default object
export default {
  initGA,
  logPageView,
  logEvent,
  logFormSubmission,
  logButtonClick,
  logPhoneClick,
  logWhatsAppClick,
  logEmailClick,
  logScrollDepth,
  logVideoInteraction,
  logFileDownload,
  logSocialClick,
  logSearch,
  logTiming,
  setUserProperties,
  logException
};
