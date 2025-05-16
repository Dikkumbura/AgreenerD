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
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg"
              alt="Dry clean only tags on clothing"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-brand-yellow rounded-lg p-4 shadow-lg">
              <AlertTriangle className="h-8 w-8 text-brand-navy" />
            </div>
          </div>

          {/* Right Column - Text */}
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">
              Traditional Dry Cleaning Is Toxic.
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Most dry cleaners still use perchloroethylene—a chemical linked to cancer and skin irritation. 
              These toxins soak into your clothes, your skin, and your air.
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
                    A Greener Cleaner uses EPA-approved wet cleaning—safe, effective, 
                    and water-based with zero toxins.
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