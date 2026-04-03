import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Publication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  /* HASH SCROLL */
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

  /* SCROLL ANIMATION */
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

  /* DATA */

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
        className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/03/08/08/22/360_F_308082249_G3rPFMp482VdkOHn9kuQiYMSimR0GvcN.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src="https://i.pinimg.com/736x/f4/74/5a/f4745abd6e75e746e4fc9f910f732ead.jpg"
              alt="Knowledge & Publications"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 text-gray-800 text-center md:text-left mt-10">
            <h1 className="text-4xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gray-800">
              Knowledge & Publications
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-lg">
              A curated collection of field insights, research documents, and
              implementation frameworks developed through years of grassroots
              experience. These publications serve as practical guides for
              organizations, institutions, and policymakers working towards
              sustainable development.
            </p>
            {/* Optional button */}
            <a
              onClick={() => Navigate("/policies")}
              className="inline-block mt-6 px-6 py-3  bg-gradient-to-r from-[#7cb342] to-[#9ccc65] rounded-full font-semibold shadow-lg transition"
            >
              Explore Policies
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            From Field Experience to Knowledge Systems
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our publications are not theoretical documents — they are built from
            real experiences, challenges, and solutions observed in rural
            communities. Each publication reflects a deep understanding of
            grassroots realities and provides actionable frameworks that can be
            replicated across different regions. By documenting these models, we
            aim to contribute to a larger ecosystem of learning, collaboration,
            and scalable impact.
          </p>
        </div>
      </section>

      {/* ================= TIMELINE STYLE ================= */}
      <section id="publications" className="py-20 px-6 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          <div
            className={`space-y-16 transition duration-700 ${
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            {publications.map((pub, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-10 items-center"
              >
                {/* LEFT CONTENT */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#7cb342]">
                    {pub.title}
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {pub.intro}
                  </p>

                  <p className="text-gray-600 leading-relaxed">{pub.content}</p>
                </div>

                {/* RIGHT PANEL */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border">
                  <h4 className="font-semibold text-lg mb-4 text-black">
                    Key Insights
                  </h4>

                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
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
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Building Knowledge for Scalable Impact
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            Through these publications, we aim to bridge the gap between
            grassroots implementation and policy-level understanding. By sharing
            practical insights, tested frameworks, and community-driven models,
            we contribute to building a more inclusive and sustainable
            development ecosystem.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Publication;
