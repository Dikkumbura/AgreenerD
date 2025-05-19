import React from 'react';
import { Link } from 'react-router-dom';

const BridalGownComponent = () => {
  return (
    <div className="bg-white text-[#142C50] font-inter px-6 py-12 space-y-16">
      {/* Section 1: Bridal & Gown Care */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-poppins font-bold mb-4">
          Wedding Gown Cleaning & Preservation – Non-Toxic, Eco-Friendly Care for Brides in Jacksonville
        </h1>
        <p className="text-lg mb-10">
          Our eco-friendly wet cleaning system is safe for silk, lace, and satin — the ideal choice for Jacksonville brides who want wedding gown cleaning without harsh chemicals or toxic residue.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow-lg rounded-2xl text-left">
            <img src="/images/wet-cleaning.jpg" alt="Wedding gown wet cleaning" className="mb-4 rounded-xl w-full h-48 object-cover" />
            <h3 className="font-semibold text-xl mb-2">💧 Wet Cleaning for Delicate Bridal Gowns</h3>
            <p>
              Your wedding gown deserves the safest clean possible — without harsh chemicals. Our eco-friendly wet cleaning system uses purified water and biodegradable detergents, making it safe for even the most delicate fabrics like silk, lace, tulle, and beadwork. Unlike traditional dry cleaning with toxic solvents like PERC, wet cleaning leaves no chemical residue or yellowing behind — just a beautifully restored gown, ready to be worn or preserved.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-2xl text-left">
            <img src="/images/before-after.jpg" alt="Before and after wedding gown service" className="mb-4 rounded-xl w-full h-48 object-cover" />
            <h3 className="font-semibold text-xl mb-2">💍 Before & After Wedding Dress Service</h3>
            <p>
              Whether you want your dress picture-perfect before the big day or expertly restored afterward, we've got you covered. Our bridal specialists offer pre-ceremony freshening for transport-wrinkled dresses and deep post-wedding cleanups for stains, sweat, dirt, and spills. Every gown is evaluated individually and treated with the care it deserves, ensuring it looks flawless in both memories and photos.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-2xl text-left">
            <img src="/images/preservation-box.jpg" alt="Wedding gown preservation box" className="mb-4 rounded-xl w-full h-48 object-cover" />
            <h3 className="font-semibold text-xl mb-2">📦 Wedding Gown Preservation Box</h3>
            <p>
              Preserving your dress means protecting more than just fabric — it's preserving a once-in-a-lifetime moment. We use archival-safe preservation boxes with acid-free tissue and a breathable seal that guards against light, moisture, and long-term damage. Whether you plan to pass it down or simply want to keep it perfect, our preservation method keeps your gown protected for decades to come.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Testimonial */}
      <section className="bg-[#F6F6F6] py-12 px-6 rounded-2xl max-w-3xl mx-auto">
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
            <details key={idx} className="border border-[#142C50] rounded-xl p-4">
              <summary className="cursor-pointer font-semibold text-lg">{item.q}</summary>
              <p className="mt-2 text-[#142C50]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Section 4: CTA + Form Link */}
      <section className="text-center space-y-6 max-w-2xl mx-auto">
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