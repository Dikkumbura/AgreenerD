import React from 'react';
import { Droplet, Shield, Check, Leaf } from 'lucide-react';
import SEOHead from './SEOHead';

const WetCleaning: React.FC = () => {
  const fabricTypes = [
    "Tailored suits",
    "Silk dresses", 
    "Cashmere sweaters",
    "Wool blazers",
    "Knit skirts",
    "Linen shirts"
  ];

  const safeFabrics = [
    "Tailored wool suits",
    "Cashmere sweaters",
    "Silk wedding dresses",
    "Camel hair sport coats",
    "Taffeta prom dresses",
    "Knit skirts"
  ];

  return (
    <>
      <SEOHead 
        title="Dry Cleaning Services | Jacksonville, FL | A Greener Cleaner"
        description="For professional dry cleaning services, turn to A Greener Cleaner in Jacksonville, FL. Call us today to schedule your pick-up!"
        keywords="wet cleaning Jacksonville, professional dry cleaning, eco friendly cleaning, garment care, Jacksonville, Nocatee, Julington Creek"
        canonicalUrl="https://www.agreenerdrycleaner.com/professional-dry-cleaning"
        ogImage="https://lirp.cdn-website.com/d951d82e/dms3rep/multi/opt/Logo-Open-Graph-1920w.jpg"
      />
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-lime rounded-full p-3 mb-4">
              <Droplet className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Wet Cleaning Services
            </h1>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy mb-4">Wet Cleaning</h2>
              <p className="text-gray-700 mb-6">
                Professional wet cleaning is a safe, energy-efficient method for cleaning "Dry Clean Only" garments, 
                using water instead of traditional chemical solvents. This process relies on a combination of 
                specially formulated soaps and fabric conditioners.
              </p>
              <p className="text-gray-700 mb-6">
                Nearly any garment that can be dry cleaned can also be wet cleaned. This includes:
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {fabricTypes.map((fabric, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-lime mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{fabric}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-sm italic">...and many more.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Our Process</h3>
              <p className="text-gray-700 mb-4">
                After cleaning, garments are dried using specialized equipment with precise control over moisture 
                levels, rotation, reversal, and temperature. Each item is then professionally finished to restore 
                its shape and appearance.
              </p>
              <div className="border-t border-gray-200 mt-6 pt-6">
                <p className="text-gray-700">
                  A Greener Cleaner uses programmable systems to maintain total control over the cleaning, drying, 
                  and finishing process for every fabric type.
                </p>
              </div>
            </div>
          </div>

          {/* Safe for Virtually Any Fabric Section */}
          <div className="bg-brand-lime/10 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-semibold text-brand-navy mb-6 text-center">
              Safe for Virtually Any Fabric
            </h2>
            <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              Our wet cleaning process is safe for even the most delicate garments — without shrinkage, 
              fading, or damage. This includes:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {safeFabrics.map((fabric, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center">
                  <Shield className="h-6 w-6 text-brand-lime mx-auto mb-2" />
                  <p className="text-gray-700">{fabric}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Greener. Safer. Better. Section */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-4 mb-8">
              <Leaf className="h-10 w-10 text-brand-lime" />
              <h2 className="text-3xl font-bold text-brand-navy">Greener. Safer. Better.</h2>
              <Leaf className="h-10 w-10 text-brand-lime" />
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-gray-700">
                A Greener Cleaner offers a non-toxic, environmentally safe alternative to traditional dry cleaning. 
                By relying on water rather than harsh solvents, we deliver superior results with greater efficiency, 
                and without environmental risk.
              </p>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">Environmental Benefits</h3>
                <p className="text-gray-700 mb-4">
                  Even better: Wet cleaning is not subject to state or federal environmental restrictions. 
                  Our products are manufactured in eco-conscious facilities and may qualify for LEED 
                  (Leadership in Energy and Environmental Design) credits.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <span className="bg-brand-lime/20 text-brand-navy px-4 py-2 rounded-full text-sm font-medium">
                    No Environmental Restrictions
                  </span>
                  <span className="bg-brand-lime/20 text-brand-navy px-4 py-2 rounded-full text-sm font-medium">
                    LEED Credit Eligible
                  </span>
                  <span className="bg-brand-lime/20 text-brand-navy px-4 py-2 rounded-full text-sm font-medium">
                    Eco-Conscious Manufacturing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WetCleaning; 