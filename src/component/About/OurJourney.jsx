import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const OurJourney = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const timelineData = [
    {
      year: "2003",
      title: "Registered & Launched",
      desc: "RHCF was registered under the Rajasthan Societies Registration Act and began community work focusing on rural needs like sanitation, health, and education.",
      image: "/register.png",
    },
    {
      year: "2008",
      title: "Community Networks Built",
      desc: "Expanded into Madhya Pradesh & Uttar Pradesh, mobilizing villages, strengthening SHGs, and linking communities to livelihood and WASH programs.",
      image: "https://blog.helpyourngo.com/wp-content/uploads/2023/03/NGO-field-visit-rural-sanitation-unit-Maharashtra-helpyourngo.com_-734x445.jpg",
    },
    {
      year: "2013",
      title: "Capacity Development",
      desc: "Introduced formal capacity building in WASH, PRA methods, and community governance — empowering VWSCs and local leaders to lead change.",
      image: "/journey3.png",
    },
    {
      year: "2018",
      title: "Impact Scaling",
      desc: "Strengthened VAPs, led awareness on health & sanitation, and scaled programs to cover more districts and beneficiaries.",
      image: "/journey4.png",
    },
    {
      year: "2022 – Present",
      title: "Sustainable Transformation",
      desc: "Focusing on long-term sustainability: watershed systems, nutrition, family planning, and child protection integrated into community action.",
      image: "/journey5.png",
    },
  ];

  const stats = [
    { number: "1880+", label: "VHSC in UP & MP" },
    { number: "1022+", label: "VWSCs in M.P." },
    { number: "3248+", label: "Village Action Plans" },
    { number: "185+", label: "Water User Groups under ABHY" },
  ];

  return (
    <section className="w-full bg-gray-50 py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div
          className="text-center mb-14 md:mb-20"
          data-aos="fade-up"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2f855a] mb-4">
            Our Journey – 2003 to Present
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Over two decades of transforming communities through water,
            sanitation, health outreach, capacity building, and rural
            development initiatives.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Hide line on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-300"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-16 md:mb-24 relative ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative z-20">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl md:rounded-3xl shadow-xl w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-8">
                <span className="text-green-600 font-semibold text-sm md:text-base">
                  {item.year}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Hide marker on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-green-600 w-5 h-5 lg:w-6 lg:h-6 rounded-full z-30"></div>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16"
          data-aos="fade-up"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 md:p-7 rounded-2xl md:rounded-3xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-3xl md:text-4xl font-extrabold text-green-600">
                {stat.number}
              </h4>
              <p className="text-gray-700 mt-2 text-base md:text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CLOSING */}
        <div
          className="text-center mt-14 md:mt-20 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Continuing the Impact
          </h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            RHCF continues to support underserved families, build local
            capacity, and align its work with sustainable development goals
            for long-term change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;