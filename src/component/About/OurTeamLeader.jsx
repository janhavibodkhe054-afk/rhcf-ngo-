import React, { useEffect, useState } from "react";
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

  return (
    <div>
      <section
        id="team"
        className="w-full bg-[#f8fafc] pb-12 sm:pb-16 md:pb-10 lg:pt-28 px-4 sm:px-6 md:px-10 lg:px-16"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {/* Chairman */}
              <div
                className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-lg transition text-center"
                data-aos="zoom-in"
              >
                <img
                  src="/dharmendra.jpeg"
                  alt="Dharmender Singh"
                  className="w-64 h-96 mx-auto rounded-2xl object-cover mb-4 transition duration-500 hover:scale-105"
                />
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Dharmender Singh
                </h4>
                <p className="text-sm sm:text-base text-[#2f855a] font-semibold mt-1">
                  Chairman | 20 Years Experience
                </p>
                <p className="text-gray-700 text-base sm:text-lg mt-2 leading-6">
                  Provides strategic direction and ensures ethical oversight.
                  Guides RHCF to be a sustainable, community-driven
                  organization.
                </p>
              </div>

              {/* Director */}
              <div
                className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-lg transition text-center"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src="/founder2.jpeg"
                  alt="Rinku Verma"
                  className="w-64 h-96 mx-auto rounded-2xl object-cover mb-4 transition duration-500 hover:scale-105"
                />
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Rinku Verma
                </h4>
                <p className="text-sm sm:text-base text-[#2f855a] font-semibold mt-1">
                  Director & Chief Functionary
                </p>
                <p className="text-gray-700 text-base sm:text-lg mt-2 leading-6">
                  Oversees daily operations and ensures program effectiveness.
                  Bridges strategy with on-ground execution efficiently.
                </p>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl">
                {[
                  {
                    name: "Harsh Bhabhra",
                    position: "Operations Supervisor",
                    photo: "/harsh.jpeg",
                  },
                  {
                    name: "Naveen Sharma",
                    position: "Program Officer",
                    photo: "/naveen.jpeg",
                  },
                ].map((member, i) => (
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


