import React, { useEffect, useRef } from 'react';
import { Recycle, Droplet, ThumbsUp } from 'lucide-react';

const Sustainability: React.FC = () => {
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
      id="sustainability"
      ref={sectionRef}
      className="py-20 bg-brand-navy opacity-0 translate-y-8 transition-all duration-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block bg-brand-lime/20 text-brand-lime text-sm font-medium py-1 px-3 rounded-full mb-4">
            Eco-Friendly Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Most Advanced Green Dry Cleaning in Jacksonville
          </h2>
          <p className="text-lg text-gray-300">
            Our commitment to sustainability goes beyond just words. We've invested in the most advanced wet cleaning technology and eco-friendly practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="rounded-full bg-brand-lime w-12 h-12 flex items-center justify-center mb-6">
              <Droplet className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Water-Based Cleaning</h3>
            <p className="text-gray-300">
              Our computerized wet cleaning process uses precisely controlled water temperatures, specialized detergents, and gentle mechanical action to clean all types of garments—even those labeled "dry clean only."
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="rounded-full bg-brand-lime w-12 h-12 flex items-center justify-center mb-6">
              <ThumbsUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Zero PERC</h3>
            <p className="text-gray-300">
              We've eliminated perchloroethylene (PERC), a toxic chemical commonly used in dry cleaning that's linked to cancer, neurological damage, and environmental harm. Your clothes and our planet deserve better.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="rounded-full bg-brand-lime w-12 h-12 flex items-center justify-center mb-6">
              <Recycle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Sustainable Operations</h3>
            <p className="text-gray-300">
              From energy-efficient equipment to biodegradable packaging and recycled hangers, every aspect of our business is designed to minimize environmental impact while maximizing cleaning effectiveness.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-brand-lime hover:bg-brand-green text-white font-medium py-3 px-6 rounded-full transition-colors inline-flex items-center">
            Learn More About Our Green Process
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;