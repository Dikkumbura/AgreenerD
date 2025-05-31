import React from 'react';
import { Shield, FileText } from 'lucide-react';

const TermsPrivacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Terms and Conditions / Privacy Policy
          </h1>
        </div>

        {/* Terms and Conditions Section */}
        <div className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-brand-lime mr-3" />
              <h2 className="text-2xl font-semibold text-brand-navy">Terms and Conditions of Use (TOU)</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              A Greener Cleaner provides the following Terms and Conditions of Use (TOU) for this website. 
              By accessing or using our site, you agree to be bound by these terms. If you have any questions 
              regarding the TOU, please contact us at{' '}
              <a href="mailto:agreenercleaner@yahoo.com" className="text-brand-lime hover:text-brand-green">
                agreenercleaner@yahoo.com
              </a>.
            </p>

            <div className="border-t border-gray-200 mt-8 pt-8">
              <h3 className="text-lg font-semibold text-brand-navy mb-4">Website Use</h3>
              <p className="text-gray-700 mb-4">
                Content, including images, displayed on this website is protected by copyright laws. 
                Downloading, republication, retransmission, or reproduction of content on this website 
                is strictly prohibited.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Section */}
        <div>
          <div className="bg-brand-lime/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-brand-lime mr-3" />
              <h2 className="text-2xl font-semibold text-brand-navy">Privacy Policy</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. A Greener Cleaner outlines its practices for collecting, 
              using, and protecting customer information in the Privacy Policy below. If you have any 
              questions or concerns regarding this policy, please email us at{' '}
              <a href="mailto:agreenercleaner@yahoo.com" className="text-brand-lime hover:text-brand-green">
                agreenercleaner@yahoo.com
              </a>.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3">Information Collection</h3>
                <p className="text-gray-700">
                  We collect information you provide directly to us, such as when you schedule a pickup, 
                  contact us, or otherwise interact with our services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3">Use of Information</h3>
                <p className="text-gray-700">
                  We use the information we collect to provide, maintain, and improve our services, 
                  to communicate with you, and to comply with legal obligations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3">Information Security</h3>
                <p className="text-gray-700">
                  We take reasonable measures to help protect information about you from loss, theft, 
                  misuse, and unauthorized access, disclosure, alteration, and destruction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3">Contact Information</h3>
                <p className="text-gray-700">
                  For any questions about these policies, please contact us at:
                </p>
                <div className="mt-3 bg-white rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:agreenercleaner@yahoo.com" className="text-brand-lime hover:text-brand-green">
                      agreenercleaner@yahoo.com
                    </a><br />
                    <strong>Phone:</strong>{' '}
                    <a href="tel:9043701007" className="text-brand-lime hover:text-brand-green">
                      (904) 370-1007
                    </a><br />
                    <strong>Address:</strong> 3021 Loretto Rd, Jacksonville, Florida 32223
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacy; 