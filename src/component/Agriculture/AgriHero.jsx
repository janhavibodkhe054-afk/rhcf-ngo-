import React from "react";
import { useNavigate } from "react-router-dom";

const AgriHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden">

      {/* FULL WIDTH IMAGE */}
      <img
        src="/agri.jpg" // 👉 put in public folder
        alt="Agriculture"
        onError={(e) => {
          e.target.src =
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef";
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK + GREEN OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-[#7cb342]/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-5 md:px-10">
        <div className="max-w-7xl mx-auto w-full">

          <p className="text-xs tracking-widest text-white/80 mb-3">
            RURAL DEVELOPMENT PROGRAM
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Empowering Farmers,
            <br />
            Strengthening
            <br />
            <span className="text-[#c5e1a5]">
              Livelihoods
            </span>
          </h1>

          <p className="mt-4 text-white/80 max-w-lg">
            Supporting sustainable agriculture, skill development, and income
            opportunities for rural communities.
          </p>

          
          

        </div>
      </div>

    </section>
  );
};

export default AgriHero;