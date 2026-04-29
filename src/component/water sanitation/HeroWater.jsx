import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroWater = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://sankeshfoundation.org/wp-content/uploads/2023/08/Sankesh-Global-Foundation-Impacting-India-Conserving-Water-1024x577.jpg"
          alt="Water"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-[#7cb342]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 md:px-10 max-w-3xl text-white">

        {/* Tag */}
        <p
          data-aos="fade-down"
          className="inline-block mb-3 px-3 py-1 text-xs md:text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20"
        >
          💧 Jal Jeevan Mission
        </p>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          Safe Water, Better Life
          <br />
          <span className="text-[#7cb342]">
            Sustainable Future for All
          </span>
        </h1>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base max-w-xl mx-auto"
        >
          Access to safe drinking water, sanitation, and hygiene for every community.
        </p>

        {/* Buttons */}
       
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>
    </section>
  );
};

export default HeroWater;