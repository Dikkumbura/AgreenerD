import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center">
            <img 
              src="/images/logo.webp" 
              alt="A Greener Cleaner Logo" 
              className={`h-auto ${isScrolled ? 'w-14' : 'w-16'} my-auto`}
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-between items-center">
            <div className="flex-1"></div> {/* Spacer */}
            <nav className="flex flex-[3] justify-center">
              <div className="flex justify-between items-center w-full">
                {['About', 'Services', 'How It Works', 'Sustainability', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`${isScrolled ? 'text-base' : 'text-lg'} font-medium text-brand-navy/80 hover:text-brand-navy transition-colors py-2`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>
            <div className="flex-1 flex justify-end">
              <button 
                className="bg-brand-lime hover:bg-brand-green text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner"
              >
                Schedule Pickup
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-auto"
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
        <div className="md:hidden bg-white">
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