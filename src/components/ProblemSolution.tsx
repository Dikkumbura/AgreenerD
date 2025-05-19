import React from 'react';
import { AlertTriangle, Check } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              Traditional Dry Cleaning Is Toxic.
            </h2>
            <p className="text-lg text-gray-700 mb-8">
            Most dry cleaners have moved from toxic perchloroethylene (PERC) to less harmful petroleum-based solvents, but these newer chemicals still carry health risks, environmental concerns, and leave behind chemical residue.
            </p>
            <div className="bg-brand-lime/10 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-brand-lime rounded-full p-2 mr-4">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    We do it differently
                  </h3>
                  <p className="text-gray-700">
                  Our EPA-approved wet cleaning system uses only water and biodegradable detergents, so your clothes are truly clean, not chemically masked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;