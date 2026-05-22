import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const OurTeamLeader = () => {
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
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const executiveLeaders = [
    {
      name: "Dharmendra Kumar",
      role: "President | 22 Years Experience",
      desc: "With over 22 years of visionary leadership, Dharmendra Kumar has been the driving force behind Rajasthan Human Care Foundation’s growth from a small initiative to a multi-state organization impacting millions. ",
      photo: "/dharmendra.jpeg",
    },
    {
      name: "Divya Kanwar",
      role: "Member",
      desc: "Divya Kanwar brings dynamic energy and a strong focus on social welfare initiatives. She actively contributes to program strategy, women empowerment, and community development.",
      photo: "https://img.magnific.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Rinku Verma",
      role: "Vice President",
      desc: "Rinku Verma plays a pivotal role in overseeing daily operations and program effectiveness. With her excellent managerial skills and deep commitment to social justice, she ensures smooth coordination across all verticals",
      photo: "/founder2.jpeg",
    },
    {
      name: "Naveen Sharma",
      role: "Secretary",
      desc: "Naveen Sharma is a passionate development professional with expertise in field implementation and community engagement. He excels at building strong partnerships with government departments, local bodies, and stakeholders. ",
      photo: "/naveen.jpeg",
    },
    {
      name: "Pramod Kumar Gupta",
      role: "Member",
      desc: "Pramod Kumar Gupta provides valuable strategic guidance and operational excellence across multiple projects. His rich experience in project planning and execution ensures that RHCF delivers high-quality results in rural development, WASH, and livelihood programs with efficiency and accountability.",
      photo: "/pramod.jpeg",
    },
    {
      name: "Harsh Bhabhra",
      role: "Treasuror",
      desc: "- Harsh Bhabhra brings strong financial acumen and transparency to the organization. He ensures meticulous financial management, compliance with statutory requirements, and optimal utilization of funds. His disciplined approach plays a critical role in maintaining RHCF’s credibility with donors, government agencies, and CSR partners.",
      photo: "/harsh.png",
    },
    {
      name: "Ghasi Laal Meena",
      role: "Member",
      desc: "Ghasi Lal Meena is deeply connected with rural communities. He works tirelessly to strengthen field-level coordination and ensure successful project outreach. His practical knowledge of local issues and community mobilization makes him an invaluable asset for on-ground program implementation.",
      photo: "/harsh.jpeg",
    },
  ];

  const localHeroes = [
    {
      name: "Pushpendra Sharma",
      position: "Project Manager",
      desc:"Pushpendra Kumar is a seasoned development professional with extensive experience in managing large-scale social projects. He oversees end-to-end project operations and logistics, ensuring timely and efficient delivery of resources to remote villages. He has played a key role in the successful implementation of major initiatives such as Jal Jeevan Mission (covering 9 districts & 11 lakh+ households), Swachh Bharat Mission, Atal Bhujal Yojana, and Rajasthan Agriculture Competitiveness Project.",
      photo: "https://img.magnific.com/free-photo/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background_662251-587.jpg",
    },
    {
      name: "Bharat Kumawat",
      position: "Accountant",
      desc:"Bharat Kumawat is a dedicated and detail-oriented finance professional responsible for managing all financial operations of the organization. He handles budgeting, financial reporting, auditing compliance, fund utilization tracking, and maintaining transparent accounts as per government and donor guidelines. ",
      photo: "https://img.magnific.com/premium-photo/smiling-indian-business-man-executive-isolated-gray-vertical-portrait_562687-3165.jpg",
    },
    {
      name: "Arti Singh",
      position: "Digital & Design Coordinator",
      desc:"Arti Singh is a tech-savvy and creative professional who efficiently manages office operations using modern AI tools and digital platforms. She specializes in project proposal development, documentation, designing (presentations, reports, banners, and social media creative’s), content creation, and streamlining administrative workflows. ",
      photo: "/arti.png",
    },
  ];

  return (
    <div>
      <section
        id="team"
        className="w-full bg-[#f8fafc] pb-12 sm:pb-16 md:pb-10 py-10 lg:pt-28 px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* SECTION HEADER */}
          <div
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800">
              Our Team – The Architects of Change
            </h2>

            <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8">
              Driven by dedication and expertise, the Rajasthan Human Care
              Foundation team transforms vision into measurable impact. Our
              strength lies in strong leadership, disciplined management, and
              deep grassroots presence.
            </p>
          </div>

          {/* EXECUTIVE LEADERSHIP */}
          <div className="mb-16 sm:mb-20">
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2f855a] mb-8 sm:mb-10 text-center"
              data-aos="fade-up"
            >
              Executive Leadership
            </h3>

            {/* FIRST ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-10">
              {executiveLeaders.slice(0, 4).map((leader, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-lg transition text-center"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-64 h-96 mx-auto rounded-2xl object-cover mb-4 transition duration-500 hover:scale-105"
                  />

                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {leader.name}
                  </h4>

                  <p className="text-sm sm:text-base text-[#2f855a] font-semibold mt-1">
                    {leader.role}
                  </p>

                  <p className="text-gray-700 text-base sm:text-lg mt-2 leading-6 text-justify">
                    {leader.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* SECOND ROW CENTERED */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {executiveLeaders.slice(4, 7).map((leader, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-lg transition text-center"
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                  >
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-64 h-96 mx-auto rounded-2xl object-cover mb-4 transition duration-500 hover:scale-105"
                    />

                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {leader.name}
                    </h4>

                    <p className="text-sm sm:text-base text-[#2f855a] font-semibold mt-1">
                      {leader.role}
                    </p>

                    <p className="text-gray-700 text-base sm:text-lg mt-2 leading-6 text-justify">
                      {leader.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PROGRAM MANAGEMENT */}
          <div className="mb-16 sm:mb-20">
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2f855a] mb-8 sm:mb-10 text-center"
              data-aos="fade-up"
            >
              Program Management & Operations
            </h3>

            <p className="max-w-4xl mx-auto text-center text-gray-700 text-base sm:text-lg md:text-xl leading-6 sm:leading-7 mb-10 sm:mb-12">
              Our program management team ensures donor intent is translated
              into timely and meaningful community outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  title: "Head of Operations & Logistics",
                  desc: "Ensures critical resources reach remote villages efficiently.",
                  bg: "bg-yellow-50",
                },
                {
                  title: "Lead Grassroots Mobilization",
                  desc: "Builds community trust and drives participation in programs.",
                  bg: "bg-green-50",
                },
                {
                  title: "Program Coordinator",
                  desc: "Manages implementation of education and healthcare initiatives.",
                  bg: "bg-blue-50",
                },
                {
                  title: "Impact & Compliance Officer",
                  desc: "Ensures transparency, reporting, and data-driven evaluation.",
                  bg: "bg-pink-50",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  className={`${item.bg} rounded-xl shadow-md p-5 sm:p-6 transition transform hover:-translate-y-2 hover:shadow-xl`}
                >
                  <h4 className="font-semibold text-[#2f855a] text-base sm:text-lg md:text-xl mb-3">
                    {item.title}
                  </h4>

                  <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FIELD FORCE */}
          <div className="mb-16 sm:mb-20">
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2f855a] mb-6 sm:mb-8 text-center"
              data-aos="fade-up"
            >
              The Field Force – Our Local Heroes
            </h3>

            <p className="max-w-4xl mx-auto text-center text-gray-700 text-base sm:text-lg md:text-xl leading-6 sm:leading-7 mb-10 sm:mb-12">
              70% of our field force is recruited locally, ensuring cultural
              sensitivity and deep community trust. They work in challenging
              conditions to ensure no family is left behind.
            </p>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl">
                {localHeroes.map((member, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 200}
                    className="bg-white rounded-2xl shadow-md p-4 sm:p-6 hover:shadow-lg transition text-center"
                  >
                    <div className="overflow-hidden rounded-2xl mb-4">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-56 h-72 mx-auto object-cover transition duration-500 ease-in-out hover:scale-110"
                      />
                    </div>

                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {member.name}
                    </h4>

                    <p className="text-sm sm:text-base text-[#2f855a] font-semibold mt-1">
                      {member.position}
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg mt-2 leading-6 text-justify">
                      {member.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamLeader;
