import React from "react";
import { useNavigate } from "react-router-dom";

const Recognition = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full py-20 md:py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/recognition1.avif')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div>
            <img
              src="/recognition2.jpg"
              alt="Rural children NGO"
              className="w-full h-[320px] sm:h-[400px] md:h-[440px] object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* CONTENT CARD */}
          <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl">

            <span className="text-[#7cb342] font-semibold uppercase tracking-widest text-sm">
              Rajasthan Human Care Foundation
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Transforming Lives Across Rajasthan
            </h2>

            <h3 className="text-lg md:text-xl text-gray-600 mt-3 font-semibold">
              A Grassroots Movement
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
              Rajasthan Human Care Foundation is committed to uplifting
              underserved communities through education, healthcare,
              women empowerment, and sustainable livelihood programs.
              Our mission is to create lasting change that empowers
              individuals to build a better future.
            </p>

            <button
              onClick={() => navigate("/about#journey")}
              className="mt-8 px-7 py-3 bg-[#7cb342] text-white rounded-full font-semibold shadow-md hover:bg-[#689f38] transition"
            >
              View Our Journey →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Recognition;