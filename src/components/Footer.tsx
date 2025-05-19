import React from 'react';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-brand-lime" />
              <span className="ml-2 text-xl font-semibold">A Greener Cleaner</span>
            </div>
            <p className="text-gray-300 mb-6">
              Jacksonville's premier eco-friendly dry cleaning service, offering non-toxic cleaning solutions for a healthier wardrobe and planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-lime transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-lime transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-lime transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Pricing', 'How It Works', 'Sustainability', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-brand-lime transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Eco-Friendly Dry Cleaning', 
                'Wet Cleaning', 
                'Wash & Fold', 
                'Shirt Service', 
                'Wedding Gown Preservation', 
                'Home Delivery'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-brand-lime transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-lime mr-3 mt-0.5" />
                <span className="text-gray-300">
                  123 Green Street<br />
                  Jacksonville, FL 32202
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-lime mr-3" />
                <a href="tel:+19045551234" className="text-gray-300 hover:text-brand-lime transition-colors">
                  (904) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-lime mr-3" />
                <a href="mailto:info@agreenercleaner.com" className="text-gray-300 hover:text-brand-lime transition-colors">
                  info@agreenercleaner.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center">
              <img 
                src="https://images.pexels.com/photos/8551621/pexels-photo-8551621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="LEED Certified" 
                className="h-16 mr-4"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <img 
                src="https://images.pexels.com/photos/5217937/pexels-photo-5217937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="EPA Approved" 
                className="h-16"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} A Greener Cleaner. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-brand-lime text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-lime text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-lime text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;