import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/hero1.png",
    title: "SAFE WATER FOR EVERY HOME",
    desc: "Rajasthan Human Care Foundation is transforming rural lives through clean and sustainable water access under Jal Jeevan Mission and Atal Bhujal Yojana. We work to provide safe drinking water, strengthen village water committees, promote rainwater harvesting, and build long-term water security solutions for communities across India.",
  },
  {
    image: "/hero2.png",
    title: "EMPOWERING FARMERS & RURAL LIVELIHOODS",
    desc: "We empower farmers through sustainable agriculture, soil health testing, irrigation awareness, farmer producer groups, and advanced farming techniques. RHCF supports improved productivity, better market access, and stronger livelihoods for rural families through innovation and community-led development.",
  },
  {
    image: "/hero3.png",
    title: "SANITATION, HEALTH & COMMUNITY DEVELOPMENT",
    desc: "Our mission extends to sanitation, hygiene awareness, and healthier communities through Swachh Bharat and WASH initiatives. From village sanitation drives to capacity building programs, we work to reduce disease, improve hygiene practices, and create cleaner, safer environments for every family.",
  },
  {
    image: "/hero4.jpg",
    title: "SKILL DEVELOPMENT & SOCIAL IMPACT",
    desc: "RHCF creates opportunities for youth, women, and vulnerable communities through skill development, education support, and livelihood programs. With impactful training initiatives and community empowerment projects, we are building a future driven by dignity, self-reliance, and sustainable growth.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-[95vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image with Zoom Animation */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[current].image})`,
            }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{
              duration: 5,
              ease: "linear",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-end px-5 sm:px-8 md:px-16">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl text-center md:text-right">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
              >
                {slides[current].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white mt-3 sm:mt-4 text-sm sm:text-base md:text-xl leading-relaxed"
              >
                {slides[current].desc}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center md:justify-end gap-3 sm:gap-4 mt-5 sm:mt-6 flex-wrap"
              >
                <button
                  onClick={() => navigate("/donate")}
                  className="bg-[#7cb342] hover:bg-[#689f38] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg transition"
                >
                  Donate Now
                </button>

                <button
                  onClick={() => navigate("/aboutus")}
                  className="bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg transition"
                >
                  About Us
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}