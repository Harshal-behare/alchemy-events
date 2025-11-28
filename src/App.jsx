import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhyAlchemy from "./components/WhyAlchemy";
import ContactUs from "./components/ContactUs";
import Wedding from "./components/Wedding";
import WhatsAppButton from "./components/WhatsAppButton";
import FAQ from "./components/FAQ";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";

function App() {
  return (
    <Router>
      <div
        className="
          min-h-screen font-sans 
          bg-white dark:bg-gray-900 
          text-gray-900 dark:text-gray-200 
          transition-colors duration-300
        "
      >
        {/* Skip Navigation (A11y) */}
        <a
          href="#main-content"
          className="
            sr-only 
            focus:not-sr-only 
            focus:absolute focus:top-4 focus:left-4 
            focus:z-[100] 
            focus:px-4 focus:py-2 
            focus:bg-primary focus:text-white 
            focus:rounded-lg focus:shadow-lg
          "
        >
          Skip to main content
        </a>

        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/why-alchemy" element={<WhyAlchemy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Floating WhatsApp Button */}
          <WhatsAppButton />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
