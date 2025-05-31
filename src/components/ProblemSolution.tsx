import React from 'react';
import { AlertTriangle, Check, Droplet, Shield } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <div className="relative">
            <img
              src="/images/Simply-Laundry-Perc-1- upscaled.png"
              alt="Traditional dry cleaning chemicals"
              className="rounded-lg shadow-lg w-full max-w-[85%] sm:max-w-full mx-auto"
            />
            <div className="absolute -bottom-4 right-2 sm:right-0 bg-brand-yellow rounded-lg p-2 sm:p-3 shadow-lg">
              <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-brand-navy" />
            </div>
          </div>

          {/* Right Column - Text */}
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">
              Why Choose A Greener Cleaner?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              When you choose A Greener Cleaner, you're choosing safe, effective, and eco-conscious care. We are the only 100% Wet Cleaner in Jacksonville. Unlike traditional dry cleaners, we never use toxic solvents known to contain carcinogens.
            </p>
            <div className="bg-brand-lime/10 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-brand-lime rounded-full p-2 mr-4">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    Your clothes will be cleaner and fresher
                  </h3>
                  <p className="text-gray-700">
                    Our EPA-approved wet cleaning system uses only water and biodegradable detergents, so your clothes are truly clean, not chemically masked. They'll feel fresher and healthier, too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is Wet Cleaning Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="bg-brand-lime rounded-full p-3 inline-block mb-4">
              <Droplet className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">What is Wet Cleaning?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Wet cleaning uses water and specialized detergents that are gentler than household products. Our equipment includes computer-controlled washers, dryers, and professional finishing tools to help your garments look their best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-4 flex items-center">
                <Shield className="h-6 w-6 text-brand-lime mr-2" />
                EPA Recognized Safety
              </h3>
              <p className="text-gray-700 mb-4">
                The EPA considers wet cleaning one of the safest professional garment cleaning methods, with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-lime mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">No hazardous chemical use</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-lime mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">No hazardous waste generation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-lime mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">No air pollution</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand-lime mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Reduced risk of water and soil contamination</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Our Process</h3>
              <p className="text-gray-700">
                We take extra care before and after cleaning to treat stains effectively, without the use of harsh solvents. Every garment receives personalized attention to ensure the best results while maintaining fabric integrity.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-brand-lime/10 text-brand-navy px-3 py-1 rounded-full text-sm font-medium">
                  Computer-Controlled
                </span>
                <span className="bg-brand-lime/10 text-brand-navy px-3 py-1 rounded-full text-sm font-medium">
                  Professional Equipment
                </span>
                <span className="bg-brand-lime/10 text-brand-navy px-3 py-1 rounded-full text-sm font-medium">
                  Biodegradable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;