import React from "react";
import { useNavigate } from "react-router-dom";

const Recognition = () => {
const navigate = useNavigate();
  
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="bg-[#cbb3a4] flex items-center">
          <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-14 sm:py-16 md:py-20">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase leading-snug md:leading-tight mb-6">
              Transforming Lives Across Rajasthan –
              <br className="hidden sm:block" />
              A Grassroots Movement
            </h2>

            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Rajasthan Human Care Foundation is dedicated to cultivating hope
              and harvesting dignity across the desert state. Through integrated
              programs in education, healthcare, women empowerment, and
              sustainable livelihoods, we turn poverty into a journey of
              self-reliance for thousands of families.
            </p>

            <button
            onClick={() => navigate("/about#journey")}
            className="inline-block bg-white text-[#cbb3a4] px-6 py-3 rounded-full font-semibold tracking-wide text-sm sm:text-base transition duration-300 hover:bg-black hover:text-white">
              View Our Journey &gt;
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-64 sm:h-80 md:h-auto">
          <img
            src="/img5.jpeg"
            alt="Rajasthan Human Care Foundation"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Recognition;