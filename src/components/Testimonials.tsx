import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Jacksonville Resident",
      content: "I've been using A Greener Cleaner for the past year and I'm amazed at the difference. My clothes feel genuinely clean without that chemical smell. As someone with sensitive skin, I've noticed fewer irritations since switching from traditional dry cleaning.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Roberts",
      role: "Business Professional",
      content: "My suits have never looked better! I was concerned about switching from traditional dry cleaning, but the results speak for themselves. The clothes are cleaner, the colors are brighter, and I love that there's no chemical residue left on my business attire.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Health-Conscious Parent",
      content: "As a parent, I'm always concerned about harmful chemicals around my family. A Greener Cleaner gives me peace of mind that our clothes aren't bringing toxic residues into our home. The convenient pickup and delivery service is the cherry on top!",
      rating: 5
    }
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 translate-y-8 transition-all duration-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what Jacksonville residents are saying about A Greener Cleaner.
            </p>
          </div>
          
          <div className="relative">
            {/* Testimonial Slider */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-brand-yellow fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <div className="rounded-full bg-brand-lime/10 w-12 h-12 flex items-center justify-center">
                          <span className="text-brand-green font-semibold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-brand-navy">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-2 text-brand-navy hover:text-brand-green focus:outline-none md:-translate-x-4"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-lg p-2 text-brand-navy hover:text-brand-green focus:outline-none md:translate-x-4"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-brand-green' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;