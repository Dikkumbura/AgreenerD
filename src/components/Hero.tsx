import React from 'react';
import { Calendar, Info, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-green/90">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
                Jacksonville's #1 Eco-Friendly Dry Cleaner
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Breathe Easy.
              <span className="block mt-2 text-brand-lime">Wear Clean.</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-xl">
              No harsh chemicals. No toxic residue. Just truly clean clothes—inside and out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-brand-lime hover:bg-brand-green text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg inline-flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Schedule Free Pickup
              </button>
              <button className="group bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center">
                <Info className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                How Wet Cleaning Works
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { number: '5K+', label: 'Happy Customers' },
                { number: '100%', label: 'Eco-Friendly' },
                { number: '24H', label: 'Turnaround' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-brand-lime">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Decorative Element */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-brand-lime/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-brand-lime/20 to-brand-green/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="aspect-square rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-xl bg-white/5"></div>
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