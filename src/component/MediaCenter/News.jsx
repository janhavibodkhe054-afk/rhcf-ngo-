 import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Droplet, Users, GraduationCap, Leaf } from "lucide-react";


const News = () => {
const slides = [
    { title: "Cultivating Hope, Harvesting Dignity", img: "/img4.jpeg" },
    { title: "Transforming Lives Through Education", img: "/img5.jpeg" },
    { title: "Accessible Healthcare For All", img: "/img6.jpeg" },
    { title: "Empowering Women, Strengthening Families", img: "/img7.jpeg" },
  ];

  const location = useLocation();
  const [current, setCurrent] = useState(0);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("photo");
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

  // Hash Scroll Support
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

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const element = document.getElementById("impact-counter");
        if (element) {
          const position = element.getBoundingClientRect().top;
          if (position < window.innerHeight - 100) {
            setStart(true);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      if (!start) return;

      let startValue = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(startValue));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [start, end]);

    return (
      <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
        {count.toLocaleString()}
        {suffix}
      </h3>
    );
  };

  const images = [
    { src: "/1.jpeg", title: "Education Drive" },
    { src: "/2.jpeg", title: "Health Camp" },
    { src: "/3.jpeg", title: "Women Empowerment" },
    { src: "/4.jpeg", title: "Community Support" },
    { src: "/5.jpg", title: "Tree Plantation" },
    { src: "/6.jpeg", title: "Skill Training" },
    { src: "/7.jpeg", title: "Skill Training" },
    { src: "/8.jpeg", title: "Skill Training" },
    { src: "/9.jpeg", title: "Skill Training" },
    { src: "/10.jpeg", title: "Skill Training" },
    { src: "/11.jpeg", title: "Skill Training" },
    { src: "/12.jpeg", title: "Skill Training" },
    { src: "/13.jpeg", title: "Skill Training" },
    { src: "/14.jpeg", title: "Skill Training" },
    { src: "/15.jpeg", title: "Skill Training" },
    { src: "/16.jpeg", title: "Skill Training" },
    { src: "/17.jpeg", title: "Skill Training" },
    { src: "/18.jpeg", title: "Skill Training" },
    { src: "/19.jpeg", title: "Skill Training" },
    { src: "/20.jpeg", title: "Skill Training" },
    { src: "/21.jpeg", title: "Skill Training" },
    { src: "/22.jpeg", title: "Skill Training" },
    { src: "/23.jpeg", title: "Skill Training" },
    { src: "/24.jpeg", title: "Skill Training" },
    { src: "/25.jpeg", title: "Skill Training" },
    { src: "/26.jpeg", title: "Skill Training" },
    { src: "/27.jpeg", title: "Skill Training" },
    { src: "/28.jpeg", title: "Skill Training" },
    { src: "/29.jpeg", title: "Skill Training" },
    { src: "/30.jpeg", title: "Skill Training" },
    { src: "/31.jpeg", title: "Skill Training" },
    { src: "/32.jpeg", title: "Skill Training" },
    { src: "/33.jpeg", title: "Skill Training" },
    { src: "/34.jpeg", title: "Skill Training" },
    { src: "/35.jpeg", title: "Skill Training" },
    { src: "/36.jpeg", title: "Skill Training" },
    { src: "/37.jpeg", title: "Skill Training" },
    { src: "/38.jpeg", title: "Skill Training" },
    { src: "/39.jpeg", title: "Skill Training" },
  ];

  return (
    <div>
      <section id="news" className="py-12 sm:py-16 md:py-20 lg:py-14 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-4xl font-extrabold mb-6">
              News & Field Updates
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl">
              Recent developments and ongoing initiatives undertaken by
              Rajasthan Human Care Foundation across rural and urban
              communities.
            </p>
          </div>

          {/* News 1 */}
          <div className="mb-16">
            <p className="text-sm text-orange-600 font-semibold mb-2">
              March 2026 • Village Development Initiative
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Adoption of Villages for Integrated Rural Development
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg md:text-xl">
              Rajasthan Human Care Foundation expanded its village adoption
              program to strengthen integrated rural development. The initiative
              focuses on improving sanitation, access to safe drinking water,
              community infrastructure, and local employment generation.
            </p>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
              Through participatory planning and community mobilization, local
              stakeholders are actively engaged in decision-making processes to
              ensure sustainable and long-term improvements in quality of life.
            </p>
          </div>

          <hr className="my-16 border-gray-200" />

          {/* News 2 */}
          <div className="mb-16">
            <p className="text-sm text-orange-600 font-semibold mb-2">
              February 2026 • Water & Natural Resource Management
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Rainwater Harvesting & Soil Testing Lab Strengthening
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg md:text-xl">
              Recognized as a Key Resource Centre by Jal Shakti Mantralay, RHCF
              intensified its efforts in rainwater harvesting and water
              conservation practices across drought-prone regions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg md:text-xl">
              Soil testing laboratory services were strengthened to support
              farmers with scientific agricultural guidance. Farmers received
              training on crop planning, soil health improvement, and efficient
              irrigation methods.
            </p>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
              These interventions aim to enhance agricultural productivity while
              promoting sustainable and environmentally responsible farming
              practices.
            </p>
          </div>

          <hr className="my-16 border-gray-200" />

          {/* News 3 */}
          <div className="mb-16">
            <p className="text-sm text-orange-600 font-semibold mb-2">
              January 2026 • Women & Livelihood Development
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Skill Building and Enterprise Promotion for Women
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg md:text-xl">
              RHCF continues to empower women from marginalized and BPL
              communities through structured skill-building programs and
              livelihood training.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg md:text-xl">
              Training sessions focus on vocational skills, entrepreneurship,
              financial literacy, and self-help group formation. The initiative
              encourages women to establish small enterprises and become
              financially independent.
            </p>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
              The program strengthens community confidence and promotes
              equitable participation in local economic activities.
            </p>
          </div>

          <hr className="my-16 border-gray-200" />

          {/* News 4 */}
          <div>
            <p className="text-sm text-orange-600 font-semibold mb-2">
              Ongoing • Community Health & Environmental Conservation
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Health Camps, Tree Plantation & Community Mobilization
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg md:text-xl">
              RHCF regularly organizes health and sanitation camps to address
              healthcare accessibility gaps in underserved areas. Preventive
              care, awareness drives, and medical consultations are conducted in
              collaboration with local stakeholders.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg md:text-xl">
              Environmental conservation initiatives including large-scale tree
              plantation drives are being carried out to promote ecological
              balance and sustainable natural resource management.
            </p>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
              Through strong community mobilization efforts, RHCF ensures that
              beneficiaries actively participate in development processes,
              creating ownership and long-term sustainability.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
