import React from "react";

const NGOInfoSection = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#7cb342] font-semibold mb-2 sm:mb-3">
          Our Philosophy
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
          Building Change Through People & Purpose
        </h2>

        {/* Content */}
        <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">

          <p className="max-w-6xl mx-auto">
            At Rajasthan Human Care Foundation, we believe that real and lasting 
            change cannot be imposed — it must be built from within. Every 
            initiative we undertake is rooted in participation, where communities 
            are not just beneficiaries, but active partners in their own development journey.
          </p>

          <p className="max-w-6xl mx-auto">
            Our approach is centered on dignity, equality, and collective growth. 
            We work to create an environment where individuals are empowered with 
            knowledge, skills, and confidence to make informed decisions and lead 
            better lives.
          </p>

          <p className="max-w-6xl mx-auto">
            We emphasize strengthening human potential by nurturing local 
            leadership, encouraging innovation, and promoting a spirit of 
            self-dependence. By doing so, we aim to create communities that are 
            resilient, capable, and prepared to overcome future challenges.
          </p>

          <p className="max-w-6xl mx-auto">
            Every step we take is guided by integrity, transparency, and a deep 
            commitment to social justice — ensuring that progress is inclusive, 
            ethical, and sustainable for generations to come.
          </p>

        </div>

        {/* Divider */}
        <div className="mt-10 sm:mt-12 w-16 sm:w-20 h-[2px] bg-[#7cb342] mx-auto rounded-full"></div>

      </div>
    </section>
  );
};

export default NGOInfoSection;