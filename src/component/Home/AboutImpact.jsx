import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaHome,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

const AboutImpact = () => {
  const navigate = useNavigate();

  const stats = [
    {
      number: "40+",
      label: "Districts",
      desc: "Driving sustainable development across diverse regions of Rajasthan.",
      icon: <FaMapMarkedAlt />,
    },
    {
      number: "50+",
      label: "Villages",
      desc: "Adopted and empowered through community-led transformation.",
      icon: <FaHome />,
    },
    {
      number: "140+",
      label: "Projects",
      desc: "Focused on water, agriculture, livelihoods, and social upliftment.",
      icon: <FaProjectDiagram />,
    },
    {
      number: "25K+",
      label: "Lives Impacted",
      desc: "Enabling dignity, opportunity, and sustainable futures.",
      icon: <FaUsers />,
    },
    {
      number: "5+",
      label: "States Covered",
      desc: "Expanding impact across multiple regions of India.",
      icon: <FaMapMarkedAlt />,
    },
  ];

  return (
    <>
      {/* ================= IMPACT SECTION ================= */}
      <section className="relative z-20 px-4 sm:px-6 md:px-10 lg:px-16 -mt-20 md:-mt-24">
        <div className="max-w-7xl mx-auto">
          <div
            className="
            grid grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-5 
            gap-5 md:gap-6"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="group text-center p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 bg-white"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center rounded-full 
                  bg-gradient-to-r from-[#a5d66f] to-[#7cb342] 
                  text-white text-lg sm:text-xl mb-3 sm:mb-4 group-hover:scale-110 transition"
                >
                  {item.icon}
                </div>

                {/* Number */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 group-hover:text-[#7cb342] transition">
                  {item.number}
                </h3>

                {/* Label */}
                <p className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-gray-600 uppercase tracking-wide group-hover:text-[#7cb342] transition">
                  {item.label}
                </p>

                {/* Description */}
                <p className="text-gray-500 mt-2 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESCRIPTION SECTION ================= */}
      <section className="relative bg-gradient-to-br from-[#f4fbe8] via-white to-[#eef7d6] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
        {/* Blur Effects */}
        <div className="absolute top-10 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#c5e1a5] rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#aed581] rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-5 sm:mb-6">
            Transforming Lives. Strengthening Communities.
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
            Rajasthan Human Care Foundation (RHCF) is a trusted not-for-profit
            organization working at the grassroots level since 2003, dedicated
            to transforming the lives of marginalized and underserved
            communities across India. With over 22 years of impactful service in
            10 states, we focus on sustainable rural and urban development
            through safe drinking water, sanitation, agriculture, environmental
            conservation, skill development, and community empowerment.
          </p>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
            Recognized as a{" "}
            <span className="text-black font-semibold bg-blue-50 px-1 rounded">
              Key Resource Centre by Jal Shakti Mantralaya
            </span>
            , RHCF has led large-scale initiatives under Jal Jeevan Mission,
            Swachh Bharat Mission, WASH, and Atal Bhujal Yojana. Our work
            includes village adoption, rainwater harvesting, groundwater
            recharge, soil testing laboratories, women empowerment, child
            education, and farmer livelihood enhancement programs that create
            measurable and long-lasting impact.
          </p>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Driven by transparency, accountability, and community participation,
            RHCF is building self-reliant communities through innovation,
            awareness, and sustainable development practices. Our mission is to
            transform challenges into opportunities and create a stronger,
            healthier, and more equitable future for all.
          </p>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <button
              onClick={() => navigate("/journey")}
              className="bg-[#7cb342] hover:bg-[#689f38] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
            >
              Discover Our Journey →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutImpact;
