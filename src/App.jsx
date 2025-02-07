import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Services from './components/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import WhyAlchemy from './components/WhyAlchemy';
import ContactUs from './components/ContactUs';
import Wedding from './components/Wedding';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-white text-foreground dark:bg-black">
        
      <Header />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/wedding" element={<Wedding />} />
          
          <Route path="/why-alchemy" element={<WhyAlchemy />} />
          <Route path="/contact" element={<ContactUs />} />
         
          <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <section><WhatsAppButton /></section>
        </main>
        <Footer />
       
      
      
        
        
       
      </div>
    </Router>
  );
}

export default App; 