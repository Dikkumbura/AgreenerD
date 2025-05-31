import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

const ContactUs: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Contact Our Dry Cleaning Experts | Jacksonville, FL | A Greener Cleaner"
        description="Looking for dry cleaning experts? Contact A Greener Cleaner in Jacksonville, FL today. We offer a variety of services for your convenience!"
        keywords="contact dry cleaners, Jacksonville dry cleaning, eco friendly cleaning, St Johns County, Nocatee, Julington Creek"
        canonicalUrl="https://www.agreenerdrycleaner.com/contact-dry-cleaning-experts"
        ogImage="https://lirp.cdn-website.com/d951d82e/dms3rep/multi/opt/Logo-Open-Graph-1920w.jpg"
      />
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Contact A Greener Cleaner
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Have questions about our green dry cleaning services? Looking for expert garment care, delivery scheduling, 
              or pricing info? We're here to help. Contact A Greener Cleaner today, we'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-lime mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                    <p className="text-gray-700">
                      <span className="font-medium">Store Phone:</span> <a href="tel:9043701007" className="text-brand-lime hover:text-brand-green">(904) 370-1007</a><br />
                      <span className="font-medium">Store Mobile:</span> <a href="tel:90434GREEN" className="text-brand-lime hover:text-brand-green">(904) 34-GREEN</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-lime mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:agreenercleaner@yahoo.com" className="text-brand-lime hover:text-brand-green">
                        agreenercleaner@yahoo.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-lime mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-gray-700">
                      3021 Loretto Rd<br />
                      Jacksonville, Florida 32223
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-brand-lime mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>Monday–Friday: 7:00 AM – 6:00 PM</li>
                      <li>Saturday: 9:00 AM – 2:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">Service Areas</h3>
                <p className="text-gray-700 mb-4">
                  We proudly serve customers throughout Jacksonville, Nocatee, Julington Creek Plantation, 
                  and the surrounding St. Johns County communities.
                </p>
                <Link to="/delivery-areas" className="text-brand-lime hover:text-brand-green font-medium">
                  View our Delivery Areas →
                </Link>
              </div>

              <div className="bg-brand-lime/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">Need a Pickup?</h3>
                <p className="text-gray-700 mb-4">
                  Request a contactless pickup or delivery right from your phone. We'll send a reminder 
                  the night before. When you confirm, we'll arrive the next day — no hassle.
                </p>
                <Link 
                  to="/schedule-pickup" 
                  className="inline-block bg-brand-lime hover:bg-brand-green text-white font-medium px-6 py-3 rounded-full transition-colors"
                >
                  Schedule Pickup
                </Link>
              </div>

              <div className="mt-6 p-6 border border-gray-200 rounded-2xl">
                <h3 className="text-lg font-semibold text-brand-navy mb-3">
                  Looking for wedding gown care, leather cleaning, or alterations?
                </h3>
                <p className="text-gray-700">
                  Call or message us to speak with a specialist. We're happy to walk you through the process 
                  and ensure your garments are cleaned the right way — safely, sustainably, and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs; 