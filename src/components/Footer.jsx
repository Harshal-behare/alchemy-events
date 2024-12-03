import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Alchemy Events</h3>
            <p className="text-gray-600">Transforming visions into unforgettable experiences</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                  href="#why-alchemy"
                >
                  Why Alchemy
                </a>
              </li>
              <li>
                <a 
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                  href="#brand-story"
                >
                  Brand Story
                </a>
              </li>
              <li>
                <a 
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                  href="#vision"
                >
                  Vision
                </a>
              </li>
              <li>
                <a 
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                  href="#contact-us"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
            <p className="text-gray-600">123 Event Street, City, Country</p>
            <p className="text-gray-600">Phone: +1 234 567 890</p>
            <p className="text-gray-600">Email: info@alchemyevents.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500">&copy; 2023 Alchemy Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

