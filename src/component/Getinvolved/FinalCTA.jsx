import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
    const navigate = useNavigate();
  return (
    <section className="relative py-16 md:py-16 px-5 md:px-10 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7cb342] via-[#8bc34a] to-[#6aa12f]"></div>

      {/* Soft Glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent)]"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center text-white">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
        >
          Your small step can <br />
          <span className="text-white/90">change someone’s life.</span>
        </motion.h2>

        {/* Subtext */}
        <p className="mt-4 text-white/90 text-sm md:text-base max-w-2xl mx-auto">
          Join hands with us to create impact, spread hope, and build a better future together.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary */}
          <button
          onClick={() => navigate("/contact")}
          className="px-8 py-3 rounded-full bg-white text-[#7cb342] font-semibold hover:scale-105 transition duration-300 shadow-lg">
            Join Now
          </button>

          {/* Secondary */}
          <button
          onClick={() => navigate("/donate")}
          className="px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-[#7cb342] transition duration-300 shadow-lg">
            Donate
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;