import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const images = Array.from({ length: 31 }, (_, i) => `/news${i + 1}.jpeg`);

export default function NewsPaper() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f8f6] text-[#1a2b24]">
      {/* HEADER */}
      <header
        className="text-center py-8 sm:py-10 md:py-12 bg-white shadow-sm px-4"
        data-aos="fade-down"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#1b4332]">
          NGO IMPACT STORIES
        </h1>

        <p className="text-xs sm:text-sm mt-2 text-gray-600">
          Transforming Lives • Building Communities • Creating Hope
        </p>
      </header>

      {/* FEATURED SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div data-aos="zoom-in-right">
          <img
            src="/news25.jpeg"
            alt="featured"
            className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg border-2 border-black hover:scale-105 transition duration-500"
          />
        </div>

        <div
          className="flex flex-col justify-center space-y-4"
          data-aos="fade-left"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            Empowering Communities Through Sustainable Initiatives
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Our NGO works across education, healthcare, women empowerment,
            water conservation, and community development. These moments
            capture real stories of change and the lasting impact we are
            creating at the grassroots level.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="w-fit px-5 sm:px-6 py-2 bg-[#2d6a4f] text-white rounded-full hover:bg-[#1b4332] transition duration-300 shadow-md hover:shadow-lg"
          >
            Connect With Us
          </button>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <h2
          className="text-xl sm:text-2xl font-semibold mb-6 border-b border-[#dce8e2] pb-2"
          data-aos="fade-up"
        >
          Our Work in Action
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={(index % 6) * 100}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white border-2 border-gray-400"
            >
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt={`ngo-${index}`}
                  className="w-full object-cover border-2 border-[#dce8e2] rounded-t-2xl hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-3 border-t border-[#dce8e2]">
                <p className="text-sm font-semibold text-[#1b4332]">
                  Initiative #{index + 1}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Supporting communities through impactful programs.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}