import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Droplets, Leaf, Award } from 'lucide-react';

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
      icon: <ShieldCheck className="h-8 w-8 text-brand-lime" />,
      title: "No Toxic Residue",
      description: "Zero chemical residue left on your clothes, making them truly clean and safe to wear."
    },
    {
      icon: <Droplets className="h-8 w-8 text-brand-lime" />,
      title: "Safe for Sensitive Skin",
      description: "Gentle cleaning process perfect for those with allergies or skin sensitivities."
    },
    {
      icon: <Leaf className="h-8 w-8 text-brand-lime" />,
      title: "Eco-Friendly Detergents",
      description: "We use only biodegradable, plant-based detergents that protect our environment."
    },
    {
      icon: <Award className="h-8 w-8 text-brand-lime" />,
      title: "LEED-Certified Process",
      description: "Our facility meets the highest environmental standards for sustainability."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Finally—Clothes That Aren't Another Toxin in Your Life
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default IconGrid;