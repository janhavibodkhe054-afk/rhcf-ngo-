import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FileText, BookOpen, ShieldCheck, Download } from "lucide-react";

const ResourceCenter = () => {
  const location = useLocation();
  const [activeYear, setActiveYear] = useState("2024-25");
  const [visible, setVisible] = useState(false);

  /* ================= HASH SCROLL ================= */
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
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
      desc: "Comprehensive overview of education, healthcare, women empowerment, water conservation, and environmental programs across Rajasthan.",
      file: "/reports/annual-2024-25.pdf",
    },
    "2023-24": {
      title: "Annual Impact Report 2023-24",
      desc: "Detailed program achievements, financial transparency statements, CSR partnerships and beneficiary outreach statistics.",
      file: "/reports/annual-2023-24.pdf",
    },
    "2022-23": {
      title: "Annual Impact Report 2022-23",
      desc: "Highlights of integrated rural development initiatives, skill-building programs and health outreach campaigns.",
      file: "/reports/annual-2022-23.pdf",
    },
  };

  const publications = [
    {
      title: "Water Conservation & Rainwater Harvesting",
      desc: "Technical and community-level implementation guide used in drought-prone districts.",
      file: "/publications/water-manual.pdf",
    },
    {
      title: "Women Skill Development & Livelihood Framework",
      desc: "Structured model adopted for training women in tailoring, handicrafts, and enterprise promotion.",
      file: "/publications/women-framework.pdf",
    },
    {
      title: "Shiksha Setu Educational Bridge Model",
      desc: "Framework for re-enrolling school dropouts and strengthening literacy outcomes in rural communities.",
      file: "/publications/shiksha-setu.pdf",
    },
  ];

  const policies = [
    {
      title: "Child Protection Policy",
      desc: "Ensuring safety, dignity and rights of children across all RHCF programs.",
      file: "/policies/child-protection.pdf",
    },
    {
      title: "Financial Transparency & Accountability Policy",
      desc: "Defines governance standards, audit processes, donor reporting and fund utilization norms.",
      file: "/policies/financial-transparency.pdf",
    },
    {
      title: "Gender Equality & Safeguarding Policy",
      desc: "Promotes equal opportunity, prevention of harassment and women leadership inclusion.",
      file: "/policies/gender-policy.pdf",
    },
    {
      title: "Environmental Sustainability Policy",
      desc: "Commitment towards eco-friendly operations, tree plantation and resource conservation.",
      file: "/policies/environment-policy.pdf",
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* ================= HERO ================= */}
      <section id="reports" className="relative py-28 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://rajivgandhingo.wordpress.com/wp-content/uploads/2017/12/about-us-bal-utsav-bangalore-india.jpg"
            alt="Resource Center Background"
            className="w-full h-full object-cover"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#7cb342]">
            Resource Center
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            Transparency, knowledge sharing, and governance excellence are the
            pillars of Rajasthan Human Care Foundation.
          </p>
        </div>
      </section>

      {/* ================= ANNUAL REPORTS ================= */}
      <section id="reports" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-16">
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
              Annual Reports
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Our annual reports reflect transparency, measurable impact, and
              responsible governance practices. Each report provides a detailed
              overview of program achievements, financial accountability,
              partnerships, and long-term sustainability goals.
            </p>
          </div>

          {/* ================= YEAR FILTER ================= */}
          <div className="flex justify-center gap-4 mb-14 flex-wrap">
            {Object.keys(annualReports).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  activeYear === year
                    ? "bg-[#7cb342] text-white shadow-lg"
                    : "bg-white border border-gray-300 text-black hover:bg-[#7cb342]/20"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* ================= ACTIVE REPORT CARD ================= */}
          <div
            className={`bg-white shadow-2xl rounded-3xl p-12 transition duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Title */}
            <h3 className="text-3xl font-bold mb-6 text-black text-center">
              {annualReports[activeYear].title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
              {annualReports[activeYear].desc}
            </p>

            {/* ================= IMPACT HIGHLIGHTS ================= */}
            <div className="grid md:grid-cols-3 gap-10 mb-12 text-center">
              <div>
                <h4 className="text-4xl font-extrabold text-[#7cb342] mb-2">
                  25,000+
                </h4>
                <p className="text-black font-medium">Beneficiaries Reached</p>
              </div>

              <div>
                <h4 className="text-4xl font-extrabold text-[#7cb342] mb-2">
                  120+
                </h4>
                <p className="text-black font-medium">Villages Impacted</p>
              </div>

              <div>
                <h4 className="text-4xl font-extrabold text-[#7cb342] mb-2">
                  18
                </h4>
                <p className="text-black font-medium">
                  Ongoing Development Programs
                </p>
              </div>
            </div>

            {/* ================= GOVERNANCE TAGS ================= */}
            <div className="flex justify-center gap-4 flex-wrap mb-12">
              <span className="px-4 py-2 rounded-full bg-[#7cb342]/10 text-[#7cb342] font-semibold">
                Audited Financial Statements
              </span>
              <span className="px-4 py-2 rounded-full bg-[#7cb342]/10 text-[#7cb342] font-semibold">
                CSR Compliance
              </span>
              <span className="px-4 py-2 rounded-full bg-[#7cb342]/10 text-[#7cb342] font-semibold">
                Impact Measurement Framework
              </span>
              <span className="px-4 py-2 rounded-full bg-[#7cb342]/10 text-[#7cb342] font-semibold">
                Board Governance Report
              </span>
            </div>

            {/* ================= ACTION BUTTON ================= */}
          </div>
        </div>
      </section>

      {/* ================= PUBLICATIONS ================= */}
      <section id="publications" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-20">
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              Research & Publications
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              Our publications reflect field-tested methodologies, policy
              insights, and community-driven development models implemented
              across Rajasthan. These documents serve as knowledge resources for
              NGOs, CSR partners, government institutions, and researchers.
            </p>
          </div>

          {/* ================= PUBLICATION GRID ================= */}
          <div className="grid md:grid-cols-3 gap-12">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-gray-50 p-10 rounded-3xl shadow-md hover:shadow-2xl transition duration-500 border border-gray-100"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="px-4 py-1 text-sm font-semibold rounded-full bg-[#7cb342]/10 text-[#7cb342]">
                    Field Implementation Guide
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-black leading-snug">
                  {pub.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{pub.desc}</p>

                {/* Key Highlights */}
                <div className="mb-8 space-y-2">
                  <p className="text-sm text-black font-semibold">
                    Key Highlights:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                    <li>Community participation framework</li>
                    <li>Scalable rural development model</li>
                    <li>Monitoring & evaluation indicators</li>
                    <li>Case studies from grassroots implementation</li>
                  </ul>
                </div>

                {/* Meta Info */}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-8">
                  <span>Published: 2024</span>
                  <span>Pages: 80+</span>
                </div>

                {/* Action Button */}
                <button className="w-full py-3 rounded-full bg-[#7cb342] text-white font-semibold hover:bg-black transition duration-300">
                  Read Publication Overview
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POLICIES ================= */}
      <section id="policies" className="pb-28 pt-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-20">
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              Policies & Governance Framework
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              Our governance structure is built on transparency, accountability,
              ethical conduct, and safeguarding principles. Each policy document
              outlines compliance mechanisms, monitoring systems, and
              operational standards followed across all programs and
              partnerships.
            </p>
          </div>

          {/* ================= POLICY GRID ================= */}
          <div className="grid md:grid-cols-2 gap-12">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl transition duration-500 border border-gray-100"
              >
                {/* Category Tag */}
                <div className="mb-4">
                  <span className="px-4 py-1 text-sm font-semibold rounded-full bg-[#7cb342]/10 text-[#7cb342]">
                    Organizational Policy
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {policy.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {policy.desc}
                </p>

                {/* Key Coverage Points */}
                <div className="mb-8">
                  <h4 className="text-black font-semibold mb-3 text-sm uppercase tracking-wide">
                    Key Coverage Areas
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                    <li>Defined compliance and reporting mechanisms</li>
                    <li>Clear roles and accountability structures</li>
                    <li>Monitoring, evaluation & audit framework</li>
                    <li>Ethical standards and safeguarding measures</li>
                  </ul>
                </div>

                {/* Governance Indicators */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1 text-xs rounded-full bg-[#7cb342]/10 text-[#7cb342] font-semibold">
                    Board Approved
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-[#7cb342]/10 text-[#7cb342] font-semibold">
                    Periodic Review
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-[#7cb342]/10 text-[#7cb342] font-semibold">
                    Compliance Driven
                  </span>
                </div>

                {/* Action Button */}
                 
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourceCenter;
