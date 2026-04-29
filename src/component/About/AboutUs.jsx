import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GraduationCap,
  Briefcase,
  Users,
  Scale,
  UserCheck,
} from "lucide-react";

const certificates = [
  "/certificate.png",
  "/certificate2.png",
  "/certificate3.png",
  "/certificate4.png",
  "/certificate5.png",
  "/certificate6.png",
  "/certificate7.png",
  "/certificate8.png",
  "/certificate9.png",
];

const AboutUs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const values = [
    { text: "EDUCATION", icon: <GraduationCap size={20} /> },
    {
      text: "LIVELIHOOD\nOPPORTUNITIES",
      icon: <Briefcase size={20} />,
    },
    { text: "COMMUNITY\nMOBILIZATION", icon: <Users size={20} /> },
    { text: "AWARENESS OF\nRIGHTS", icon: <Scale size={20} /> },
    { text: "EMPOWERED\nCITIZENS", icon: <UserCheck size={20} /> },
  ];

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#7cb342] via-green-100 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] lg:min-h-[600px]">
          {/* LEFT CONTENT */}
          <div
            className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 lg:py-24 flex flex-col justify-center text-gray-900"
            data-aos="fade-right"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
              About Rajasthan Human Care Foundation
            </h2>

            <div className="w-20 h-1 bg-[#7cb342] mb-6 rounded-full"></div>

            <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
              Since 2003, RHCF has been working at the grassroots level to
              empower underserved communities across Rajasthan, Madhya Pradesh,
              Jharkhand, and Uttar Pradesh. Our work includes adopting villages,
              improving health and sanitation, organizing awareness camps, and
              promoting rainwater harvesting and environmental conservation.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
              As a Key Resource Centre recognized by Jal Shakti Mantralay, RHCF
              actively supports agriculture, horticulture, women empowerment,
              child education, skill development, and community
              mobilization—bringing practical, on-ground change where it matters
              most.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-full overflow-hidden"
            data-aos="zoom-in"
          >
            <img
              src="/aboutus1.webp"
              alt="Community Impact"
              className="w-full h-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6">
              <h1 className="text-white font-extrabold uppercase tracking-wide text-xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">
                Real Work. Real Change.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT RHCF SECTION ===== */}
      <section id="about" className="w-full overflow-hidden">
        <div
          className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-center"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto space-y-5 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Our Work
            </h2>

            <p>
              RHCF implements programs in healthcare, sanitation, women
              empowerment, livelihood development, environmental conservation
              and child education. We also conduct training sessions, awareness
              campaigns, and capacity building for local communities and
              governing bodies.
            </p>

            <p>
              The foundation has successfully reached thousands of villages,
              forming Village Water Sanitation Committees, creating Village
              Action Plans, and supporting sustainable development initiatives
              under programs like Jal Jeevan Mission, Swachh Bharat Mission, and
              Prime Minister’s Soil Health Card Scheme for Farmers.
            </p>
          </div>
        </div>

        {/* FULL WIDTH IMAGE */}
        <div
          className="relative w-full h-[250px] sm:h-[320px] md:h-[420px] lg:h-[500px] bg-center bg-cover md:bg-fixed flex items-center justify-center"
          style={{
            backgroundImage: "url('/aboutus2.jpg')",
          }}
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
            <h2 className="text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leading-snug">
              Transforming Lives Through Community Action
            </h2>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mb-6">
              By integrating health, education, and livelihood programs, RHCF
              ensures sustainable improvement in quality of life for children,
              women, and vulnerable communities.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 bg-[#7cb342] text-black font-semibold rounded-lg transition"
            >
              Join Our Mission
            </button>
          </div>
        </div>

        {/* COMMUNITY IMPACT */}
        <div
          className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-center"
          data-aos="fade-up"
        >
          <div className="max-w-5xl mx-auto space-y-5 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
            <p>
              RHCF focuses on empowerment, accountability, and equitable
              development through initiatives like skill building, self-help
              groups, child leadership programs, and awareness drives on health,
              nutrition, environment, and safety.
            </p>

            <p>
              Our approach ensures active community participation, resource
              mobilization, and measurable impact, creating a more just,
              inclusive, and sustainable society.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="w-full py-14 overflow-x-auto" data-aos="fade-up">
            <div className="flex items-center justify-center min-w-max gap-5 px-4">
              {values.slice(0, 5).map((item, i) => (
                <React.Fragment key={i}>
                  {/* Circle Card */}
                  <div
                    className="group relative shrink-0
                     w-[95px] h-[95px]
                     sm:w-[110px] sm:h-[110px]
                     md:w-[125px] md:h-[125px]
                     lg:w-[135px] lg:h-[135px]
                     transition-all duration-500 hover:scale-110 hover:-translate-y-3"
                    data-aos="zoom-in-up"
                    data-aos-delay={i * 120}
                  >
                    {/* Outer Glow Ring */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#f6deb0] via-[#d4af37] to-[#b08a3c] blur-md opacity-40 group-hover:opacity-70 transition-all duration-500" />

                    {/* Main Circle */}
                    <div
                      className="relative w-full h-full rounded-full bg-white
                       border border-[#f4e3b2]
                       shadow-2xl
                       flex flex-col items-center justify-center
                       text-center px-3"
                    >
                      {/* Step Badge */}
                      <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2
                         w-7 h-7 rounded-full bg-[#b08a3c]
                         text-white text-xs font-bold
                         flex items-center justify-center
                         shadow-lg"
                      >
                        {i + 1}
                      </div>

                      {/* Icon */}
                      <div
                        className="text-[#b08a3c] text-xl sm:text-2xl md:text-3xl mb-1
                         transition-all duration-500
                         group-hover:scale-125 group-hover:rotate-6"
                      >
                        {item.icon}
                      </div>

                      {/* Heading */}
                      <h4 className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-gray-800 leading-tight">
                        {item.text}
                      </h4>

                      {/* Sub Text */}
                      <p className="text-[8px] sm:text-[9px] text-gray-500 mt-1">
                        Trusted Quality
                      </p>
                    </div>
                  </div>

                  {/* Connector Arrow */}
                  {i !== 4 && (
                    <div className="relative flex items-center shrink-0">
                      {/* Premium line */}
                      <div className="w-10 sm:w-12 md:w-14 lg:w-16 h-[2px] bg-gradient-to-r from-[#e6c27a] to-[#b08a3c]" />

                      {/* Arrow Head */}
                      <div className="text-[#b08a3c] text-lg sm:text-xl animate-pulse ml-1">
                        ➜
                      </div>

                      {/* Connector Number */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 -bottom-5
                         text-[10px] font-semibold text-[#b08a3c]"
                      >
                        0{i + 1}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* LEFT CONTENT + IMAGE */}
          <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div
                className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-6 text-center lg:text-left"
                data-aos="fade-right"
              >
                <p>
                  RHCF’s holistic programs integrate education, healthcare,
                  skill development, and women empowerment to strengthen
                  communities and promote sustainable growth.
                </p>
                <p>
                  By engaging stakeholders, facilitating capacity building, and
                  ensuring transparency, RHCF enables equitable opportunities
                  and meaningful impact for children, women, and marginalized
                  groups.
                </p>
                <p>
                  Our initiatives ensure that every community has access to
                  knowledge, resources, and support needed to thrive, building a
                  foundation for long-term social change.
                </p>
              </div>

              <div
                className="w-full flex justify-center lg:justify-end"
                data-aos="zoom-in"
              >
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="/aboutus3.jpg"
                    alt="Rajasthan Human Care Foundation Impact"
                    className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
