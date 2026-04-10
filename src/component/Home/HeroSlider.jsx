import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/hero1.png",
    title: "FEED AND EDUCATE",
    desc: "Rajasthan Human Care Foundation is dedicated to ensuring that no child sleeps hungry or remains deprived of education. Through our initiatives, we provide nutritious meals, access to quality learning, and a safe environment for growth. Our efforts aim to break the cycle of poverty by empowering children with knowledge and opportunities. Together, we nurture hope and build a foundation for a brighter and more secure future.",
  },
  {
    image: "/hero2.png",
    title: "EMPOWER EVERY CHILD",
    desc: "We believe every child deserves the chance to dream, learn, and succeed in life. Our programs focus on holistic development, including education, health, and emotional well-being. By supporting children with the right resources and guidance, we help them unlock their true potential. Our mission is to create confident individuals who can shape a better tomorrow for themselves and their communities.",
  },
  {
    image: "/hero3.png",
    title: "SUPPORT COMMUNITIES",
    desc: "Our work extends beyond individuals to uplift entire communities through sustainable development. We focus on improving access to clean water, healthcare, education, and livelihood opportunities. By working closely with local communities, we ensure long-term impact and self-reliance. Together, we build stronger, healthier, and more resilient societies for future generations.",
  },
  {
    image: "/hero4.jpg",
    title: "SPREAD HOPE",
    desc: "Hope is the driving force behind every positive change we create. Through compassion, collaboration, and dedicated efforts, we bring light into the lives of those in need. Our initiatives aim to restore dignity, inspire confidence, and create new opportunities. Together, we can build a world where every individual has the chance to live with respect, purpose, and hope.",
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