import React from "react";
import {
  HeartPulse,
  Users,
  GraduationCap,
  TrendingUp,
  BarChart3,
  Handshake,
  Globe,
  Leaf,
} from "lucide-react";

const goals = [
  {
    icon: Users,
    title: "No Poverty",
    number: "SDG #1",
    color: "#E5243B",
  },
  {
    icon: HeartPulse,
    title: "Good Health & Well-being",
    number: "SDG #3",
    color: "#4C9F38",
  },
  {
    icon: Users,
    title: "Gender Equality",
    number: "SDG #5",
    color: "#FF3A21",
  },
  {
    icon: HeartPulse,
    title: "Clean Water & Sanitation",
    number: "SDG #6",
    color: "#26BDE2",
  },
  {
    icon: TrendingUp,
    title: "Decent Work & Growth",
    number: "SDG #8",
    color: "#A21942",
  },
  {
    icon: Leaf,
    title: "Climate Action",
    number: "SDG #13",
    color: "#3F7E44",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    number: "SDG #17",
    color: "#19486A",
  },
];
const SDGSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/sdg1.avif')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0b2545]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        {/* LEFT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Sustainable Development Goals (SDGs)
          </h2>

          <p className="text-white/80 mt-4 text-base sm:text-lg max-w-md leading-relaxed">
            Rajasthan Human Care Foundation aligns its initiatives with the
            United Nations Sustainable Development Goals (SDGs), contributing
            towards a more inclusive, equitable, and sustainable future.
          </p>

          {/* IMAGE */}
          <div className="mt-8 relative">
            {/* GLOW */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-2xl rounded-3xl"></div>

            <img
              src="/sdg-image.png"
              alt="SDG Goals"
              className="relative z-10 w-full max-w-md rounded-3xl shadow-2xl border border-white/10 object-cover"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {goals.map((goal, index) => {
            const Icon = goal.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl p-5 shadow-xl 
        transition-all duration-300 hover:-translate-y-2 
        hover:scale-[1.03] relative overflow-hidden"
                style={{
                  backgroundColor: goal.color,
                }}
              >
                {/* LIGHT EFFECT */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

                {/* ICON */}
                <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* TEXT */}
                <div className="relative z-10">
                  <p className="text-lg sm:text-lg font-semibold text-white leading-snug">
                    {goal.title}
                  </p>

                  <p className="text-xs text-white/80 mt-2 font-medium">
                    {goal.number}
                  </p>
                </div>

                {/* HOVER LINE */}
                <div className="relative z-10 h-[2px] w-0 group-hover:w-full bg-white/70 transition-all duration-300 mt-4 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SDGSection;
