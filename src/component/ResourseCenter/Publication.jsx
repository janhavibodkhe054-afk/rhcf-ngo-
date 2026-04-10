import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Publication = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
      const section = document.getElementById("publications");
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

  const publications = [
    {
      title: "Water Conservation & Community Water Governance",
      intro:
        "This publication presents a comprehensive documentation of community-driven water conservation models implemented across water-scarce regions. It reflects a shift from infrastructure-based solutions to participatory governance models.",

      content:
        "The document captures how rural communities were actively involved in planning, executing, and maintaining water resources. It explains decentralized systems like Village Water & Sanitation Committees (VWSCs), along with practical methods such as rooftop harvesting, groundwater recharge structures, and greywater reuse systems. The publication also highlights behavioral transformation, emphasizing how awareness and local ownership significantly improved water sustainability outcomes.",

      insights: [
        "Decentralized water governance framework",
        "Low-cost water recharge techniques",
        "Community-led monitoring systems",
        "Field case studies from drought regions",
      ],
    },

    {
      title: "Women-Led Livelihood & Micro-Enterprise Development",
      intro:
        "This publication focuses on creating sustainable livelihood opportunities for rural women through skill-building, entrepreneurship, and financial inclusion models.",

      content:
        "It outlines the journey of transforming women from beneficiaries to leaders of economic change. The document explains how Self-Help Groups (SHGs) were formed, trained, and connected to markets. It also covers financial literacy, access to microcredit, and branding strategies for local products. Through real-world case narratives, the publication demonstrates how women-led enterprises contributed not only to household income but also to social empowerment and decision-making within communities.",

      insights: [
        "SHG formation & scaling strategies",
        "Skill development training modules",
        "Market linkage & branding approach",
        "Impact stories of rural women entrepreneurs",
      ],
    },

    {
      title: "Bridge Education & Rural Learning Continuity Model",
      intro:
        "This publication introduces an innovative bridge education model designed to reintegrate school dropout children into the formal education system.",

      content:
        "The document explains how flexible learning environments, community teachers, and accelerated curriculum models were used to bridge learning gaps. It also highlights the role of parents, local volunteers, and school authorities in ensuring continuity of education. Special emphasis is given to monitoring systems, student assessments, and long-term tracking of educational progress. The model demonstrates measurable improvements in enrollment, retention, and learning outcomes in rural areas.",

      insights: [
        "Bridge curriculum design framework",
        "Community-driven education monitoring",
        "Teacher training methodologies",
        "Improving rural literacy outcomes",
      ],
    },
  ];

  return (
    <div>
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[70vh] w-full flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-10 lg:px-16 py-16"
        style={{
          backgroundImage: "url('/publicationbg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div
            className="flex justify-center"
            data-aos="zoom-in"
          >
            <img
              src="/publication1.jpg"
              alt="Knowledge & Publications"
              className="w-full max-w-md sm:max-w-lg rounded-2xl shadow-xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Text */}
          <div
            className="text-gray-800 text-center lg:text-left"
            data-aos="fade-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
              Knowledge & Publications
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              A curated collection of field insights, research documents, and
              implementation frameworks developed through years of grassroots
              experience. These publications serve as practical guides for
              organizations, institutions, and policymakers working towards
              sustainable development.
            </p>

            <button
              onClick={() => navigate("/policies")}
              className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-[#7cb342] to-[#9ccc65] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Explore Policies
            </button>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 bg-white">
        <div
          className="max-w-5xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            From Field Experience to Knowledge Systems
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Our publications are not theoretical documents — they are built from
            real experiences, challenges, and solutions observed in rural
            communities.
          </p>
        </div>
      </section>

      {/* ================= PUBLICATIONS ================= */}
      <section
        id="publications"
        className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`space-y-16 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {publications.map((pub, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {/* LEFT CONTENT */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#7cb342]">
                    {pub.title}
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed text-base sm:text-lg">
                    {pub.intro}
                  </p>

                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {pub.content}
                  </p>
                </div>

                {/* RIGHT PANEL */}
                <div
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300"
                  data-aos="zoom-in"
                >
                  <h4 className="font-semibold text-lg sm:text-xl mb-4 text-black">
                    Key Insights
                  </h4>

                  <ul className="space-y-2 text-gray-600 list-disc list-inside text-sm sm:text-base">
                    {pub.insights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 bg-white text-center">
        <div
          className="max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Building Knowledge for Scalable Impact
          </h3>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Through these publications, we aim to bridge the gap between
            grassroots implementation and policy-level understanding.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Publication;