import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
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
        "Community-driven water conservation frameworks designed for drought-prone rural regions.",

      content:
        "This publication documents participatory water governance systems, decentralized resource management, rooftop harvesting techniques, groundwater recharge models, and greywater reuse practices implemented through local institutions and community participation.",

      insights: [
        "Village Water & Sanitation Committees (VWSCs)",
        "Low-cost recharge structures",
        "Water governance frameworks",
        "Behavioral transformation models",
      ],

      image: "https://etedge-insights.com/wp-content/uploads/2024/07/Water-23-july.jpg",
    },

    {
      title: "Women-Led Livelihood & Micro-Enterprise Development",
      intro:
        "Empowering women through skill development, entrepreneurship, and financial inclusion systems.",

      content:
        "The publication highlights how SHGs were transformed into sustainable economic units through training, market linkages, branding strategies, and access to micro-finance, helping women emerge as local economic leaders.",

      insights: [
        "SHG strengthening models",
        "Micro-enterprise systems",
        "Branding & market linkage",
        "Women entrepreneurship case studies",
      ],

      image: "https://www.mycemco.com/sites/default/files/services/Livelihood%20enhancement.jpg",
    },

    {
      title: "Bridge Education & Rural Learning Continuity Model",
      intro:
        "An innovative educational framework to reintegrate school dropouts into formal learning systems.",

      content:
        "The document presents accelerated learning models, community-based teaching systems, and rural education continuity strategies that improved literacy, school retention, and long-term educational outcomes.",

      insights: [
        "Bridge curriculum frameworks",
        "Community teacher engagement",
        "Monitoring & assessment systems",
        "Improving rural literacy",
      ],

      image: "https://www.smsfoundation.org/wp-content/uploads/2021/09/primary-education.jpg",
    },
  ];

  return (
    <div className="bg-[#f8faf7] overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/publicationbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/80"></div>

        {/* BLUR SHAPES */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#9ccc65]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#7cb342]/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">

            <div className="inline-flex items-center gap-2 bg-[#e9f5dc] px-4 py-2 rounded-full text-[#5f8f1f] text-sm font-medium mb-6">
              <BookOpen size={18} />
              Knowledge Resources
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1b4332]">
              Publications &
              <span className="text-[#7cb342]"> Knowledge Hub</span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
              A collection of research documents, implementation frameworks,
              field learnings, and grassroots innovations designed to support
              sustainable rural development and policy transformation.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() =>
                  document
                    .getElementById("publications")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-7 py-3 bg-[#7cb342] hover:bg-[#689f38] text-white rounded-full font-semibold transition duration-300 shadow-lg flex items-center gap-2"
              >
                Explore Publications
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/policies")}
                className="px-7 py-3 border border-[#7cb342] text-[#7cb342] rounded-full font-semibold hover:bg-[#7cb342] hover:text-white transition duration-300"
              >
                View Policies
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative flex justify-center"
            data-aos="zoom-in"
          >

            <div className="absolute inset-0 bg-[#7cb342]/10 rounded-[40px] blur-2xl scale-110"></div>

            <img
              src="/publication1.jpg"
              alt="Publications"
              className="relative z-10 w-full max-w-xl rounded-[35px] shadow-2xl border-[8px] border-white"
            />

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#edf7e4] flex items-center justify-center">
                  <FileText className="text-[#7cb342]" />
                </div>

                <div>
                  <h4 className="font-bold text-[#1b4332]">
                    25+ Publications
                  </h4>

                  <p className="text-sm text-gray-500">
                    Research & Field Learnings
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 px-6 lg:px-10 bg-white">

        <div
          className="max-w-5xl mx-auto text-center"
          data-aos="fade-up"
        >

          <div className="inline-flex items-center gap-2 bg-[#eef7e8] px-4 py-2 rounded-full text-[#6d9d35] text-sm font-medium mb-5">
            <Lightbulb size={18} />
            Field Knowledge
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1b4332] leading-tight">
            Turning Grassroots Experience
            <br />
            Into Scalable Knowledge Systems
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Every publication is developed from real-world field implementation,
            practical community learnings, and sustainable development
            frameworks tested across rural regions.
          </p>

        </div>

      </section>

      {/* ================= PUBLICATIONS ================= */}
      <section
        id="publications"
        className="py-20 px-6 lg:px-10 bg-[#f7faf5]"
      >

        <div className="max-w-7xl mx-auto">

          <div
            className={`space-y-20 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >

            {publications.map((pub, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >

                {/* IMAGE */}
                <div
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className={`relative ${
                    index % 2 !== 0 ? "lg:col-start-2" : ""
                  }`}
                >

                  <div className="absolute inset-0 bg-[#7cb342]/10 rounded-[30px] blur-2xl scale-105"></div>

                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="relative z-10 rounded-[30px] shadow-2xl w-full h-[420px] object-cover border-[6px] border-white"
                  />

                </div>

                {/* CONTENT */}
                <div
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  className={`${
                    index % 2 !== 0 ? "lg:col-start-1" : ""
                  }`}
                >

                  <div className="inline-flex items-center gap-2 bg-[#edf7e4] px-4 py-2 rounded-full text-[#6e9f34] text-sm font-medium mb-5">
                    <BookOpen size={18} />
                    Research Publication
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-[#1b4332] leading-snug">
                    {pub.title}
                  </h3>

                  <p className="mt-5 text-lg text-gray-700 leading-relaxed">
                    {pub.intro}
                  </p>

                  <p className="mt-5 text-gray-600 leading-relaxed text-base">
                    {pub.content}
                  </p>

                  {/* INSIGHTS */}
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">

                    {pub.insights.map((point, i) => (
                      <div
                        key={i}
                        className="bg-white border rounded-2xl p-4 shadow-sm hover:shadow-lg transition"
                      >

                        <div className="flex items-start gap-3">

                          <div className="w-8 h-8 rounded-full bg-[#eef7e8] flex items-center justify-center mt-1">
                            <ChevronRight
                              size={16}
                              className="text-[#7cb342]"
                            />
                          </div>

                          <p className="text-gray-700 text-sm leading-relaxed">
                            {point}
                          </p>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 lg:px-10 bg-white">

        <div
          className="max-w-5xl mx-auto bg-gradient-to-r from-[#7cb342] to-[#8bc34a] rounded-[40px] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          data-aos="zoom-in"
        >

          <div className="absolute top-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              Building Knowledge
              <br />
              For Sustainable Impact
            </h3>

            <p className="mt-6 text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
              Our publications bridge grassroots implementation with policy,
              research, and scalable development strategies — helping
              organizations create meaningful long-term change.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 px-8 py-3 bg-white text-[#689f38] rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Connect With Us
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Publication;