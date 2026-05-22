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
      role: "President | 20 Years Experience",
      desc: "Provides strategic direction and ensures ethical oversight. Guides RHCF to be a sustainable, community-driven organization.",
      photo: "/dharmendra.jpeg",
    },
    {
      name: "Divya Kanwar",
      role: "Member",
      desc: "Actively contributes towards social welfare initiatives and organizational development.",
      photo: "https://img.magnific.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Rinku Verma",
      role: "Vice President",
      desc: "Oversees daily operations and ensures program effectiveness. Bridges strategy with on-ground execution efficiently.",
      photo: "/founder2.jpeg",
    },
    {
      name: "Naveen Sharma",
      role: "Secretary",
      desc: "Supports implementation of field programs and strengthens community engagement activities.",
      photo: "/naveen.jpeg",
    },
    {
      name: "Pramod Kumar Gupta",
      role: "Member",
      desc: "Provides strategic guidance and supports operational excellence across projects.",
      photo: "https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Harsh Bhabhra",
      role: "Treasuror",
      desc: "Ensures smooth coordination and management of field-level activities.",
      photo: "/harsh.jpeg",
    },
    {
      name: "Ghasi Laal Meena",
      role: "Member",
      desc: "Works closely with local communities to ensure successful program outreach.",
      photo: "https://static.vecteezy.com/system/resources/thumbnails/065/707/127/small/a-man-in-a-sweater-vest-and-tie-free-photo.jpeg",
    },
  ];

  const localHeroes = [
    {
      name: "Pushpendra Sharma",
      position: "Project Manager",
      photo: "https://img.magnific.com/free-photo/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background_662251-587.jpg",
    },
    {
      name: "Bharat Kumawat",
      position: "Accountant",
      photo: "https://img.magnific.com/premium-photo/smiling-indian-business-man-executive-isolated-gray-vertical-portrait_562687-3165.jpg",
    },
    {
      name: "Arti Singh",
      position: " Project Coordinator",
      photo: "https://img.magnific.com/free-photo/portrait-smiling-indian-person-posing-front-camera_482257-122324.jpg?semt=ais_hybrid&w=740&q=80",
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

                  <p className="text-gray-700 text-base sm:text-lg mt-2 leading-6">
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

                    <p className="text-gray-700 text-base sm:text-lg mt-2 leading-6">
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
