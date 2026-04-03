import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Women = () => {
  const location = useLocation();

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

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px]">
        <img
          src="https://manavtaawelfare.com/wp-content/uploads/2025/04/slider-1.jpg"
          className="w-full h-full object-cover hover:scale-105 transition duration-700"
          alt="women"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div
          className="absolute inset-0 flex items-center justify-center text-center px-4"
          data-aos="fade-up"
        >
          <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-snug">
            Empowering Women. Strengthening Society.
          </h1>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[#f9fafb] pb-14 sm:pb-16 pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* LEFT IMAGES */}
          <div
            className="grid grid-cols-2 gap-3 sm:gap-4"
            data-aos="fade-right"
          >
            <img
              src="https://cdn-blog.superprof.com/blog_in/wp-content/uploads/2023/01/women-empowerment-through-activities-manav-ekta-mission.jpg"
              className="rounded-xl h-40 sm:h-48 w-full object-cover"
              alt="women support"
            />

            <img
              src="https://smileindiatrust.org/wp-content/uploads/2022/06/15.jpg"
              className="rounded-xl h-40 sm:h-48 w-full object-cover"
              alt="women learning"
            />

            <img
              src="workslide2.jpg"
              className="rounded-xl h-44 sm:h-48 md:h-56 w-full object-cover col-span-2"
              alt="women empowerment"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">
            <p className="text-[#7cb342] font-semibold uppercase text-xs sm:text-sm mb-2">
              About Program
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              United in compassion, changing lives
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 mb-6">
              Our women empowerment initiative focuses on creating equal
              opportunities for women by addressing education gaps, improving
              healthcare access, and enabling financial independence.
            </p>

            {/* FEATURE */}
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#7cb342]/10 p-3 rounded-full shrink-0">
                ❤️
              </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg">
                  Healthcare Support
                </h4>

                <p className="text-gray-600 text-sm sm:text-base">
                  Providing essential healthcare services, awareness programs,
                  and medical support for women in rural and underserved areas.
                </p>
              </div>
            </div>

            <button className="bg-[#7cb342] text-white px-5 sm:px-6 py-3 rounded-full font-semibold hover:bg-[#689f38] transition duration-300">
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT */}
      <section
        className="py-14 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-white"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto space-y-5 sm:space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-7">
          <p>
            Women in underserved communities often face multiple barriers such
            as lack of access to education, early marriage, financial
            dependency, and limited awareness of their rights.
          </p>

          <p>
            Our programs are designed to break these barriers through a holistic
            approach that integrates education, health, and economic
            empowerment.
          </p>

          <p>
            By improving access to healthcare and promoting mental well-being,
            we ensure that women lead healthier and more fulfilling lives.
          </p>

          <p>
            Investing in women leads to stronger families, better-educated
            children, and resilient communities.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-[#f9fafb] py-14 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h3
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 sm:mb-10"
            data-aos="fade-up"
          >
            Our Empowerment Approach
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                title: "Awareness & Education",
                desc: "Literacy programs and awareness sessions help women understand their rights.",
                bg: "bg-[#fef7f2]",
              },
              {
                title: "Skill Development",
                desc: "Vocational training enables women to achieve financial independence.",
                bg: "bg-[#f2fbf7]",
              },
              {
                title: "Health & Nutrition",
                desc: "Healthcare camps and hygiene awareness ensure better well-being.",
                bg: "bg-[#f3f6ff]",
              },
              {
                title: "Leadership",
                desc: "Encouraging participation in leadership builds confidence.",
                bg: "bg-[#fff4fb]",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className={`${item.bg} p-5 sm:p-6 rounded-xl shadow hover:-translate-y-2 hover:shadow-xl transition duration-300`}
              >
                <h4 className="font-bold text-base sm:text-lg mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Women;