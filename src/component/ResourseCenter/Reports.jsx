import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Reports = () => {
  const location = useLocation();
  const [activeYear, setActiveYear] = useState("2024-25");
  const [visible, setVisible] = useState(false);

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
        "The year 2024-25 marked a significant phase of expansion and deepened impact for Rajasthan Human Care Foundation. The organization continued to strengthen its commitment towards sustainable rural development by integrating water security, sanitation, health awareness, education, and livelihood programs. Through strong community participation and collaboration with government initiatives, the foundation ensured long-term impact and ownership at the grassroots level.",

      details:
        "During this year, the foundation focused extensively on implementing water conservation and management systems under flagship programs such as Jal Jeevan Mission and Atal Bhujal Yojana. The approach was not only infrastructure-driven but also community-centric, where Village Water & Sanitation Committees (VWSCs) played a crucial role in planning, execution, and monitoring. Simultaneously, efforts were made to empower women and youth through skill development programs, enabling them to become self-reliant and economically independent.",

      impact: [
        { number: "30,000+", label: "People Benefited" },
        { number: "200+", label: "Villages Covered" },
        { number: "20+", label: "Programs Implemented" },
      ],

      programText:
        "The organization implemented a multi-sectoral approach where water, sanitation, education, and livelihood programs were interconnected. Awareness campaigns were conducted to promote behavioral change in hygiene practices, while training sessions ensured that communities could manage resources independently. Environmental sustainability remained a core focus, with initiatives like plantation drives, water recharge systems, and climate awareness programs integrated into all major interventions.",

      governanceText:
        "The foundation maintained high standards of transparency and accountability throughout the year. Financial audits, CSR compliance frameworks, and monitoring systems ensured that all programs were executed efficiently and ethically. Regular impact assessments and community feedback mechanisms helped in refining strategies and improving program effectiveness.",

      governance: [
        "FCRA Compliance",
        "CSR Reporting",
        "Audited Financial Reports",
        "Impact Evaluation Systems",
      ],
    },

    "2023-24": {
      title: "Annual Impact Report 2023-24",

      intro:
        "The year 2023-24 focused on strengthening institutional capacity and expanding the reach of development programs across rural communities. The foundation worked towards improving sanitation, livelihood opportunities, and digital inclusion, ensuring that marginalized communities had access to essential services and resources.",

      details:
        "Key interventions during this period included the formation of Self-Help Groups (SHGs), promotion of sanitation practices under Swachh Bharat Mission, and the introduction of digital literacy programs. These initiatives aimed to create sustainable income opportunities while also empowering communities with knowledge and resources to improve their quality of life.",

      impact: [
        { number: "25,000+", label: "Beneficiaries Supported" },
        { number: "150+", label: "Villages Impacted" },
        { number: "18", label: "Programs Executed" },
      ],

      programText:
        "Programs were designed to ensure long-term sustainability by involving local stakeholders and community leaders. Training sessions, workshops, and awareness drives played a key role in ensuring active participation. Environmental conservation efforts, including plantation drives and waste management awareness, were also integrated into community programs.",

      governanceText:
        "The organization continued to strengthen its governance framework by implementing transparent reporting systems and donor accountability mechanisms. Regular monitoring and evaluation ensured that all interventions were aligned with organizational goals and community needs.",

      governance: [
        "Transparency Reports",
        "Donor Accountability",
        "Monitoring Systems",
        "Impact Measurement",
      ],
    },

    "2022-23": {
      title: "Annual Impact Report 2022-23",

      intro:
        "The year 2022-23 marked the foundation’s expansion into large-scale rural development programs, with a strong focus on water management, sanitation, and health awareness. It laid the groundwork for future growth and impact.",

      details:
        "During this phase, the foundation implemented major government programs such as Jal Jeevan Mission across multiple states, covering thousands of Gram Panchayats. Village Action Plans were developed to ensure proper planning and execution of water conservation initiatives. Awareness campaigns on health, hygiene, and nutrition were conducted extensively in rural areas.",

      impact: [
        { number: "17,000+", label: "Beneficiaries Reached" },
        { number: "2900+", label: "Gram Panchayats Covered" },
        { number: "10+", label: "Programs Implemented" },
      ],

      programText:
        "The organization emphasized community participation and capacity building by training local leaders and committees. Environmental initiatives such as tree plantation and water conservation were also introduced to promote sustainability and climate awareness.",

      governanceText:
        "The foundation established its governance systems during this year, ensuring compliance with legal and financial regulations. Registrations under FCRA, NITI Aayog, and tax certifications strengthened the organization’s credibility and operational transparency.",

      governance: [
        "FCRA Registered",
        "NITI Aayog Registered",
        "12A & 80G Certified",
        "Audited Reports",
      ],
    },
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative py-28 text-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 px-6">
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
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Annual Reports</h2>
            <p className="text-gray-600 text-lg">
              A comprehensive overview of our impact, programs, and governance.
            </p>
          </div>

          {/* YEAR BUTTON */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {Object.keys(annualReports).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 rounded-full font-semibold ${
                  activeYear === year
                    ? "bg-[#7cb342] text-white"
                    : "bg-white border"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* CARD */}
          <div
            className={`bg-white p-12 rounded-3xl shadow-xl transition ${
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-3xl font-bold text-center mb-8">
              {annualReports[activeYear].title}
            </h3>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {annualReports[activeYear].intro}
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed">
              {annualReports[activeYear].details}
            </p>

            {/* IMPACT */}
            <div className="grid md:grid-cols-3 gap-8 text-center mb-10">
              {annualReports[activeYear].impact.map((i, index) => (
                <div key={index}>
                  <h4 className="text-4xl font-bold text-[#7cb342]">
                    {i.number}
                  </h4>
                  <p>{i.label}</p>
                </div>
              ))}
            </div>

            {/* PROGRAM TEXT */}
            <p className="text-gray-600 mb-10 leading-relaxed">
              {annualReports[activeYear].programText}
            </p>

            {/* GOVERNANCE TEXT */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {annualReports[activeYear].governanceText}
            </p>

            {/* TAGS */}
            <div className="flex justify-center gap-3 flex-wrap">
              {annualReports[activeYear].governance.map((g, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#7cb342]/10 text-[#7cb342] rounded-full"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;