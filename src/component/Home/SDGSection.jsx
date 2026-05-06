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
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Sustainable Development Goals (SDGs)
          </h2>

          <p className="text-white/80 mt-4 text-base sm:text-lg max-w-md">
            Rajasthan Human Care Foundation aligns its initiatives with the 
            United Nations Sustainable Development Goals (SDGs), contributing 
            towards a more inclusive, equitable, and sustainable future.
          </p>
        </div>
        
        {/* RIGHT */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div
                key={index}
                className="group bg-white text-gray-800 rounded-xl p-4 
                shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* ICON */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg mb-3"
                  style={{ backgroundColor: goal.color }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* TEXT */}
                <p className="text-sm font-semibold leading-tight">
                  {goal.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {goal.number}
                </p>

                {/* BORDER ACCENT */}
                <div
                  className="h-1 w-0 group-hover:w-full transition-all duration-300 mt-3 rounded"
                  style={{ backgroundColor: goal.color }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SDGSection;