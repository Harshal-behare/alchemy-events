import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Services from './components/Services';
import Footer from './components/Footer';
import Wedding from './components/Wedding';
import './index.css';
import WhatsappButton from './components/WhatsAppButton.jsx';
function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/wedding" element={<Wedding />} />
          </Routes>
          <section><WhatsappButton /></section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

