import React, { useEffect, useRef } from 'react';
import { Recycle, Droplet, ThumbsUp, ArrowRight } from 'lucide-react';

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

  const features = [
    {
      icon: <Droplet className="h-8 w-8" />,
      title: "Water-Based Cleaning",
      description: 'Our computerized wet cleaning process uses precisely controlled water temperatures, specialized detergents, and gentle mechanical action to clean all types of garments—even those labeled "dry clean only."'
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Zero PERC",
      description: "We've eliminated perchloroethylene (PERC), a toxic chemical commonly used in dry cleaning that's linked to cancer, neurological damage, and environmental harm. Your clothes and our planet deserve better."
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Sustainable Operations",
      description: "From energy-efficient equipment to biodegradable packaging and recycled hangers, every aspect of our business is designed to minimize environmental impact while maximizing cleaning effectiveness."
    }
  ];

  return (
    <section 
      id="sustainability"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-brand-navy to-brand-navy/95 opacity-0 translate-y-8 transition-all duration-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-brand-lime/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></div>
            <span className="text-brand-lime font-medium">Eco-Friendly Approach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The Most Advanced Green Dry Cleaning in Jacksonville
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our commitment to sustainability goes beyond just words. We've invested in the most advanced wet cleaning technology and eco-friendly practices.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-brand-lime/30"
              style={{
                transform: `translateY(${index * 20}px)`,
                animation: `float 3s ease-in-out infinite ${index * 0.5}s`
              }}
            >
              <div className="absolute -top-4 -right-4 bg-brand-lime/20 w-20 h-20 rounded-full blur-2xl group-hover:bg-brand-lime/30 transition-all duration-300"></div>
              <div className="relative">
                <div className="rounded-xl bg-brand-lime/20 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-brand-lime/30 transition-colors duration-300">
                  <div className="text-brand-lime group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-brand-lime transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button className="group inline-flex items-center bg-brand-lime hover:bg-brand-lime/90 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-lime/20 transform hover:-translate-y-1">
            Learn More About Our Green Process
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Add floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Sustainability;