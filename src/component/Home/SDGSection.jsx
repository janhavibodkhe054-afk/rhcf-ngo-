import React from "react";
import {
  HeartPulse,
  Users,
  GraduationCap,
  TrendingUp,
  BarChart3,
  Handshake,
} from "lucide-react";

const goals = [
  { icon: HeartPulse, title: "Good Health & Well-being", number: "SDG #3" },
  { icon: Users, title: "Gender Equality", number: "SDG #5" },
  { icon: GraduationCap, title: "Quality Education", number: "SDG #4" },
  { icon: TrendingUp, title: "Decent Work & Economic Growth", number: "SDG #8" },
  { icon: BarChart3, title: "Reduced Inequalities", number: "SDG #10" },
  { icon: Handshake, title: "Partnerships for the Goals", number: "SDG #17" },
];

const SDGSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 text-white overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/sdg1.avif')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0b2545]/85"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Sustainable Goal & Development
          </h2>

          <p className="text-white/80 mt-4 text-base sm:text-lg max-w-md">
            Rajasthan Human Care Foundation aligns its grassroots initiatives
            with the United Nations Sustainable Development Goals (SDGs),
            ensuring that every action contributes to a more inclusive,
            equitable, and sustainable future for all.
          </p>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/95 backdrop-blur-md text-gray-800 
                rounded-xl px-4 py-4 flex items-center gap-3 
                shadow-md transition-all duration-300 
                hover:shadow-2xl hover:-translate-y-2 hover:bg-white"
              >
                {/* ICON FLIP */}
                <div className="w-10 h-10 flex items-center justify-center 
                rounded-full bg-[#f1f8e9] transition-transform duration-500 
                group-hover:rotate-y-180">
                  
                  <Icon className="w-5 h-5 text-[#7cb342]" />
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-xs font-semibold leading-tight group-hover:text-[#7cb342] transition">
                    {goal.title}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {goal.number}
                  </p>
                </div>

                {/* GLOW EFFECT */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 
                bg-gradient-to-r from-[#7cb342]/10 to-transparent"></div>
              </div>
            );
          })}

        </div>
      </div>

      {/* EXTRA STYLE FOR 3D FLIP */}
      <style jsx>{`
        .group-hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default SDGSection;