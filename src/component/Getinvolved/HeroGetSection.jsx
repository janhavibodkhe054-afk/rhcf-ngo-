import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroGetSection = () => {
const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/getinvolved.webp"
          alt="NGO"
          className="w-full h-full object-cover grayscale"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#7cb342]/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-5 md:px-10 text-center">
        {/* Small Tag */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-gray-200 backdrop-blur-md border border-white/20"
        >
          Together We Can Make a Difference
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Be the Change. <br />
          <span className="text-[#7cb342]">Join Our Mission.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        >
          Empower communities, support education, and bring hope to those who
          need it most. Your contribution—big or small—creates real impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary Button */}
          {/* Volunteer Button → scroll to form */}
          <button
            onClick={() => {
              document
                .getElementById("volunteerform")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full bg-[#7cb342] text-white font-semibold shadow-lg hover:shadow-[#7cb342]/40 hover:scale-105 transition duration-300"
          >
            Volunteer Now
          </button>

          {/* Donate Button → you can scroll or navigate */}
          <button
           onClick={() => navigate("/donate")}
            className="px-8 py-3 rounded-full border border-white/30 text-white backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition duration-300 hover:scale-105 shadow-md"
          >
            Donate Today
          </button>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade (extra premium feel) */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroGetSection;
