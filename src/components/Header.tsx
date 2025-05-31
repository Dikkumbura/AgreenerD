import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Wedding Gown Cleaning', path: '/wedding-gown-dry-cleaning', special: true },
    { name: 'Wet Cleaning', path: '/professional-dry-cleaning' },
    { name: 'Delivery Areas', path: '/delivery-areas' },
    { name: 'Contact Us', path: '/contact-dry-cleaning-experts' },
  ];

  const handleNavClick = (path: string) => {
    if (path === '/wedding-gown-dry-cleaning' || location.pathname === '/wedding-gown-dry-cleaning') {
      window.location.href = path;
    } else {
      setIsMenuOpen(false);
      // Let React Router handle it for SPA navigation
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 md:backdrop-blur-sm border-b border-gray-200 will-change-transform">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => handleNavClick('/')}>
              <img src="/images/logo.webp" alt="A Greener Cleaner Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.path === '/wedding-gown-dry-cleaning' || location.pathname === '/wedding-gown-dry-cleaning' ? (
                <a
                  key={item.name}
                  href={item.path} // Full page reload
                  className={
                    `${item.special ? 'text-brand-lime font-semibold border-2 border-brand-lime px-4 py-1 rounded-full hover:bg-brand-lime hover:text-white' : 'text-brand-navy/80 hover:text-brand-navy'} transition-all duration-300 ${location.pathname === item.path ? 'text-brand-navy font-semibold' : ''}`
                  }
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.path); }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path} // SPA navigation
                  className={
                    `${item.special ? 'text-brand-lime font-semibold border-2 border-brand-lime px-4 py-1 rounded-full hover:bg-brand-lime hover:text-white' : 'text-brand-navy/80 hover:text-brand-navy'} transition-all duration-300 ${location.pathname === item.path ? 'text-brand-navy font-semibold' : ''}`
                  }
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link to="/dry-cleaning-delivery-services" onClick={() => handleNavClick('/dry-cleaning-delivery-services')} className="bg-brand-lime hover:bg-brand-lime/90 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
              Schedule Pickup
            </Link>
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
              item.path === '/wedding-gown-dry-cleaning' || location.pathname === '/wedding-gown-dry-cleaning' ? (
                <a
                  key={item.name}
                  href={item.path} // Full page reload
                  className={`
                    block transition-colors text-center
                    ${item.special ? 'text-brand-lime font-semibold border-2 border-brand-lime px-4 py-1 rounded-full hover:bg-brand-lime hover:text-white' : 'text-brand-navy/80 hover:text-brand-navy'}
                    ${location.pathname === item.path ? 'text-brand-navy font-semibold' : ''}
                  `}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.path); }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path} // SPA navigation
                  className={`
                    block transition-colors text-center
                    ${item.special ? 'text-brand-lime font-semibold border-2 border-brand-lime px-4 py-1 rounded-full hover:bg-brand-lime hover:text-white' : 'text-brand-navy/80 hover:text-brand-navy'}
                    ${location.pathname === item.path ? 'text-brand-navy font-semibold' : ''}
                  `}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link to="/dry-cleaning-delivery-services" onClick={() => handleNavClick('/dry-cleaning-delivery-services')} className="w-full bg-brand-lime hover:bg-brand-lime/90 text-white px-4 py-2 rounded-full transition-all duration-300 text-center">
              Schedule Pickup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;