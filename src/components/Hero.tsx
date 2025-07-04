import React from 'react';
import { Calendar, Phone, Leaf, Recycle, Clock, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-green/90">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/images/dry-cleaning-vs-laundry-1024x683.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundPositionY: '0%',
          mixBlendMode: 'overlay',
          opacity: 0.4
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-brand-lime rounded-full p-2">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium bg-white/10 px-4 py-1 rounded-full">
                Your Green Dry Cleaners Since 2009
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Naturally Greener,
              <span className="block mt-2 text-brand-lime">Fresher, and Cleaner!</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-xl">
              Jacksonville's ONLY 100% Wet Cleaner! Safe, effective, and eco-conscious care. 
              No toxic solvents, no harsh chemicals — just clean clothes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dry-cleaning-delivery-services" className="group bg-brand-lime hover:bg-brand-green text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg inline-flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Schedule Free Pickup
              </Link>
              <a href="tel:9043701007" className="group bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Call (904) 370-1007
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-6 mt-8 text-sm">
              <div>
                <div className="text-brand-lime font-semibold mb-1">Free Pick-Up & Delivery</div>
                <div className="text-gray-300">Serving Jacksonville & St. Johns County</div>
              </div>
              <div>
                <div className="text-brand-lime font-semibold mb-1">Locally Owned & Operated</div>
                <div className="text-gray-300">Trusted since 2009</div>
              </div>
            </div>
          </div>

          {/* Right Column - Service Benefits */}
          <div className="hidden lg:block relative">
            <div className="relative bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose A Greener Cleaner?</h3>
              <div className="grid gap-6">
                {[
                  {
                    icon: <Recycle className="h-8 w-8 text-brand-lime" />,
                    title: "100% Wet Cleaning",
                    description: "The only wet cleaner in Jacksonville - no toxic solvents or carcinogens"
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-brand-lime" />,
                    title: "Green Cleaning Services",
                    description: "From stain removal to alterations - all fabric types handled with care"
                  },
                  {
                    icon: <Clock className="h-8 w-8 text-brand-lime" />,
                    title: "Quick Delivery",
                    description: "Save time with efficient pickup and delivery throughout Jacksonville"
                  },
                  {
                    icon: <Truck className="h-8 w-8 text-brand-lime" />,
                    title: "Competitive Pricing",
                    description: "High-quality results without the high cost"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-lime/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-brand-green/30 rounded-full filter blur-3xl"></div>
    </div>
  );
};

export default Hero;