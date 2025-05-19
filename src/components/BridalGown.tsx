import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
      {/* Hero Section: Two-column layout */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 mb-8">
        {/* Left: Headline and subheadline */}
        <div ref={heroLeftRef} className="flex-1 text-left">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold leading-tight tracking-tight mb-4 text-left"
            style={{
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              wordBreak: 'keep-all',
            }}
          >
            Wedding Gown Cleaning & Preservation
            <span className="block text-brand-lime mt-2">
              Non-Toxic, Eco‑Friendly Care for Brides in Jacksonville
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#142C50]/80 font-medium mb-10 max-w-2xl">
            Our eco-friendly wet cleaning system is safe for silk, lace, and satin — the ideal choice for Jacksonville brides who want wedding gown cleaning without harsh chemicals or toxic residue.
          </p>
        </div>
        {/* Right: Before/After Images */}
        <div ref={heroRightRef} className="flex-1 w-full md:max-w-xl flex flex-row gap-4">
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

      {/* Section 1: Bridal & Gown Care */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "💧",
              title: "Wet Cleaning for Delicate Bridal Gowns",
              content: (
                <div className="space-y-4 text-[#142C50]/80 leading-relaxed">
                  <p>Your wedding gown deserves the safest clean possible — without harsh chemicals. Our eco-friendly wet cleaning system uses purified water and biodegradable detergents.</p>
                  <p>This gentle process is safe for even the most delicate fabrics:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Silk and lace</li>
                    <li>Tulle and beadwork</li>
                    <li>Delicate embellishments</li>
                  </ul>
                  <p>Unlike traditional dry cleaning with toxic solvents like PERC, wet cleaning leaves no chemical residue or yellowing behind — just a beautifully restored gown, ready to be worn or preserved.</p>
                </div>
              )
            },
            {
              icon: "💍",
              title: "Before & After Wedding Dress Service",
              content: (
                <div className="space-y-4 text-[#142C50]/80 leading-relaxed">
                  <p>Whether you want your dress picture-perfect before the big day or expertly restored afterward, we've got you covered.</p>
                  <p>Our bridal specialists offer:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Pre-ceremony freshening for transport-wrinkled dresses</li>
                    <li>Deep post-wedding cleanups for stains and spills</li>
                    <li>Individual evaluation and treatment plans</li>
                  </ul>
                  <p>Every gown is treated with the care it deserves, ensuring it looks flawless in both memories and photos.</p>
                </div>
              )
            },
            {
              icon: "📦",
              title: "Wedding Gown Preservation Box",
              content: (
                <div className="space-y-4 text-[#142C50]/80 leading-relaxed">
                  <p>Preserving your dress means protecting more than just fabric — it's preserving a once-in-a-lifetime moment.</p>
                  <p>Our preservation process includes:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Archival-safe preservation boxes</li>
                    <li>Acid-free tissue padding</li>
                    <li>Breathable seal protection</li>
                  </ul>
                  <p>Whether you plan to pass it down or simply want to keep it perfect, our preservation method keeps your gown protected for decades to come.</p>
                </div>
              )
            }
          ].map((card, idx) => (
            <div
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              className="bg-white p-8 shadow-lg rounded-2xl text-left"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <h3 className="font-semibold text-2xl mb-4 text-[#142C50]">
                <span className="text-brand-lime">{card.icon}</span> {card.title}
              </h3>
              {card.content}
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Testimonial */}
      <section ref={testimonialRef} className="bg-[#F6F6F6] py-12 px-6 rounded-2xl max-w-3xl mx-auto">
        <blockquote className="italic text-xl text-center">
          "A Greener Cleaner handled my wedding gown with such care. No chemical smell, no yellowing — just flawless, eco-friendly dress cleaning and preservation. I felt safe every step of the way."
        </blockquote>
        <p className="text-center mt-4 font-semibold">— Emily P., St. John's County Bride</p>
      </section>

      {/* Section 3: FAQ */}
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

      {/* Section 4: CTA + Form Link */}
      <section ref={ctaRef} className="text-center space-y-6 max-w-2xl mx-auto">
        <h3 className="text-2xl font-poppins font-bold">
          Ready to Preserve Your Gown?
        </h3>
        <p className="text-lg">
          Fill out our quick form and upload photos of your dress for a personalized quote from the owner.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/bridal-intake" className="bg-[#A5D834] text-white px-6 py-3 rounded-full font-poppins shadow-md">
            Upload Dress Photos & Request Quote
          </Link>
          <Link to="/chat" className="border border-[#142C50] text-[#142C50] px-6 py-3 rounded-full font-poppins">
            Talk to Our Bridal Bot
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BridalGownComponent; 