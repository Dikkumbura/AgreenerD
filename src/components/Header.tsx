import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white/30 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Leaf className={`h-8 w-8 ${isScrolled ? 'text-brand-green' : 'text-brand-navy'}`} />
            <span className={`ml-2 text-xl font-semibold text-brand-navy`}>
              A Greener Cleaner
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Services', 'How It Works', 'Sustainability', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-brand-navy/80 hover:text-brand-navy transition-colors"
              >
                {item}
              </a>
            ))}
            <button 
              className="bg-brand-lime hover:bg-brand-green text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner"
            >
              Schedule Pickup
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-brand-navy" />
            ) : (
              <Menu className="h-6 w-6 text-brand-navy" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['About', 'Services', 'How It Works', 'Sustainability', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-3 py-2 text-base font-medium text-brand-navy hover:text-brand-lime transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="w-full mt-3 bg-brand-lime hover:bg-brand-green text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule Pickup
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;