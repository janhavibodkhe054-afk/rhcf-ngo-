import React from "react";

const TechnicalHero = () => {
  return (
    <section className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src="https://balrakshabharat.org/wp-content/uploads/2025/08/Untitled-design-1.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* LIGHT WHITE OVERLAY */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* CONTENT (BOTTOM ALIGN) */}
      <div className="relative z-10 h-full flex items-end px-6 md:px-20 pb-6 md:pb-10">
        <div className="max-w-xl">
          {/* GREEN LABEL BAR */}
          <div className="bg-green-600 inline-block px-5 py-2 mb-3">
            <h1 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide">
              Technical Strength & Certifications
            </h1>
          </div>

          {/* SUBTEXT */}
          <div className="bg-gray-100 inline-block px-5 py-2 mb-3">
            <p className="text-black text-lg md:text-lg text-bold leading-snug">
              Dedicated to ensuring transparency, compliance and strong
              institutional capacity for sustainable development across
              communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalHero;
