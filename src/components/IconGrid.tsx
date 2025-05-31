import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Truck, DollarSign, Award, Leaf, Clock } from 'lucide-react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, delay }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add a delay based on the item's position
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, delay);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 opacity-0 translate-y-8"
    >
    <div className="rounded-full bg-brand-lime/10 w-16 h-16 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-brand-navy">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
};

const IconGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
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
      icon: <Leaf className="h-8 w-8 text-brand-lime" />,
      title: "Green Cleaning Services",
      description: "From stain removal to alterations, A Greener Cleaner handles it all. We work with all fabric types, including leather, silk, wool, cotton, and more."
    },
    {
      icon: <Truck className="h-8 w-8 text-brand-lime" />,
      title: "Quick Delivery",
      description: "Save time and money with our efficient dry cleaning delivery service. We serve businesses and residents throughout Jacksonville and the surrounding areas."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-brand-lime" />,
      title: "Competitive Pricing",
      description: "At A Greener Cleaner, we believe you shouldn't have to choose between quality and cost. That's why we offer both high-quality results at competitive pricing."
    }
  ];

  const certifications = [
    "Disinfectant Commission in VAH",
    "Mega Pur Certificate",
    "Viva Oxy Certificate"
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Our Services & Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Searching for a naturally greener, fresher, and cleaner dry cleaning company? Look no further than A Greener Cleaner of Jacksonville.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 200} // Stagger the animations by 200ms
            />
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <div className="bg-brand-lime rounded-full p-3 inline-block mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-brand-navy">Our Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <ShieldCheck className="h-6 w-6 text-brand-lime mx-auto mb-2" />
                <p className="text-gray-700 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Clock className="h-8 w-8 text-brand-lime mb-2" />
            <h4 className="font-semibold text-brand-navy">Locally Owned & Operated</h4>
            <p className="text-gray-600 text-sm">Serving Jacksonville since 2009</p>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="h-8 w-8 text-brand-lime mb-2" />
            <h4 className="font-semibold text-brand-navy">Delivery Services Available</h4>
            <p className="text-gray-600 text-sm">Free pickup and delivery</p>
          </div>
          <div className="flex flex-col items-center">
            <Leaf className="h-8 w-8 text-brand-lime mb-2" />
            <h4 className="font-semibold text-brand-navy">Jacksonville's ONLY 100% Wet Cleaner!</h4>
            <p className="text-gray-600 text-sm">No toxic chemicals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconGrid;