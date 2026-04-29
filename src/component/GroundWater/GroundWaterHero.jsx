import React from "react";
import { useNavigate } from "react-router-dom";

const GroundWaterHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/groundwater.jpg" // 👉 add in public folder
        alt="Ground Water"
        onError={(e) => {
          e.target.src =
            "https://t3.ftcdn.net/jpg/02/47/72/50/360_F_247725053_Ol9GZV2qY0UJkBkFiCWVcreB7If27wHL.jpg";
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* WATER + GREEN OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-[#2e7d32]/60 to-[#7cb342]/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-5 md:px-10">
        <div className="max-w-7xl mx-auto w-full">

          <p className="text-xs tracking-widest text-white/80 mb-3">
            WATER CONSERVATION INITIATIVE
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Protecting Our
            <br />
            <span className="text-blue-200">Groundwater</span>
            <br />
            for Future Generations
          </h1>

          <p className="mt-4 text-white/80 max-w-lg">
            Promoting sustainable water management, groundwater recharge,
            and community awareness to secure clean and reliable water sources.
          </p>

          {/* CTA BUTTONS */}
          
        </div>
      </div>

      {/* OPTIONAL WATER WAVE EFFECT */}
      

    </section>
  );
};

export default GroundWaterHero;