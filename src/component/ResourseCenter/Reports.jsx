import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Reports = () => {
  const location = useLocation();
  const [activeYear, setActiveYear] = useState("2024-25");
  const [visible, setVisible] = useState(false);

  /* ================= AOS INIT ================= */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  /* ================= HASH SCROLL ================= */
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("reports");

      if (section) {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= DATA ================= */

  const annualReports = {
    "2024-25": {
      title: "Annual Impact Report 2024-25",

      intro:
        "The year 2024-25 marked a significant phase of expansion and deepened impact for Rajasthan Human Care Foundation. The organization reinforced its commitment towards sustainable rural development by integrating water security, sanitation, health awareness, education, and livelihood programs.",

      details:
        "During this year, RHCF focused extensively on water conservation and management systems under flagship programs such as Jal Jeevan Mission and Atal Bhujal Yojana. The approach remained community-centric, with strong emphasis on Village Water & Sanitation Committees (VWSCs) for planning, execution, and monitoring.",

      impact: [
        { number: "30,000+", label: "People Benefited" },
        { number: "200+", label: "Villages Covered" },
        { number: "20+", label: "Programs Implemented" },
      ],

      programText:
        "A multi-sectoral approach was adopted where water, sanitation, education, and livelihood programs were interconnected. Awareness campaigns were conducted to promote hygiene practices, while skill development programs empowered women and youth to become self-reliant and economically independent.",

      governanceText:
        "The Foundation maintained high standards of governance, financial accountability, and impact evaluation throughout the year.",

      governance: [
        "Jal Jeevan Mission",
        "Atal Bhujal Yojana",
        "VWSC Participation",
        "Skill Development",
        "Governance & Accountability",
      ],
    },

    "2023-24": {
      title: "Annual Impact Report 2023-24",

      intro:
        "The year 2023-24 focused on strengthening institutional capacity and expanding the reach of development programs across rural communities. The Foundation worked towards improving sanitation, livelihood opportunities, and digital inclusion, ensuring that marginalized communities gained access to essential services and resources.",

      details:
        "Key interventions included the formation of Self-Help Groups (SHGs), promotion of sanitation practices under Swachh Bharat Mission, and the introduction of digital literacy programs. These initiatives aimed to create sustainable income opportunities while empowering communities with knowledge and resources to improve their quality of life.",

      impact: [
        { number: "25,000+", label: "Beneficiaries Supported" },
        { number: "150+", label: "Villages Impacted" },
        { number: "18", label: "Programs Executed" },
      ],

      programText:
        "Special emphasis was placed on long-term sustainability by involving local stakeholders and community leaders. Training sessions, workshops, and awareness drives played a vital role in ensuring active participation. Environmental conservation efforts, including plantation drives and waste management, were integrated into community programs.",

      governanceText:
        "The organization maintained high standards of transparency and accountability through robust monitoring and evaluation systems.",

      governance: [
        "Self-Help Groups",
        "Swachh Bharat Mission",
        "Digital Literacy",
        "Environmental Conservation",
        "Monitoring & Evaluation",
      ],
    },

    "2022-23": {
      title: "Annual Impact Report 2022-23",

      intro:
        "The year 2022-23 marked a significant phase of expansion for Rajasthan Human Care Foundation as we scaled up our rural development initiatives. The organization strengthened its focus on water management, sanitation, and health awareness, laying a strong foundation for future growth and sustainable impact.",

      details:
        "During this period, RHCF successfully implemented major government programs, notably the Jal Jeevan Mission, while developing Village Action Plans and executing water conservation initiatives. Extensive awareness campaigns on health, hygiene, and nutrition were conducted across rural areas.",

      impact: [
        { number: "17,000+", label: "Beneficiaries Reached" },
        { number: "2,900+", label: "Gram Panchayats Covered" },
        { number: "10+", label: "Programs Implemented" },
      ],

      programText:
        "The organization emphasized community participation and capacity building by training local leaders and committees. Environmental initiatives such as tree plantation and water conservation were also introduced to promote sustainability and climate resilience.",

      governanceText:
        "RHCF continued to strengthen its governance systems, ensuring compliance with legal and financial regulations. Registrations under FCRA, NITI Aayog, 12A & 80G strengthened the organization’s credibility and operational transparency.",

      governance: [
        "FCRA Registered",
        "NITI Aayog Registered",
        "12A & 80G Certified",
        "Jal Jeevan Mission",
        "Village Action Plans",
      ],
    },
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative py-28 text-center text-white">
        <div className="absolute inset-0">
          <img
            src="/report.png"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 px-6" data-aos="zoom-in">
          <h1 className="text-5xl font-extrabold text-[#7cb342] mb-6">
            Resource Center
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            Transparency, accountability, and long-term impact define our work.
          </p>
        </div>
      </section>

      {/* REPORTS */}
      <section id="reports" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Annual Reports</h2>

            <p className="text-gray-600 text-lg">
              A comprehensive overview of our impact, programs, and governance.
            </p>
          </div>

          {/* YEAR BUTTONS */}
          <div
            className="flex justify-center gap-4 mb-10 flex-wrap"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {Object.keys(annualReports).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 hover:scale-105 ${
                  activeYear === year
                    ? "bg-[#7cb342] text-white"
                    : "bg-white border"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* REPORT CARD */}
          <div
            data-aos="zoom-in-up"
            className={`bg-white p-12 rounded-3xl shadow-xl transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* TITLE */}
            <h3 className="text-3xl font-bold text-center mb-8">
              {annualReports[activeYear].title}
            </h3>

            {/* INTRO */}
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {annualReports[activeYear].intro}
            </p>

            {/* DETAILS */}
            <p className="text-gray-600 mb-10 leading-relaxed">
              {annualReports[activeYear].details}
            </p>

            {/* IMPACT */}
            <div className="grid md:grid-cols-3 gap-8 text-center mb-10">
              {annualReports[activeYear].impact.map((i, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                  className="bg-[#f8fafc] p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition duration-300"
                >
                  <h4 className="text-4xl font-bold text-[#7cb342] mb-2">
                    {i.number}
                  </h4>

                  <p className="text-gray-700 font-medium">{i.label}</p>
                </div>
              ))}
            </div>

            {/* PROGRAM TEXT */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl mb-8">
              <h4 className="text-2xl font-bold text-[#2f855a] mb-4">
                Program Impact
              </h4>

              <p className="text-gray-600 leading-relaxed">
                {annualReports[activeYear].programText}
              </p>
            </div>

            {/* GOVERNANCE */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl">
              <h4 className="text-2xl font-bold text-[#2f855a] mb-4">
                Governance & Transparency
              </h4>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {annualReports[activeYear].governanceText}
              </p>

              {/* TAGS */}
              <div className="flex justify-center gap-3 flex-wrap">
                {annualReports[activeYear].governance.map((g, i) => (
                  <span
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="px-4 py-2 bg-[#7cb342]/10 text-[#7cb342] rounded-full hover:scale-105 transition"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;