import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Recognition = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="relative w-full py-14 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/recognition1.avif')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
          {/* IMAGE */}
          <div
            data-aos="fade-right"
            className="overflow-hidden rounded-xl shadow-2xl"
          >
            <img
              src="/recognition2.jpg"
              alt="Rural children NGO"
              className="w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[460px] object-cover rounded-xl transition duration-700 ease-in-out hover:scale-110"
            />
          </div>

          {/* CONTENT CARD */}
          <div
            data-aos="fade-left"
            className="bg-white/95 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl"
          >
            <span className="text-[#7cb342] font-semibold uppercase tracking-widest text-xs sm:text-sm">
              Recognized Social Impact Organization
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 leading-tight">
              22+ Years of Transforming Communities
            </h2>

            <h3 className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 font-semibold">
              Trusted Across 10 States in India
            </h3>

            <p className="mt-5 sm:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              Rajasthan Human Care Foundation has been creating measurable
              social impact since 2003 through water security, sanitation,
              farmer empowerment, skill development, and rural transformation
              initiatives. Recognized as a Key Resource Centre by Jal Shakti
              Mantralaya, RHCF continues to build sustainable and self-reliant
              communities across India.
            </p>
            <button
              onClick={() => navigate("/stories")}
              className="mt-6 sm:mt-8 px-6 sm:px-7 py-3 bg-[#7cb342] text-white rounded-full font-semibold shadow-md hover:bg-[#689f38] hover:scale-105 transition duration-300"
            >
              View Our Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
