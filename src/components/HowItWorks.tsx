import React, { useEffect, useRef } from 'react';
import { Calendar, Droplets, Truck } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon, number, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative">
      <div className="rounded-full bg-brand-navy w-20 h-20 flex items-center justify-center mb-6">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 bg-brand-yellow rounded-full w-8 h-8 flex items-center justify-center font-bold text-brand-navy">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-3 text-brand-navy">{title}</h3>
    <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
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

  const steps = [
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      number: 1,
      title: "Schedule",
      description: "Book a free pickup online or by phone. We'll come to your home or office at a time convenient for you."
    },
    {
      icon: <Droplets className="h-8 w-8 text-white" />,
      number: 2,
      title: "Clean with Water",
      description: "We clean your clothes using our advanced wet cleaning process with biodegradable detergents and no harsh chemicals."
    },
    {
      icon: <Truck className="h-8 w-8 text-white" />,
      number: 3,
      title: "Delivery",
      description: "Your fresh, clean clothes are delivered back to you, neatly pressed and folded, within 48 hours."
    }
  ];

  return (
    <section 
      id="how-it-works"
      ref={sectionRef}
      className="py-20 bg-white opacity-0 translate-y-8 transition-all duration-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-lime/20 text-brand-green text-sm font-medium py-1 px-3 rounded-full mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our eco-friendly cleaning service is as convenient as it is effective. Here's our simple three-step process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-lime via-brand-green to-brand-lime z-0"></div>
            
            {steps.map((step, index) => (
              <Step 
                key={index}
                icon={step.icon}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-brand-navy hover:bg-brand-navy/90 text-white font-medium py-3 px-6 rounded-full transition-colors inline-flex items-center">
              Schedule Your Free Pickup Today
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;