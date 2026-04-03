import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  const slides = [
    { title: "Education Is Important", img: "student1.jpeg" },
    { title: "Every Child Deserves Learning", img: "workslide2.jpg" },
    { title: "Building Futures Through Knowledge", img: "workslide3.jpg" },
    { title: "Education Empowers Communities", img: "/school.jpeg" },
    { title: "From Classroom to Confidence", img: "school1.jpeg" },
  ];

  const location = useLocation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="skill"
      className="relative w-full bg-gradient-to-b from-[#f7f9f6] to-[#eef5ec] overflow-hidden py-14 sm:py-16 lg:py-20"
    >
      {/* Decorative Blurs */}
      <div className="absolute -top-32 -right-32 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-[#7cb342]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#7cb342]/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center lg:text-left"
        data-aos="fade-up"
      >
        <span className="uppercase tracking-widest text-xs sm:text-sm text-[#7cb342] font-semibold">
          Livelihoods & Self-Reliance
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2f3e2f] leading-tight">
          Skill Development <br />
          <span className="text-[#7cb342]">
            Building Dignity Through Sustainable Livelihoods
          </span>
        </h2>

        <p className="mt-6 max-w-3xl mx-auto lg:mx-0 text-base sm:text-lg text-gray-700 leading-relaxed">
          Skill development is the foundation of economic independence. At
          Rajasthan Human Care Foundation, we equip youth and women with
          practical, income-generating skills that respond to local market needs
          and long-term livelihood opportunities.
        </p>
      </div>

      {/* Image Section */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16"
        data-aos="zoom-in"
      >
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
          <img
            src="https://www.nishantratnakar.com/wp-content/gallery/NEST-Centre-by-Mamre-Trust/NGO-Non-profit-Photographer-India-Bangalore-0026.jpg"
            alt="Skill Development Training"
            className="w-full h-[240px] sm:h-[360px] md:h-[460px] lg:h-[560px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md bg-white/90 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/40">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2f3e2f] mb-3">
              From Survival to Self-Reliance
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              In rural and semi-urban Rajasthan, lack of employable skills often
              forces families into unstable, low-paid labor.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 space-y-6 sm:space-y-8 text-center"
        data-aos="fade-up"
      >
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          We design our training programs after closely studying local
          employment trends, traditional crafts, and emerging opportunities.
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Training modules are hands-on and practice-oriented, covering both
          technical and soft skills.
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Participants are encouraged to explore self-employment and cooperative
          enterprises.
        </p>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 sm:pb-20">
        <h3
          className="text-2xl md:text-3xl font-bold text-center text-[#2f3e2f] mb-10 sm:mb-14"
          data-aos="fade-up"
        >
          Our Skill Development Model
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "Community Assessment",
              desc: "Understanding local needs, skills gaps, and employment potential.",
            },
            {
              title: "Hands-On Training",
              desc: "Practical training in tailoring, handicrafts, digital skills, and trades.",
            },
            {
              title: "Mentorship & Support",
              desc: "Guidance, confidence building, and entrepreneurship exposure.",
            },
            {
              title: "Income Generation",
              desc: "Employment linkage or self-employment opportunities.",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="relative bg-white/70 backdrop-blur-lg border border-[#7cb342]/20 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-5 left-5 w-10 h-10 bg-[#7cb342] text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                {i + 1}
              </div>

              <h4 className="text-lg font-bold text-[#2f3e2f] mb-3 mt-4">
                {item.title}
              </h4>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/020/592/408/non_2x/relaxing-green-subtle-gradient-background-free-vector.jpg')",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Youth Employment",
              desc: "Young adults gain employable skills that reduce migration.",
            },
            {
              title: "Women-Led Enterprises",
              desc: "Women become income earners through small businesses.",
            },
            {
              title: "Long-Term Stability",
              desc: "Sustainable incomes improve education and health.",
            },
          ].map((card, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/40 hover:-translate-y-2"
            >
              <h4 className="text-lg sm:text-xl font-bold text-[#2f3e2f] mb-3">
                {card.title}
              </h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;