import React from "react";

const WashHighlight = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-gradient-to-br from-[#f1f8e9] via-white to-[#e8f5e9]">
      <div className="max-w-6xl mx-auto">

        <div className="relative flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl border border-green-100 bg-white">

          {/* LEFT ACCENT STRIP */}
          <div className="hidden md:block w-2 bg-gradient-to-b from-[#7cb342] to-[#558b2f]"></div>

          {/* LEFT CONTENT */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">

            {/* Tag */}
            <span className="inline-block mb-4 text-xs px-4 py-1 bg-[#7cb342]/15 text-[#558b2f] font-semibold rounded-full w-fit">
              💧 WASH Initiative
            </span>

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-5 text-gray-900">
              Transforming Lives Through
              <span className="text-[#7cb342]"> Clean Water & Hygiene</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed max-w-lg">
              Our Water, Sanitation and Hygiene (WASH) program ensures access
              to safe drinking water, improved sanitation, and better hygiene
              practices — empowering communities to live healthier and more
              dignified lives.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="px-7 py-3 bg-[#7cb342] text-white rounded-full font-semibold shadow-lg hover:shadow-[#7cb342]/40 hover:scale-105 transition duration-300">
                Learn More
              </button>

              <button className="px-7 py-3 border-2 border-[#7cb342] text-[#7cb342] rounded-full font-semibold hover:bg-[#7cb342] hover:text-white transition duration-300">
                Get Involved
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 relative group">

            <img
              src="https://responsenet.org/wp-content/uploads/2020/02/handwashing.jpg"
              alt="WASH"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Strong Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#7cb342]/30 via-transparent to-transparent"></div>

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#7cb342]/20 blur-2xl transition duration-500"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WashHighlight;