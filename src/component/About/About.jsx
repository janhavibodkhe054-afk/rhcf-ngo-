import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

const About = () => {
  const location = useLocation();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + certificates.length) % certificates.length,
    );
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section id="about" className="relative w-full overflow-hidden">
        {/* Responsive Height */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Background Image */}
          <img
            src="https://savioursfoundation.org/wp-content/uploads/2021/01/ngo-1024x768.jpg"
            alt="Children"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Center Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
            <h1
              className="text-white font-extrabold uppercase 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     leading-snug"
            >
              REAL WORK. REAL CHANGE
            </h1>
          </div>
        </div>
      </section>
      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="w-full overflow-hidden">
        {/* ===== TOP CONTENT SECTION ===== */}
        <div
          className="bg-gray-100 
                  py-12 sm:py-14 md:py-16 lg:py-20 
                  px-4 sm:px-6 md:px-12 lg:px-20 
                  text-center"
        >
          <div
            className="max-w-6xl mx-auto space-y-5 sm:space-y-6 
                    text-gray-700 leading-relaxed 
                    text-base sm:text-lg md:text-xl"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl 
                     font-bold text-gray-800 mb-4 sm:mb-6"
            >
              About Rajasthan Human Care Foundation
            </h2>

            <p>
              Rajasthan Human Care Foundation was established with a vision to
              uplift underprivileged communities across Rajasthan. The
              foundation believes that sustainable development, quality
              education, accessible healthcare, and women empowerment are the
              pillars of a progressive society.
            </p>

            <p>
              Inspired by the spirit of service and humanity, the organization
              works at the grassroots level to ensure that every child has
              access to education, every family has access to healthcare, and
              every individual gets equal opportunities to grow and succeed.
            </p>
          </div>
        </div>

        {/* ===== FULL WIDTH IMAGE SECTION ===== */}
        <div
          className="relative w-full 
               h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]
               bg-center bg-cover 
               bg-scroll md:bg-fixed"
          style={{
            backgroundImage:
              "url('https://udaipurblog.com/wp-content/uploads/2018/02/About-Us-Bal-Utsav-Bangalore-India.jpg')",
          }}
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* ===== BOTTOM CONTENT SECTION ===== */}
        <div
          className="bg-gray-100 
                  py-12 sm:py-14 md:py-16 lg:py-20 
                  px-4 sm:px-6 md:px-12 lg:px-20 
                  text-center"
        >
          <div
            className="max-w-5xl mx-auto space-y-5 sm:space-y-6 
                    text-gray-700 leading-relaxed 
                    text-base sm:text-lg md:text-xl"
          >
            <p>
              Over the years, Rajasthan Human Care Foundation has evolved into a
              trusted social institution dedicated to meaningful on-ground
              impact. From rural development initiatives to child welfare
              programs, the foundation actively works toward building a more
              inclusive society.
            </p>

            <p>
              Through community engagement, skill development initiatives,
              health awareness drives, and education programs, the foundation
              continues to transform lives and create sustainable change. Every
              initiative is guided by transparency, accountability, and
              compassion.
            </p>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-white 
                    py-12 sm:py-14 md:py-16 lg:py-20 
                    px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* ===== TOP 5 CIRCLES ===== */}
          <div
            className="flex flex-wrap justify-center 
                    gap-5 sm:gap-6 md:gap-8 
                    mb-12 sm:mb-14 md:mb-16"
          >
            {[
              { text: "EDUCATION", icon: <GraduationCap size={22} /> },
              { text: "A BETTER\nLIVELIHOOD", icon: <Briefcase size={22} /> },
              {
                text: "APPROPRIATE\nSOCIAL BEHAVIOUR",
                icon: <Users size={22} />,
              },
              {
                text: "BETTER\nUNDERSTANDING\nOF RIGHTS",
                icon: <Scale size={22} />,
              },
              {
                text: "AN EMPOWERED\nAND AWARE\nCITIZEN",
                icon: <UserCheck size={22} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative 
                     w-[85px] h-[85px]
                     sm:w-[95px] sm:h-[95px]
                     md:w-[110px] md:h-[110px]
                     lg:w-[125px] lg:h-[125px]"
              >
                {/* Outer Ring */}
                <div
                  className="absolute inset-0 rounded-full 
                          border-[3px] sm:border-[4px] 
                          border-[#e6c27a]"
                />

                {/* Inner Circle */}
                <div
                  className="absolute 
                          inset-[6px] sm:inset-[8px] md:inset-[10px]
                          rounded-full bg-[#faf7f2] 
                          flex flex-col items-center justify-center 
                          text-[9px] sm:text-[10px] md:text-[11px] 
                          font-semibold text-gray-600 
                          text-center whitespace-pre-line 
                          px-1 sm:px-2 gap-1"
                >
                  <span className="text-[#b08a3c]">
                    {React.cloneElement(item.icon, {
                      size: window.innerWidth < 640 ? 18 : 22,
                    })}
                  </span>
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          {/* ===== CONTENT + IMAGE ===== */}
          <div
            className="grid 
                    grid-cols-1 
                    lg:grid-cols-2 
                    gap-10 lg:gap-6 
                    items-center"
          >
            {/* LEFT TEXT CONTENT */}
            <div
              className="text-gray-700 
                      text-sm sm:text-base md:text-lg 
                      leading-6 sm:leading-7 md:leading-8 
                      space-y-5 sm:space-y-6 
                      text-center lg:text-left"
            >
              <p>
                At <strong>Rajasthan Human Care Foundation</strong>, our
                experience on the ground has taught us that child education
                cannot be addressed in isolation. A child’s growth is directly
                linked to the health, stability, and empowerment of the entire
                family.
              </p>

              <p>
                Health plays a crucial role in education. Children cannot attend
                school when they are unwell, and families facing hardship often
                withdraw children from education to support household income.
                Empowered and healthy mothers are central to breaking this
                cycle.
              </p>

              <p>
                While children remain at the heart of our work, our holistic
                approach supports families and communities through education,
                healthcare, livelihood opportunities, and women empowerment —
                ensuring long-term, sustainable impact.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full flex justify-center lg:justify-end">
              <img
                src="https://aapkaapnawelfaresociety.com/wp-content/uploads/2025/07/tttttttttt.png"
                alt="Rajasthan Human Care Foundation Impact"
                className="w-full 
                     max-w-[240px] sm:max-w-[300px] 
                     md:max-w-[380px] lg:max-w-[420px] 
                     object-contain"
              />
            </div>
          </div>
        </div>
      </section>{" "}
      {/* ================= VISION & MISSION ================= */}
      <section
        id="vision"
        className="w-full bg-[#f9fafb] 
             py-12 sm:py-16 md:py-20 lg:py-24 
             px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* ===== SECTION HEADER ===== */}
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl 
                     font-bold text-gray-800"
            >
              Our Vision & Mission
            </h2>

            <p
              className="text-gray-600 
                    max-w-3xl mx-auto 
                    mt-4 
                    text-sm sm:text-base md:text-lg 
                    leading-6 sm:leading-7 md:leading-8"
            >
              Guided by compassion, driven by responsibility, and rooted in
              community welfare, Rajasthan Human Care Foundation works to create
              sustainable change for individuals, families, and communities
              across Rajasthan.
            </p>
          </div>

          {/* ===== VISION SECTION ===== */}
          <div
            className="grid 
                    grid-cols-1 
                    lg:grid-cols-2 
                    gap-8 sm:gap-10 md:gap-12 
                    items-center 
                    mb-16 sm:mb-20"
          >
            {/* Vision Image */}
            <div className="order-1">
              <img
                src="/school.jpeg"
                alt="Vision for a better future"
                className="rounded-2xl shadow-lg 
                     w-full 
                     h-[240px] sm:h-[320px] md:h-[380px] lg:h-full
                     object-cover"
              />
            </div>

            {/* Vision Content */}
            <div className="order-2">
              <h3
                className="text-xl sm:text-2xl md:text-3xl 
                       font-bold text-[#2f855a] mb-4"
              >
                Our Vision
              </h3>

              <p
                className="text-gray-700 
                      text-sm sm:text-base md:text-lg 
                      leading-6 sm:leading-7 md:leading-8 
                      mb-4"
              >
                Our vision is to build a society where every individual lives
                with dignity, equality, and opportunity. We envision a future
                where children receive quality education, families have access
                to healthcare and livelihoods, women are empowered to lead, and
                communities are resilient, inclusive, and self-reliant.
              </p>

              <p
                className="text-gray-700 
                      text-sm sm:text-base md:text-lg 
                      leading-6 sm:leading-7 md:leading-8 
                      mb-4"
              >
                Rajasthan Human Care Foundation dreams of a Rajasthan where no
                child is denied education due to poverty, no family suffers due
                to lack of healthcare, and no woman is held back from realizing
                her full potential.
              </p>

              <p
                className="text-gray-700 
                      text-sm sm:text-base md:text-lg 
                      leading-6 sm:leading-7 md:leading-8"
              >
                Through compassion, integrity, and long-term commitment, we aim
                to nurture communities that are capable of shaping their own
                future with dignity and hope.
              </p>
            </div>
          </div>

          {/* ===== MISSION SECTION ===== */}
          <div
            className="grid 
                    grid-cols-1 
                    lg:grid-cols-2 
                    gap-8 sm:gap-10 md:gap-12 
                    items-center"
          >
            {/* Mission Content */}
            <div className="order-2 lg:order-1">
              <h3
                className="text-xl sm:text-2xl md:text-3xl 
                       font-bold text-[#b7791f] mb-4"
              >
                Our Mission
              </h3>

              <p
                className="text-gray-700 
                      text-sm sm:text-base md:text-lg 
                      leading-6 sm:leading-7 md:leading-8 
                      mb-4"
              >
                Our mission is to improve the quality of life of underprivileged
                communities by implementing sustainable programs in education,
                healthcare, livelihood development, women empowerment, and child
                welfare.
              </p>

              <p
                className="text-gray-700 
                      text-sm sm:text-base md:text-lg 
                      leading-6 sm:leading-7 md:leading-8 
                      mb-4"
              >
                We work at the grassroots level to identify real needs and
                deliver impactful, people-centered solutions.
              </p>

              <ul
                className="space-y-2 sm:space-y-3 
                       text-gray-700 
                       text-sm sm:text-base md:text-lg 
                       list-disc list-inside"
              >
                <li>Provide inclusive and quality education</li>
                <li>Improve access to healthcare and nutrition</li>
                <li>Promote sustainable livelihood programs</li>
                <li>Empower women socially and economically</li>
                <li>Strengthen communities through participation</li>
              </ul>

              <p
                className="text-gray-700 
                      text-sm sm:text-base md:text-lg 
                      leading-6 sm:leading-7 md:leading-8 
                      mt-4"
              >
                By collaborating with communities and partners, we are committed
                to building an inclusive and sustainable future.
              </p>
            </div>

            {/* Mission Image */}
            <div className="order-1 lg:order-2">
              <img
                src="/gallery1.jpeg"
                alt="Mission work on ground"
                className="rounded-2xl shadow-lg 
                     w-full 
                     h-[240px] sm:h-[320px] md:h-[380px] lg:h-full
                     object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ================= OUR TEAM ================= */}
      <section
        id="team"
        className="w-full bg-[#f8fafc] 
             py-12 sm:py-16 md:py-20 lg:py-24
             px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* ===== SECTION HEADER ===== */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl 
                     font-bold text-gray-800"
            >
              Our Team – The Architects of Change
            </h2>

            <p
              className="mt-4 
                    text-gray-600 
                    text-sm sm:text-base md:text-lg 
                    leading-6 sm:leading-7 md:leading-8"
            >
              Driven by passion and guided by expertise, the team at{" "}
              <strong>Rajasthan Human Care Foundation</strong>
              works tirelessly to transform intent into measurable impact. Our
              strength lies in visionary leadership, disciplined program
              management, and deeply rooted grassroots presence.
            </p>
          </div>

          {/* ===== EXECUTIVE LEADERSHIP ===== */}
          <div className="mb-16 sm:mb-20">
            <h3
              className="text-xl sm:text-2xl md:text-3xl 
                     font-bold text-[#2f855a] 
                     mb-8 sm:mb-10 text-center"
            >
              Executive Leadership
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {/* Chairman */}
              <div
                className="bg-white rounded-2xl shadow-md 
                        p-6 sm:p-8 
                        hover:shadow-lg transition"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Dharmender Singh
                </h4>
                <p className="text-xs sm:text-sm text-[#2f855a] font-semibold mb-4">
                  Chairman
                </p>
                <p className="text-xs sm:text-sm text-[#2f855a] font-semibold mb-4">
                  Working Experience : 5 years
                </p>
                <p
                  className="text-gray-700 
                        text-sm sm:text-base 
                        leading-6 sm:leading-7"
                >
                  As the visionary head of the foundation, he provides long-term
                  strategic direction and ethical oversight. Under his guidance,
                  the foundation has evolved into a sustainable,
                  community-driven development model.
                </p>
              </div>

              {/* Director */}
              <div
                className="bg-white rounded-2xl shadow-md 
                        p-6 sm:p-8 
                        hover:shadow-lg transition"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Vishnu Sakunia
                </h4>
                <p className="text-xs sm:text-sm text-[#2f855a] font-semibold mb-4">
                  Director & Chief Functionary
                </p>
                <p
                  className="text-gray-700 
                        text-sm sm:text-base 
                        leading-6 sm:leading-7"
                >
                  Oversees daily executive operations, ensuring that all
                  programs remain transparent, scalable, and impact-driven.
                  Bridges the gap between strategic vision and on-ground
                  execution.
                </p>
              </div>
            </div>
          </div>
          <section className="mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2f855a] mb-10 text-center">
              Certifications & Recognitions
            </h3>

            <CertificateCarousel />
          </section>

          {/* ===== PROGRAM MANAGEMENT ===== */}
          <div className="mb-16 sm:mb-20">
            <h3
              className="text-xl sm:text-2xl md:text-3xl 
                     font-bold text-[#b7791f] 
                     mb-8 sm:mb-10 text-center"
            >
              Program Management & Operations
            </h3>

            <p
              className="max-w-4xl mx-auto text-center 
                    text-gray-700 
                    text-sm sm:text-base md:text-lg 
                    leading-6 sm:leading-7 
                    mb-10 sm:mb-12"
            >
              Our program management team ensures donor intent is translated
              into timely and meaningful community outcomes.
            </p>

            <div
              className="grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-4 
                      gap-6 sm:gap-8"
            >
              {[
                {
                  title: "Head of Operations & Logistics",
                  desc: "Ensures critical resources reach remote villages efficiently.",
                },
                {
                  title: "Lead Grassroots Mobilization",
                  desc: "Builds community trust and drives participation in programs.",
                },
                {
                  title: "Program Coordinator",
                  desc: "Manages implementation of education and healthcare initiatives.",
                },
                {
                  title: "Impact & Compliance Officer",
                  desc: "Ensures transparency, reporting, and data-driven evaluation.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md 
                       p-5 sm:p-6 
                       hover:shadow-lg transition"
                >
                  <h4
                    className="font-semibold text-gray-800 
                           text-sm sm:text-base 
                           mb-3"
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-gray-700 
                          text-xs sm:text-sm 
                          leading-6"
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ===== FIELD FORCE ===== */}
          <div>
            <h3
              className="text-xl sm:text-2xl md:text-3xl 
                     font-bold text-[#2f855a] 
                     mb-6 sm:mb-8 text-center"
            >
              The Field Force – Our Local Heroes
            </h3>

            <p
              className="max-w-4xl mx-auto text-center 
                    text-gray-700 
                    text-sm sm:text-base md:text-lg 
                    leading-6 sm:leading-7"
            >
              70% of our field force is recruited from the districts we serve,
              ensuring cultural sensitivity and deep community trust. They work
              in extreme conditions to ensure that no family is left behind.
            </p>
          </div>
        </div>
      </section>
      {/* ================= OUR WORK ================= */}
      <section
        id="journey"
        className="w-full bg-[#f9fafb]
             py-12 sm:py-16 md:py-20 lg:py-24
             px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* ===== SECTION HEADER ===== */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16 md:mb-20">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl
                     font-bold text-gray-800"
            >
              Our Journey – From Compassion to Community Transformation
            </h2>

            <p
              className="mt-4 sm:mt-5
                    text-gray-600
                    text-sm sm:text-base md:text-lg
                    leading-6 sm:leading-7 md:leading-8"
            >
              The journey of <strong>Rajasthan Human Care Foundation</strong> is
              a story of empathy, resilience, and commitment to humanity. What
              began as a small response to local suffering has evolved into a
              structured, impact-driven organization.
            </p>
          </div>

          {/* ===== JOURNEY IMAGE + STORY ===== */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2
                    gap-8 sm:gap-10 md:gap-14
                    items-center mb-16 sm:mb-20 md:mb-24"
          >
            {/* Text */}
            <div>
              <h3
                className="text-xl sm:text-2xl md:text-3xl
                       font-semibold text-[#2f855a] mb-5 sm:mb-6"
              >
                Where It All Began
              </h3>

              <p
                className="text-gray-700
                      text-sm sm:text-base md:text-lg
                      leading-6 sm:leading-7 md:leading-8
                      mb-4"
              >
                The foundation was born from firsthand exposure to inequalities
                in rural Rajasthan — lack of education, limited healthcare,
                unemployment, and exclusion.
              </p>

              <p
                className="text-gray-700
                      text-sm sm:text-base md:text-lg
                      leading-6 sm:leading-7 md:leading-8"
              >
                Over time, these acts of service revealed that sustainable
                change required structured programs and long-term vision.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/img6.jpeg"
                alt="Grassroots NGO Work in Rajasthan"
                className="rounded-2xl shadow-lg
                     w-full
                     h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px]
                     object-cover"
              />

              <div
                className="absolute
                        bottom-4 left-4
                        sm:-bottom-6 sm:-left-6
                        bg-[#2f855a] text-white
                        px-4 py-2 sm:px-6 sm:py-4
                        rounded-xl shadow-lg
                        text-xs sm:text-sm"
              >
                Grassroots beginnings in rural Rajasthan
              </div>
            </div>
          </div>

          {/* ===== TIMELINE ===== */}
          <div className="relative">
            {/* Vertical Line (Desktop Only) */}
            <div
              className="hidden md:block absolute
                      left-1/2 top-0 h-full w-[3px]
                      bg-[#2f855a]/20
                      transform -translate-x-1/2"
            ></div>

            {[
              {
                year: "2016 – 2017",
                title: "Informal Relief & Community Trust",
                desc: "Focused on food distribution, medical help, and school enrollment support.",
                image: "/img9.jpeg",
              },
              {
                year: "2018 – 2019",
                title: "Formalization & Program Design",
                desc: "Structured governance and launched focused education and healthcare initiatives.",
                image: "/img2.jpeg",
              },
              {
                year: "2020 – 2021",
                title: "Crisis Response & Scale",
                desc: "Expanded outreach during COVID-19 with ration kits and medical aid.",
                image: "/img11.jpeg",
              },
              {
                year: "2022 – Present",
                title: "Sustainable Development Focus",
                desc: "Strengthening education systems, preventive healthcare, and skill programs.",
                image: "/img12.jpeg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative
                     grid grid-cols-1 md:grid-cols-2
                     gap-6 sm:gap-8 md:gap-10
                     items-center
                     mb-14 sm:mb-16 md:mb-20"
              >
                {/* Content */}
                <div
                  className={`md:${i % 2 === 0 ? "pr-16" : "pl-16 order-2"}`}
                >
                  <span
                    className="inline-block mb-2
                             text-xs sm:text-sm
                             font-semibold text-[#2f855a]"
                  >
                    {item.year}
                  </span>

                  <h4
                    className="text-lg sm:text-xl md:text-2xl
                           font-bold text-gray-800 mb-3"
                  >
                    {item.title}
                  </h4>

                  <p
                    className="text-gray-700
                          text-sm sm:text-base
                          leading-6 sm:leading-7"
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Image */}
                <div
                  className={`md:${i % 2 === 0 ? "pl-16" : "pr-16 order-1"}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl shadow-md
                         w-full
                         h-[180px] sm:h-[200px] md:h-[240px]
                         object-cover"
                  />
                </div>

                {/* Timeline Dot (Desktop) */}
                <div
                  className="hidden md:block absolute
                          left-1/2 top-8
                          w-5 h-5 sm:w-6 sm:h-6
                          bg-[#2f855a]
                          rounded-full
                          transform -translate-x-1/2
                          border-4 border-white shadow"
                ></div>
              </div>
            ))}
          </div>

          {/* ===== CLOSING NOTE ===== */}
          <div className="max-w-4xl mx-auto text-center mt-16 sm:mt-20 md:mt-24">
            <h3
              className="text-xl sm:text-2xl md:text-3xl
                     font-semibold text-gray-800 mb-4"
            >
              Looking Ahead
            </h3>

            <p
              className="text-gray-700
                    text-sm sm:text-base md:text-lg
                    leading-6 sm:leading-7 md:leading-8"
            >
              Our journey continues with a clear belief — communities thrive
              when empowered with knowledge, health, and opportunity. We remain
              committed to transparency and lasting impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
const CertificateCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Image Wrapper */}
      <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {certificates.map((img, index) => (
            <div key={index} className="min-w-full p-6 bg-gray-50">
              <img
                src={img}
                alt={`Certificate ${index + 1}`}
                className="w-full h-[350px] object-contain rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#2f855a] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#2f855a] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-[#2f855a]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default About;
