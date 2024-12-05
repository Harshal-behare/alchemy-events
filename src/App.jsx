import { FirebaseProvider } from './contexts/FirebaseContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Services from './components/Services';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <FirebaseProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FirebaseProvider>
  );
} 