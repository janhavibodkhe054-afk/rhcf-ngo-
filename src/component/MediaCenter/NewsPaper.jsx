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

  const half = Math.ceil(images.length / 2);
  const row1 = images.slice(0, half);
  const row2 = images.slice(half);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f8f6] to-[#e6f0ec] text-[#1a2b24] overflow-hidden">

      {/* 🔥 INTERNAL CSS */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }

        /* ✨ gradient fade edges */
        .fade-left {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 120px;
          background: linear-gradient(to right, #f4f8f6, transparent);
          z-index: 10;
        }

        .fade-right {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 120px;
          background: linear-gradient(to left, #f4f8f6, transparent);
          z-index: 10;
        }
      `}</style>

      {/* HEADER */}
      <header
        className="text-center py-12 bg-white/70 backdrop-blur-md shadow-sm"
        data-aos="fade-down"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#1b4332] tracking-wide">
          NGO IMPACT STORIES
        </h1>

        <p className="text-sm mt-3 text-gray-600">
          Transforming Lives • Building Communities • Creating Hope
        </p>
      </header>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        
        <div data-aos="zoom-in-right" className="relative group">
          <img
            src="/news25.jpeg"
            alt="featured"
            className="w-full h-[350px] object-cover rounded-3xl shadow-xl border-2 border-black"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-3xl">
            <p className="text-white text-lg font-semibold">
              Featured Impact Story
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className="flex flex-col justify-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Empowering Communities Through Sustainable Initiatives
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Our NGO works across education, healthcare, women empowerment,
            water conservation, and community development — creating real
            change at the grassroots level.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="w-fit px-6 py-2 bg-[#2d6a4f] text-white rounded-full hover:bg-[#1b4332] transition shadow-md hover:shadow-xl"
          >
            Connect With Us
          </button>
        </div>
      </section>

      {/* AUTO SCROLL GALLERY */}
      <section className="max-w-7xl mx-auto px-6 pb-20 relative">

        <h2
          className="text-2xl font-semibold mb-8 border-b border-[#dce8e2] pb-2"
          data-aos="fade-up"
        >
          Our Work in Action
        </h2>

        {/* gradient edges */}
        <div className="fade-left"></div>
        <div className="fade-right"></div>

        <div className="space-y-8">

          {/* ROW 1 */}
          <div className="overflow-hidden group relative">
            <div className="flex gap-6 w-max animate-scroll-left group-hover:[animation-play-state:paused]">

              {[...row1, ...row1].map((src, i) => (
                <div
                  key={i}
                  className="relative group rounded-2xl overflow-hidden border-2 border-black shadow-lg"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-[180px] md:h-[230px] w-auto object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <p className="text-white text-sm font-semibold">
                      Impact #{i + 1}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* ROW 2 */}
          <div className="overflow-hidden group relative">
            <div className="flex gap-6 w-max animate-scroll-right group-hover:[animation-play-state:paused]">

              {[...row2, ...row2].map((src, i) => (
                <div
                  key={i}
                  className="relative group rounded-2xl overflow-hidden border-2 border-black shadow-lg"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-[180px] md:h-[230px] w-auto object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <p className="text-white text-sm font-semibold">
                      Story #{i + 1}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}