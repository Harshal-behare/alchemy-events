import { FirebaseProvider } from './contexts/FirebaseContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Services from './components/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import WhyAlchemy from './components/WhyAlchemy';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Wedding from './components/Wedding';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <FirebaseProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#FAF9F6]">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/why-alchemy" element={<WhyAlchemy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </FirebaseProvider>
  );
} 