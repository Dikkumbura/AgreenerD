import React from 'react';
import { Truck, MapPin, Building, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

const DeliveryAreas: React.FC = () => {
  const nocateeAreas = [
    "Woodland Park",
    "Del Webb",
    "Crosswinds at Nocatee",
    "Seabrook Village",
    "West End at Town Center",
    "Palm Crest at Seabrook",
    "Coral Ridge at Seabrook",
    "River Landing at Twenty Mile"
  ];

  const julingtonAreas = [
    "Durbin Parke", "Flora Parke", "Bartram Parke", "Lake Parke",
    "Plantation Estates", "Plantation Grove", "Magnolia Preserve", "Southern Creek",
    "Riverside", "West Branch", "Durbin Estates", "Eastwood",
    "East Branch", "Tiffany Oaks", "Heritage Oaks", "Manor Oaks",
    "Sutton Hollow", "Pine Chase", "Whispering Pines", "Pine Crossing",
    "Stonebridge", "Silver Creek", "Grovewood", "Southbridge",
    "Sawmill Pointe", "Woodbridge", "Southwood", "Plantation Cove",
    "The Meadows", "Westgate", "Eastgate", "Edgewater",
    "Fox Creek", "Creekside", "Willow Pond", "Plantation Island",
    "Summerchase", "Brook Hollow", "The Greens", "Oak Pointe",
    "Timber Trace", "Durbin Crossing", "Bayberry", "Maplewood"
  ];

  return (
    <>
      <SEOHead 
        title="Dry Cleaning Delivery | Nocatee & Julington Creek, FL | A Greener Cleaner"
        description="A Greener Cleaner offers dry cleaning delivery services in Nocatee & Julington Creek Plantation, FL. Call today to learn more!"
        keywords="dry cleaning delivery Nocatee, Julington Creek dry cleaning, pickup and delivery, St Johns County, Jacksonville"
        canonicalUrl="https://www.agreenerdrycleaner.com/delivery-areas" // Consolidated URL
        ogImage="https://lirp.cdn-website.com/d951d82e/dms3rep/multi/opt/Logo-Open-Graph-1920w.jpg"
      />
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-lime rounded-full p-3 mb-4">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Free Dry Cleaning Pick-Up & Delivery
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Don't have time to stop by? No problem. A Greener Cleaner of Jacksonville, FL offers convenient 
              commercial and residential dry cleaning pick-up and delivery services across St. Johns County, 
              including Nocatee and Julington Creek Plantation.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
              We deliver clean, fresh garments right to your door, saving you time and hassle. Our eco-friendly 
              approach ensures your clothes are cleaned without harmful chemicals, and with the same attention 
              to quality that defines every service we offer.
            </p>
          </div>

          {/* Nocatee Section */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-semibold text-brand-navy mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-brand-lime mr-2" />
                Dry Cleaning Delivery in Nocatee, FL
              </h2>
              <p className="text-gray-700 mb-6">
                Get your dry cleaning delivered directly to your home or office in Nocatee. From everyday laundry 
                and dry cleaning to household items, our team brings professional care and green cleaning solutions 
                right to your doorstep.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-lg text-brand-navy mb-3 flex items-center">
                    <Building className="h-5 w-5 text-brand-lime mr-2" />
                    We Deliver To:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Professional Offices & Workplaces</li>
                    <li>• Residential Homes</li>
                    <li>• Apartment Complexes & More</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-brand-navy mb-3">
                    Proudly Serving Our Customers in Nocatee, FL Including:
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700">
                    {nocateeAreas.map((area, index) => (
                      <li key={index}>• {area}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Julington Creek Section */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-semibold text-brand-navy mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-brand-lime mr-2" />
                Dry Cleaning Delivery in Julington Creek Plantation, FL
              </h2>
              <p className="text-gray-700 mb-6">
                Looking for an environmentally conscious dry cleaning service in Julington Creek? A Greener Cleaner 
                is the trusted choice. Our green cleaning methods are safe, powerful, and ideal for everything from 
                delicate garments to large commercial loads.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-lg text-brand-navy mb-3 flex items-center">
                    <Building className="h-5 w-5 text-brand-lime mr-2" />
                    We Deliver To:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Professional Offices & Workplaces</li>
                    <li>• Residential Homes</li>
                    <li>• Apartment Complexes & More</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-brand-navy mb-3">
                    Proudly Serving Our Customers in Julington Creek Plantation, FL Including:
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 max-h-40 overflow-y-auto">
                    {julingtonAreas.map((area, index) => (
                      <div key={index} className="text-gray-700">• {area}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Request Delivery Service */}
          <div className="text-center bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <Home className="h-12 w-12 text-brand-lime mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">Request Delivery Service</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Ready to schedule a pickup? Fill out our request form with your name, address, email, 
              phone number, and message — and we'll take care of the rest.
            </p>
            <Link 
              to="/dry-cleaning-delivery-services" 
              className="inline-block bg-brand-lime hover:bg-brand-green text-white font-medium px-8 py-3 rounded-full transition-colors"
            >
              Schedule Your Pickup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAreas; 