import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Child = () => {
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
    <section id="child" className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="bg-[#f5f1ea] py-14 sm:py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center relative">
          {/* LEFT CONTENT */}
          <div
            className="lg:-mt-16 text-center lg:text-left"
            data-aos="fade-right"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[#a08d6f]">
              Child Welfare
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1f2d1f] leading-tight">
              Childhood Should Be a Time of Wonder,
              <span className="block text-[#6f8f6b]">Not Survival</span>
            </h2>

            <p className="mt-6 text-gray-600 text-sm sm:text-base leading-7 max-w-xl mx-auto lg:mx-0">
              Across vulnerable regions of Rajasthan, thousands of children grow
              up too fast — burdened by hunger, unsafe environments, interrupted
              education, and emotional neglect. Rajasthan Human Care Foundation
              works to restore dignity, protection, and opportunity to every
              childhood.
            </p>

            {/* CTA CARD */}
            <div
              className="mt-8 flex items-center gap-4 bg-white shadow-lg rounded-xl p-4 w-fit mx-auto lg:mx-0 hover:shadow-2xl transition duration-500"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="w-12 h-12 bg-[#e4ece2] flex items-center justify-center rounded-lg">
                ▶
              </div>
              <div>
                <h4 className="font-semibold text-[#253525]">
                  Join Our Upcoming Campaign
                </h4>
                <p className="text-sm text-gray-500">
                  Make an impact, one child at a time
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE DESIGN */}
          <div
            className="relative flex justify-center items-center min-h-[400px] sm:min-h-[500px]"
            data-aos="fade-left"
          >
            {/* BIG IMAGE */}
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://weforyoune.org/wp-content/uploads/2023/05/191286_1.jpg"
                alt="Child welfare"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            {/* SMALL IMAGE TOP */}
            <div className="absolute top-0 left-4 sm:left-8 lg:left-0 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 sm:border-8 border-[#f5f1ea] shadow-xl z-20">
              <img
                src="https://www.wvi.org/sites/default/files/styles/4_3_720x540/public/2026-01/Honduras_homepage.png?itok=-jnN5jor"
                alt="Children support"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            {/* FLOATING STATS CARD */}
            <div
              className="absolute bottom-6 left-4 sm:left-10 lg:left-0 bg-white shadow-xl rounded-xl px-5 py-3 z-30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#253525]">
                120+
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Happy Child
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TIMELINE ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20">
        <h3
          className="text-2xl sm:text-3xl font-bold text-[#253525] text-center mb-12"
          data-aos="fade-up"
        >
          Our Child Welfare Journey
        </h3>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {[
            {
              title: "Identifying Vulnerability",
              text: "Village visits, school interactions, and community trust-building help identify children facing malnutrition, neglect, child labor, or dropout risks.",
            },
            {
              title: "Immediate Protection & Care",
              text: "Children receive nutrition support, health checkups, emotional care, and safe environments that protect them from harm.",
            },
            {
              title: "Education Reintegration",
              text: "Learning gaps are addressed and children are reintegrated into age-appropriate schooling.",
            },
            {
              title: "Long-Term Monitoring",
              text: "Regular follow-ups, counseling, and family engagement ensure children continue to grow in safe conditions.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl p-6 sm:p-7 shadow-md hover:shadow-2xl transition duration-500 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-[#6f8f6b] to-[#253525] text-white rounded-full font-bold shadow-md shrink-0">
                  {i + 1}
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#253525] mb-2 group-hover:text-[#6f8f6b] transition">
                    {step.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-6">
                    {step.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= PHILOSOPHY ================= */}
      <div className="relative mt-16 sm:mt-20 py-14 sm:py-16 px-4 sm:px-6 bg-[#e4ece2] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>

        <div
          className="max-w-5xl mx-auto text-center relative"
          data-aos="fade-up"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#253525] mb-6">
            What Child Welfare Means to Us
          </h3>

          <p className="text-gray-700 leading-7 mb-6 max-w-3xl mx-auto text-sm sm:text-base">
            Child welfare is not only protection from visible harm. It means
            creating an environment where children feel safe, valued, and able
            to dream freely.
          </p>

          <p className="text-gray-700 leading-7 max-w-3xl mx-auto text-sm sm:text-base">
            Our approach works across families, schools, healthcare systems,
            and local governance — strengthening communities so children can
            thrive within them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Child;