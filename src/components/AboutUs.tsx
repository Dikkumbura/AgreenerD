import React, { useEffect, useRef } from 'react';
import { Leaf, MapPin, Phone, Mail, Globe, CheckCircle, Truck, Heart } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-brand-lime" />, 
    title: 'Non-Toxic & Skin-Safe',
    desc: 'We never use PERC or harsh solvents. Our methods are gentle on sensitive skin and allergy-friendly.'
  },
  {
    icon: <Leaf className="h-6 w-6 text-brand-lime" />, 
    title: 'Eco-Friendly Detergents',
    desc: 'Every solution we use is biodegradable, safe for waterways, and better for the planet.'
  },
  {
    icon: <Heart className="h-6 w-6 text-brand-lime" />, 
    title: 'Wedding Dress Specialists',
    desc: 'Brides trust us for cleaning, preserving, and boxing their gowns with zero chemical residue.'
  },
  {
    icon: <Truck className="h-6 w-6 text-brand-lime" />, 
    title: 'Pickup & Delivery',
    desc: 'Free local service available across Jacksonville—saving you time and trips.'
  },
];

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      setTimeout(() => {
        el.classList.remove('opacity-0', 'translate-y-8');
        el.classList.add('opacity-100', 'translate-y-0');
      }, 100);
    }
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-16 px-4 opacity-0 translate-y-8 transition-all duration-700">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center space-x-2 bg-brand-lime/20 rounded-full px-4 py-2 mb-6">
          <Leaf className="h-5 w-5 text-brand-lime animate-pulse" />
          <span className="text-brand-lime font-medium">Jacksonville's First Green Dry Cleaner – Since 2009</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          In 2009, while the rest of the dry cleaning industry was still cycling through toxic chemicals, Young Shon saw a better way. He opened A Greener Cleaner with a single mission:
        </p>
        <p className="text-xl text-brand-navy font-semibold mb-4">To clean clothes without polluting the air, your skin, or our planet.</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We introduced EPA-approved wet cleaning to Jacksonville—an advanced water-based system that safely cleans everything from everyday garments to delicate bridal gowns. No PERC. No petrochemicals. Just truly clean clothes.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-center mb-8">
          <span className="h-1 w-16 bg-brand-lime rounded-full"></span>
        </div>
        <h2 className="text-2xl font-bold text-brand-navy text-center mb-8">Why We're Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4 bg-brand-lime/10 rounded-xl p-6 shadow-md transition-all duration-500 hover:scale-105">
              <div>{f.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-1">{f.title}</h3>
                <p className="text-gray-700">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex items-center justify-center mb-8">
          <span className="h-1 w-16 bg-brand-lime rounded-full"></span>
        </div>
        <h2 className="text-2xl font-bold text-brand-navy text-center mb-4">Our Location</h2>
        <div className="flex items-center justify-center gap-3 text-brand-navy mb-2">
          <MapPin className="h-5 w-5 text-brand-lime" />
          <span>3021 Loretto Rd, Jacksonville, FL 32223</span>
        </div>
        <p className="text-gray-700 text-center">(Located in Mandarin Oaks Plaza)</p>
      </div>
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex items-center justify-center mb-8">
          <span className="h-1 w-16 bg-brand-lime rounded-full"></span>
        </div>
        <h2 className="text-2xl font-bold text-brand-navy text-center mb-4">Contact</h2>
        <div className="flex flex-col items-center gap-2 text-brand-navy">
          <div className="flex items-center gap-2"><Phone className="h-5 w-5 text-brand-lime" /> <span>(904) 370-1007</span></div>
          <div className="flex items-center gap-2"><Phone className="h-5 w-5 text-brand-lime" /> <span>(904) 344-7336</span> <span className="text-xs text-gray-500">(Mobile/Text)</span></div>
          <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-brand-lime" /> <span>agreenercleaner@yahoo.com</span></div>
          <div className="flex items-center gap-2"><Globe className="h-5 w-5 text-brand-lime" /> <a href="https://www.agreenerdrycleaner.com" className="underline hover:text-brand-lime transition">www.agreenerdrycleaner.com</a></div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <span className="h-1 w-16 bg-brand-lime rounded-full"></span>
        </div>
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Sustainability Is Not a Trend—It's Our Standard</h2>
        <p className="text-lg text-gray-700 mb-4">For over a decade, we've helped families detox their closets, preserve once-in-a-lifetime gowns, and protect their health.</p>
        <p className="text-xl text-brand-navy font-semibold mb-4">We're not just greener by name. We're greener by design.</p>
      </div>
    </section>
  );
};

export default AboutUs; 