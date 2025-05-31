import React from 'react';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-brand-lime" />
              <span className="ml-2 text-xl font-semibold">A Greener Cleaner</span>
            </div>
            <p className="text-gray-300 mb-6">
              Jacksonville's premier eco-friendly dry cleaning service, offering non-toxic cleaning solutions for a healthier wardrobe and planet.
            </p>
            <p className="text-sm text-gray-400">
              Proudly serving Jacksonville, Nocatee, Julington Creek Plantation, and St. Johns County since 2009.
            </p>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Monday–Friday: 7:00 AM – 6:00 PM</li>
              <li>Saturday: 9:00 AM – 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Service Areas:</p>
              <p className="text-sm text-gray-300">
                Jacksonville, Nocatee, Julington Creek Plantation, and surrounding St. Johns County communities
              </p>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-lime mr-3 mt-0.5" />
                <span className="text-gray-300">
                  3021 Loretto Rd<br />
                  Jacksonville, Florida 32223
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-lime mr-3" />
                <div className="text-gray-300">
                  <a href="tel:9043701007" className="hover:text-brand-lime transition-colors block">
                    Store: (904) 370-1007
                  </a>
                  <a href="tel:90434GREEN" className="hover:text-brand-lime transition-colors block">
                    Mobile: (904) 34-GREEN
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-lime mr-3" />
                <a href="mailto:agreenercleaner@yahoo.com" className="text-gray-300 hover:text-brand-lime transition-colors">
                  agreenercleaner@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} A Greener Cleaner. All rights reserved.
            </p>
            <div>
              <p className="text-xs text-gray-400 mb-2 text-center md:text-right">
                Content, including images, displayed on this website is protected by copyright laws.<br className="hidden md:block" />
                Downloading, republication, retransmission, or reproduction of content on this website is strictly prohibited.
              </p>
              <div className="text-center md:text-right">
                <Link to="/terms-privacy" className="text-gray-400 hover:text-brand-lime text-sm transition-colors">
                  Terms of Use | Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;