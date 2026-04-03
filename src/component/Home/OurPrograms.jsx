import React, { useEffect } from "react";
import {
  BookOpen,
  HeartPulse,
  Users,
  FileText,
  Leaf,
  HandHeart,
} from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const programs = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "Providing bridge education to school dropouts and ensuring 100% literacy in adopted villages.",
    color: "bg-[#f8cdd1]",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Mobile medical vans and localized health interventions in rural areas.",
    color: "bg-[#7cc4c4]",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    desc: "Helping women gain financial independence through skill development.",
    color: "bg-[#f2b84b]",
  },
  {
    icon: FileText,
    title: "Livelihoods",
    desc: "Supporting micro-enterprises and long-term income generation.",
    color: "bg-[#e39b63]",
  },
  {
    icon: Leaf,
    title: "Grassroots",
    desc: "Building sustainable infrastructure for community development.",
    color: "bg-[#8fd19e]",
  },
  {
    icon: HandHeart,
    title: "Disaster Response",
    desc: "Providing relief and support during crises and emergencies.",
    color: "bg-[#b79ac8]",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const OurPrograms = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

        {/* LEFT */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
              Our Impact Areas
            </h2>

            <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              Rajasthan Human Care Foundation focuses on key areas like education,
              healthcare, women empowerment, and sustainable livelihoods to bring
              long-term positive change in underserved communities.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="mt-6 sm:mt-8 relative flex justify-center lg:justify-start"
            data-aos="zoom-in"
          >
            <img
              src="/ChatGPTimg.png"
              alt="children"
              className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-full max-w-md object-contain drop-shadow-xl transition duration-500 hover:scale-105"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 w-32 sm:w-40 h-5 bg-black/20 blur-xl rounded-full"></div>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-4 sm:gap-5"
        >
          {programs.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardAnim}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 180 }}
                className={`${item.color} group rounded-2xl p-4 sm:p-5 text-white relative overflow-hidden shadow-md`}
              >
                {/* ICON */}
                <Icon className="absolute top-3 left-3 opacity-70 text-lg sm:text-xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />

                {/* TITLE */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold mt-6">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-xs sm:text-sm mt-2 leading-relaxed text-white/90">
                  {item.desc}
                </p>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10"></div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default OurPrograms;