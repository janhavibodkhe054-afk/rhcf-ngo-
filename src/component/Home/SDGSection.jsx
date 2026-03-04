import React from "react";
import {
  HeartPulse,
  Users,
  GraduationCap,
  TrendingUp,
  BarChart3,
  Handshake,
} from "lucide-react";

const SDGSection = () => {
  const goals = [
    {
      icon: <HeartPulse className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "GOOD HEALTH & WELL-BEING",
      number: "#3",
      color: "from-purple-300 to-purple-600",
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "GENDER EQUALITY",
      number: "#5",
      color: "from-pink-300 to-pink-600",
    },
    {
      icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "QUALITY EDUCATION",
      number: "#4",
      color: "from-yellow-300 to-yellow-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "DECENT WORK & ECONOMIC GROWTH",
      number: "#8",
      color: "from-green-300 to-green-600",
    },
    {
      icon: <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "REDUCED INEQUALITIES",
      number: "#10",
      color: "from-indigo-300 to-indigo-600",
    },
    {
      icon: <Handshake className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "PARTNERSHIPS FOR THE GOALS",
      number: "#17",
      color: "from-lime-300 to-lime-600",
    },
  ];

  return (
    <section className="bg-[#f4f4f4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-center">
      <div className="max-w-7xl mx-auto">

        {/* Small Heading */}
        <p className="text-base sm:text-lg font-extrabold uppercase tracking-widest text-black mb-3">
          Towards Achieving
        </p>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase mb-12 sm:mb-16">
          Sustainable Development Goals
        </h2>

        {/* Responsive Hexagon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 sm:gap-8 justify-items-center">

          {goals.map((goal, index) => (
            <div
              key={index}
              className={`w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-gradient-to-br ${goal.color}
              text-white flex flex-col items-center justify-center
              clip-hexagon shadow-lg hover:scale-105 transition duration-300`}
            >
              <div className="mb-2 sm:mb-3">{goal.icon}</div>
              <p className="text-[10px] sm:text-xs font-semibold px-2 leading-tight">
                {goal.title}
              </p>
              <p className="mt-1 sm:mt-2 font-bold text-sm sm:text-base">
                {goal.number}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Custom Hexagon Shape */}
      <style>
        {`
          .clip-hexagon {
            clip-path: polygon(
              25% 6%,
              75% 6%,
              100% 50%,
              75% 94%,
              25% 94%,
              0% 50%
            );
          }
        `}
      </style>
    </section>
  );
};

export default SDGSection;