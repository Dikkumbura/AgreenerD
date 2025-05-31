import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Star } from 'lucide-react';

const BridalGownComponent = () => {
  const heroLeftRef = useRef<HTMLDivElement>(null);
  const heroRightRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    // Collect all elements to observe
    const elements = [
      heroLeftRef.current,
      heroRightRef.current,
      ...cardRefs.current,
      testimonialRef.current,
      ...faqRefs.current,
      ctaRef.current,
    ].filter(Boolean);

    // Initialize animation classes and observe
    elements.forEach((el) => {
      if (el) {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700', 'ease-out');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-[#142C50] font-inter px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto">
        <div ref={heroLeftRef} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold leading-tight tracking-tight mb-4">
            Wedding Gown Dry Cleaning Services
          </h1>
          <p className="text-xl text-brand-lime font-semibold mb-6">
            Preserve Your Precious Memories With Expert Care
          </p>
          <p className="text-lg text-[#142C50]/80 max-w-4xl mx-auto mb-8">
            When you need professional dry cleaning services, you can trust A Greener Cleaner of Jacksonville, FL. 
            We proudly serve St. Johns County, including Nocatee and Julington Creek Plantation. From couture wedding 
            gowns to suede shirts, we clean all types of clothing and specialty fabrics with care and precision.
          </p>
          <p className="text-lg text-[#142C50]/80 max-w-4xl mx-auto">
            We are the first and only wet cleaner in Jacksonville, offering a level of green garment care unmatched 
            in the region. We never use harsh solvents, harmful to both your health and the environment. One of the 
            best parts? We offer contactless pickup and delivery, with a reminder sent the evening before. When 
            confirmed, we'll arrive the next day.
          </p>
        </div>

        {/* Before/After Images */}
        <div ref={heroRightRef} className="w-full md:max-w-3xl mx-auto flex flex-row gap-4">
          <div className="flex-1 flex flex-col items-center">
            <span className="font-semibold text-lg mb-2">Before</span>
            <div className="border-2 border-[#142C50] rounded-xl overflow-hidden h-full">
              <img 
                src="/images/before.png" 
                alt="Before wedding gown cleaning" 
                className="w-full h-[400px] object-cover" 
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="font-semibold text-lg mb-2">After</span>
            <div className="border-2 border-[#142C50] rounded-xl overflow-hidden h-full">
              <img 
                src="/images/after.png" 
                alt="After wedding gown cleaning" 
                className="w-full h-[400px] object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="max-w-6xl mx-auto bg-brand-lime/10 rounded-2xl p-8 md:p-12" ref={el => cardRefs.current[0] = el as HTMLDivElement}>
        <h2 className="text-2xl font-bold text-[#142C50] mb-6">At A Greener Cleaner, We Understand</h2>
        <p className="text-lg text-[#142C50]/80 mb-4">
          Your wedding gown isn't just a garment, it's a memory. Our wedding gown dry cleaning service is designed 
          to keep your gown looking as stunning as the day you wore it. Whether for post-wedding cleaning or 
          heirloom preservation, we handle every detail with expert care.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "💍",
              title: "Specialized Treatment for Your Special Dress",
              content: (
                <div className="space-y-4 text-[#142C50]/80 leading-relaxed">
                  <p>Every gown is unique, and our process reflects that. Recognized as one of Jacksonville's most trusted wedding gown dry cleaners, our team uses advanced, eco-friendly techniques to treat delicate fabrics like silk, satin, lace, and tulle.</p>
                  <p>We clean and preserve every element, from intricate embroidery to delicate beading, with precision and respect.</p>
                </div>
              )
            },
            {
              icon: "🧼",
              title: "Comprehensive Cleaning Process",
              content: (
                <div className="space-y-4 text-[#142C50]/80 leading-relaxed">
                  <p>Our process starts with a detailed inspection to identify stains, spots, or areas requiring special attention.</p>
                  <p>Based on fabric type and embellishments, we customize the cleaning method to ensure safe, effective results — never compromising the integrity of the gown.</p>
                </div>
              )
            },
            {
              icon: "📦",
              title: "Long-Term Preservation Services",
              content: (
                <div className="space-y-4 text-[#142C50]/80 leading-relaxed">
                  <p>After cleaning, we offer preservation designed to last for generations. Your gown is packaged in acid-free materials and stored in archival-quality containers to prevent yellowing, fading, or deterioration over time.</p>
                  <p>Whether passing it down or preserving it as a keepsake, your gown will remain beautifully protected.</p>
                </div>
              )
            }
          ].map((card, idx) => (
            <div
              key={idx}
              ref={el => cardRefs.current[idx + 1] = el}
              className="bg-white p-8 shadow-lg rounded-2xl text-left"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <h3 className="font-semibold text-2xl mb-4 text-[#142C50]">
                <span className="text-brand-lime text-3xl mr-2">{card.icon}</span> {card.title}
              </h3>
              {card.content}
            </div>
          ))}
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="max-w-6xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12" ref={el => cardRefs.current[4] = el as HTMLDivElement}>
        <h2 className="text-2xl font-bold text-[#142C50] mb-6">Why Trust A Greener Cleaner?</h2>
        <p className="text-lg text-[#142C50]/80">
          Your wedding dress holds priceless memories, and it deserves expert care. At A Greener Cleaner, we offer 
          meticulous attention to detail, unmatched fabric safety, and personalized service. We treat your gown as 
          if it were our own.
        </p>
      </section>

      {/* Section 2: Testimonial */}
      <section ref={testimonialRef} className="bg-[#F6F6F6] py-12 px-6 rounded-2xl max-w-3xl mx-auto">
        <blockquote className="italic text-xl text-center">
          "A Greener Cleaner handled my wedding gown with such care. No chemical smell, no yellowing — just flawless, eco-friendly dress cleaning and preservation. I felt safe every step of the way."
        </blockquote>
        <p className="text-center mt-4 font-semibold">— Emily P., St. John's County Bride</p>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-poppins font-bold text-center mb-8">Bridal Gown FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is wet cleaning and is it safe for my wedding dress?",
              a: "Yes, it's ideal for delicate fabrics like lace, silk, and satin. We use purified water and non-toxic detergents approved by the EPA."
            },
            {
              q: "Can you remove wine, makeup, and dirt stains?",
              a: "Absolutely. We gently eliminate post-wedding stains without harming your gown's fibers."
            },
            {
              q: "Do you offer pickup and delivery?",
              a: "Yes, we offer free gown pickup and delivery across Jacksonville and nearby areas."
            },
            {
              q: "What does gown preservation include?",
              a: "Your dress is sealed in a museum-grade archival box with acid-free tissue for long-term care."
            },
            {
              q: "How soon should I clean my gown?",
              a: "Ideally within 2–3 weeks of your wedding. Prompt cleaning prevents long-term damage from organic stains."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              ref={el => faqRefs.current[idx] = el}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <details className="border border-[#142C50] rounded-xl p-4">
                <summary className="cursor-pointer font-semibold text-lg">{item.q}</summary>
                <p className="mt-2 text-[#142C50]">{item.a}</p>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="text-center space-y-6 max-w-2xl mx-auto">
        <h3 className="text-2xl font-poppins font-bold">
          Contact Us Today
        </h3>
        <p className="text-lg">
          Schedule your wedding gown dry cleaning service by calling (904) 370-1007 or (904) 34-GREEN. 
          Let us help you preserve your memories with care you can trust.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/schedule-pickup" className="bg-brand-lime hover:bg-brand-green text-white px-6 py-3 rounded-full font-poppins shadow-md inline-flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Pickup
          </Link>
          <a href="tel:9043701007" className="border border-[#142C50] text-[#142C50] px-6 py-3 rounded-full font-poppins inline-flex items-center hover:bg-gray-50">
            <Phone className="mr-2 h-5 w-5" />
            Call (904) 370-1007
          </a>
        </div>
      </section>
    </div>
  );
};

export default BridalGownComponent; 