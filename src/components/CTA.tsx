import React, { useEffect, useRef } from 'react';

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
            Ready to Detox Your Wardrobe?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Jacksonville residents who have switched to truly clean, eco-friendly dry cleaning. Your clothes (and the planet) will thank you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white hover:bg-gray-100 text-brand-navy font-medium py-3 px-8 rounded-full transition-colors shadow-lg inline-flex items-center">
              Schedule Free Pickup
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="mt-12 inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-xl">
            <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-white">First-time customers receive 20% off their first order</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;