import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Health = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="font-sans text-gray-900 overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="bg-[#f9fafb] py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#7cb342] font-semibold mb-3">
              Our Approach
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Compassionate healthcare solutions for lasting impact
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 mb-6 max-w-lg">
              Our healthcare initiatives are rooted in empathy and
              sustainability. We focus on strengthening community health
              systems, improving accessibility, and addressing root causes of
              health challenges to ensure long-term well-being.
            </p>

            <button className="bg-[#7cb342] text-white px-5 sm:px-6 py-3 rounded-full font-semibold hover:bg-[#689f38] transition duration-300">
              Contact Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div data-aos="fade-left">
            <img
              src="https://www.smilefoundationindia.org/blog/wp-content/uploads/2023/09/339281324_969913157755658_5178394540371169896_n-1.jpg"
              alt="health"
              className="w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-xl hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* ===== FOCUS CARDS ===== */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7cb342] mb-10 sm:mb-12 text-center"
          data-aos="fade-up"
        >
          Key Healthcare Interventions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Preventive Care Programs",
              text: "We emphasize early detection through regular screenings, immunization drives, and preventive interventions that reduce long-term health risks and medical costs.",
            },
            {
              title: "Maternal & Child Wellness",
              text: "Focused programs ensure safe pregnancies, institutional deliveries, child nutrition, and growth monitoring to reduce mortality and improve overall development.",
            },
            {
              title: "Community Health Education",
              text: "Awareness sessions empower communities with knowledge about hygiene, sanitation, mental health, and disease prevention practices for sustainable health outcomes.",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className="bg-white border rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition duration-500 text-center hover:-translate-y-1"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#7cb342] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTENT SECTIONS ===== */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 space-y-16 sm:space-y-20">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          <div className="lg:w-1/2 space-y-4" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7cb342]">
              Community Health Outreach
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our mobile health outreach initiatives bring essential medical
              services directly to remote villages. These camps include general
              health check-ups, diagnostics, medicine distribution, and referral
              services for critical cases.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              By bridging the gap between healthcare providers and underserved
              populations, we ensure timely care and reduce dependency on
              distant medical facilities.
            </p>
          </div>

          <div className="lg:w-1/2" data-aos="fade-left">
            <img
              src="https://media.istockphoto.com/id/997771842/photo/sick-girl-at-a-check-up-with-her-mother.jpg?s=612x612&w=0&k=20&c=2DvqyJZhEb6di9NFW6NBZ_B0pcNvd7HUdOzlHrmc1ZU="
              className="w-full rounded-3xl shadow-xl hover:scale-105 transition duration-700"
              alt="health outreach"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-10">
          <div className="lg:w-1/2 space-y-4" data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7cb342]">
              Health Awareness & Behavior Change
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Sustainable health outcomes depend on informed communities. We
              conduct interactive sessions on sanitation, menstrual hygiene,
              nutrition, and disease prevention.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              These initiatives encourage behavior change, helping families
              adopt healthier lifestyles and reduce preventable illnesses.
            </p>
          </div>

          <div className="lg:w-1/2" data-aos="fade-right">
            <img
              src="https://www.ngoshivam.org/images/health.jpg"
              className="w-full rounded-3xl shadow-xl hover:scale-105 transition duration-700"
              alt="health awareness"
            />
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-gradient-to-r from-[#7cb342]/10 to-[#a8d56e]/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            ["120+", "Health Camps"],
            ["5000+", "People Reached"],
            ["3500+", "Awareness Drives"],
            ["1000+", "Maternal Support"],
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#7cb342]">
                {item[0]}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section
        className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 md:px-12 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7cb342] mb-4">
          Building Healthier Futures Together
        </h2>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Our commitment goes beyond healthcare delivery. We aim to create
          resilient systems where communities are empowered to take charge of
          their own health, ensuring long-term and sustainable impact.
        </p>
      </section>
    </div>
  );
};

export default Health;