import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'Sustainability', path: '/#sustainability' },
    { name: 'Bridal Gown', path: '/bridal-gown' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 md:backdrop-blur-sm border-b border-gray-200 will-change-transform">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/images/logo.webp" alt="A Greener Cleaner Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-brand-navy/80 hover:text-brand-navy transition-colors ${
                  location.pathname === item.path ? 'text-brand-navy font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-brand-lime hover:bg-brand-lime/90 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
              Schedule Pickup
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-brand-navy/80 hover:text-brand-navy transition-colors ${
                  location.pathname === item.path ? 'text-brand-navy font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-brand-lime hover:bg-brand-lime/90 text-white px-4 py-2 rounded-full transition-all duration-300">
              Schedule Pickup
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;