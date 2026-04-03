import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Community = () => {
  const slides = [
    {
      title: "Education Is Important",
      img: "student1.jpeg",
    },
    {
      title: "Every Child Deserves Learning",
      img: "workslide2.jpg",
    },
    {
      title: "Building Futures Through Knowledge",
      img: "workslide3.jpg",
    },
    {
      title: "Education Empowers Communities",
      img: "/school.jpeg",
    },
    {
      title: "From Classroom to Confidence",
      img: "school1.jpeg",
    },
  ];

  const location = useLocation();
  const [current, setCurrent] = useState(0);

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Hash scroll support
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  // Slider autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <section
        id="community"
        className="relative w-full bg-[#f6f8f5] overflow-hidden"
      >
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(130,160,130,0.12),transparent_55%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(180,200,180,0.14),transparent_55%)]"></div>

        {/* HERO IMAGE */}
        <div
          className="relative w-full h-[300px] sm:h-[380px] md:h-[480px] overflow-hidden"
          data-aos="zoom-in"
        >
          <img
            src="https://themotherfoundation.in/uploads/slider/main_slider/banner3.jpg"
            alt="Community Development"
            className="w-full h-full object-cover transition-transform duration-[6000ms] ease-linear hover:scale-110 scale-105"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
            <p className="text-white text-xl sm:text-2xl md:text-4xl font-bold text-center max-w-4xl leading-snug">
              Development becomes sustainable
              <br />
              when the community becomes the owner
            </p>
          </div>
        </div>

        {/* SYSTEM BLOCKS */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 bg-white">
          <h3
            className="text-2xl sm:text-3xl font-bold text-[#243424] mb-12 sm:mb-16 text-center"
            data-aos="fade-up"
          >
            How We Build Community Systems
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                title: "Local Leadership",
                text: "We identify and nurture local leaders, youth volunteers, and women champions who guide collective decision-making and represent community interests.",
                color: "bg-[#fef7f2]",
                hover: "hover:bg-[#e4f3e7]",
              },
              {
                title: "Sanitation & Environment",
                text: "Programs promote hygiene, waste management, clean water access, and environmental responsibility to create healthier living conditions.",
                color: "bg-[#f2fbf7]",
                hover: "hover:bg-[#e7ecff]",
              },
              {
                title: "Participatory Governance",
                text: "Communities are trained to engage with local governance systems, access public schemes, and hold institutions accountable.",
                color: "bg-[#f3f6ff]",
                hover: "hover:bg-[#ffece3]",
              },
              {
                title: "Collective Ownership",
                text: "Projects are designed so that communities eventually manage schools, water systems, and health initiatives independently.",
                color: "bg-[#fff4fb]",
                hover: "hover:bg-[#ece6ff]",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className={`${item.color} ${item.hover}
                rounded-2xl p-6 sm:p-8 shadow-md
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
                border border-transparent hover:border-[#cfe5cf]`}
              >
                <h4 className="text-lg sm:text-xl font-bold text-[#243424] mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-700 leading-7 text-sm sm:text-[15px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LONG FORM */}
        <div className="relative bg-[#e3ece2] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
          <div
            className="max-w-6xl mx-auto space-y-8 text-gray-700 text-[15px] sm:text-[17px] leading-8"
            data-aos="fade-up"
          >
            <p>
              Community development at Rajasthan Human Care Foundation is a
              long-term commitment. We do not introduce parallel systems;
              instead, we strengthen existing social structures so that
              communities can function independently even after our direct
              involvement reduces.
            </p>

            <p>
              Our teams work closely with village councils, local institutions,
              frontline workers, and informal networks to ensure that
              development is inclusive, culturally sensitive, and aligned with
              local realities.
            </p>

            <p>
              When communities gain confidence in their own capacity to lead,
              plan, and act, development stops being a project — it becomes a
              way of life.
            </p>
          </div>
        </div>

        {/* CLOSING */}
        <div
          className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-center"
          data-aos="zoom-in"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#243424] max-w-4xl mx-auto leading-snug">
            Sustainable change begins
            <br />
            when communities lead their own future
          </p>
        </div>
      </section>
    </div>
  );
};

export default Community;