import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Women = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
      <section className="relative w-full h-[220px] sm:h-[280px] md:h-[380px] lg:h-[450px]">
        <img
          src="/women1.jpg"
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
          
          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4" data-aos="fade-right">
            <img
              src="/women2.webp"
              className="rounded-xl h-40 sm:h-48 w-full object-cover"
              alt="women support"
            />
            <img
              src="/women3.jpg"
              className="rounded-xl h-40 sm:h-48 w-full object-cover"
              alt="women learning"
            />
            <img
              src="/workslide2.jpg"
              className="rounded-xl h-44 sm:h-48 md:h-56 w-full object-cover col-span-2"
              alt="women empowerment"
            />
          </div>

          {/* CONTENT */}
          <div data-aos="fade-left">
            <p className="text-[#7cb342] font-semibold uppercase text-xs sm:text-sm mb-2">
              About Program
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              United in compassion, changing lives
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 mb-6">
              Our women empowerment initiative is designed to create long-term,
              sustainable change by addressing the root causes of gender
              inequality. We focus on strengthening women's access to education,
              improving healthcare services, and building pathways for financial
              independence. Through community-driven interventions, we ensure
              that women not only gain opportunities but also develop confidence
              and leadership skills to shape their own futures.
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
                  We provide healthcare support through medical camps, maternal
                  health awareness, menstrual hygiene education, and access to
                  essential services to ensure healthier and safer lives.
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/donate")}
              className="bg-[#7cb342] text-white px-5 sm:px-6 py-3 rounded-full font-semibold hover:bg-[#689f38] transition duration-300"
            >
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
        <div className="max-w-6xl mx-auto space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-7">
          <p>
            Women in rural and underserved communities often face significant
            challenges including limited access to education, financial
            dependency, social restrictions, and lack of awareness about their
            rights.
          </p>

          <p>
            Our programs aim to break these barriers by creating an ecosystem
            where women are empowered through education, healthcare, and
            livelihood opportunities.
          </p>

          <p>
            We collaborate with self-help groups (SHGs), local institutions, and
            community leaders to ensure inclusive participation and long-term
            sustainability.
          </p>

          <p>
            Special focus is given to adolescent girls to ensure early
            intervention through education, awareness, and life skills training.
          </p>

          <p>
            We also promote digital literacy and financial inclusion, helping
            women access banking services, government schemes, and income
            opportunities.
          </p>

          <p>
            Empowering women leads to stronger families, better education for
            children, and resilient communities.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-[#f9fafb] py-14 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Our Empowerment Approach
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Awareness & Education",
                desc: "Literacy programs and rights awareness help women understand their role and power in society.",
                bg: "bg-[#fef7f2]",
              },
              {
                title: "Skill Development",
                desc: "Vocational and digital training enable women to achieve financial independence.",
                bg: "bg-[#f2fbf7]",
              },
              {
                title: "Health & Nutrition",
                desc: "Healthcare camps and hygiene awareness improve overall well-being.",
                bg: "bg-[#f3f6ff]",
              },
              {
                title: "Leadership",
                desc: "Encouraging participation builds confidence and decision-making ability.",
                bg: "bg-[#fff4fb]",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className={`${item.bg} p-6 rounded-xl shadow hover:-translate-y-2 hover:shadow-xl transition duration-300`}
              >
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Women;