import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-brand-lime to-brand-green opacity-0 translate-y-8 transition-all duration-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Naturally Greener, Fresher, and Cleaner Clothes?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience Jacksonville's ONLY 100% Wet Cleaner. Free pickup and delivery available throughout 
            Jacksonville and St. Johns County.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/dry-cleaning-delivery-services" 
              className="bg-white hover:bg-gray-100 text-brand-navy font-medium py-3 px-8 rounded-full transition-colors shadow-lg inline-flex items-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Pickup
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition-colors inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Today
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-xl">
              <span className="text-sm font-medium text-white">Locally Owned Since 2009</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-xl">
              <span className="text-sm font-medium text-white">Free Pickup & Delivery</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-xl">
              <span className="text-sm font-medium text-white">100% Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;