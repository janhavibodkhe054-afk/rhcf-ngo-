import React from "react";
import { useNavigate } from "react-router-dom";

const WashHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#f6fbf2] py-16 md:py-24 px-5 md:px-10 -mt-10">
      {/* Background Shape */}
      <div className="absolute right-0 top-0 w-[55%] h-full bg-[#dcedc8] rounded-bl-[120px] z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 mb-5">
            NON-PROFIT INITIATIVE
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            Safe{" "}
            <span className="text-[#7cb342] underline decoration-[#c5e1a5]">
              Water
            </span>
            <br />
            & Hygiene
            <br />
            <span className="text-[#2e7d32]">Saves Lives</span>
          </h1>

          {/* NEW CONTENT */}
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
            Access to clean water and proper sanitation is a basic human right,
            yet millions still struggle every day. Our mission is to bring
            sustainable water solutions and hygiene awareness to underserved
            communities.
          </p>

          

          {/* OPTIONAL STATS */}
          <div className="flex gap-8 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2e7d32]">10K+</h3>
              <p className="text-sm text-gray-500">Lives Impacted</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#2e7d32]">500+</h3>
              <p className="text-sm text-gray-500">Water Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#2e7d32]">100+</h3>
              <p className="text-sm text-gray-500">Villages Reached</p>
            </div>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("/donate")}
              className="px-6 py-3 rounded-full bg-[#7cb342] text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Donate Now
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 rounded-full border border-[#7cb342] text-[#2e7d32] font-semibold hover:bg-[#e8f5e9] transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-[40px] overflow-hidden shadow-xl">
            <img
              src="/wash.jpg" // ✅ Put this image in PUBLIC folder
              alt="Hygiene"
              onError={(e) => {
                e.target.src =
                  "https://i.ytimg.com/vi/4qfTaIH9oRY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCdPvJV4XhteWHVauey33lQxbW9xA";
              }}
              className="w-full h-[320px] sm:h-[380px] md:h-[450px] object-cover"
            />
          </div>

          {/* Decorative Circle */}
          <div className="absolute -left-6 top-10 w-20 h-20 border-4 border-[#a5d6a7] rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default WashHero;
