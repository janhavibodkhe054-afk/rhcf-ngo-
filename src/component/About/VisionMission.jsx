import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisionMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="about-vision-mission"
      className="w-full overflow-hidden bg-[#f8fafc] py-14 sm:py-16 md:py-20 lg:py-28 px-5 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <div
          className="text-center max-w-4xl mx-auto mb-14 lg:mb-20"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Building Stronger Communities
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            Rajasthan Human Care Foundation works at the grassroots level to
            create sustainable change for individuals, families, and
            communities. We focus on health, education, livelihoods, women
            empowerment, and environmental initiatives to improve lives.
          </p>
        </div>

        {/* ===== VISION & MISSION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16 lg:mb-24">
          {/* Vision */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2f855a] mb-5">
              Our Vision
            </h3>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our vision is to build an inclusive and empowered society where
              every individual, regardless of background, has equal access to
              opportunities, dignity, and a better quality of life.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
              We envision self-reliant and resilient communities where children
              receive quality education, women lead change, families live with
              security and health, and citizens actively participate in shaping
              their future.
            </p>
          </div>

          {/* Mission */}
          <div
            data-aos="fade-left"
            className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2f855a] mb-5">
              Our Mission
            </h3>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5">
              Our mission is to implement impactful and sustainable
              community-driven programs that address poverty, inequality, and
              social challenges.
            </p>

            <ul className="space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
              <li>✓ Provide access to quality education</li>
              <li>✓ Improve healthcare and sanitation awareness</li>
              <li>✓ Empower women through leadership initiatives</li>
              <li>✓ Promote skill development and employment</li>
              <li>✓ Encourage environmental sustainability</li>
              <li>✓ Strengthen grassroots leadership</li>
            </ul>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-5">
              Through collaboration, innovation, and transparency, we create
              long-term positive impact for underserved communities.
            </p>
          </div>
        </div>

        {/* ===== EDUCATION ===== */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* Image */}
          <div
            data-aos="zoom-in"
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src="https://content3.jdmagicbox.com/comp/ernakulam/m6/0484px484.x484.230909174054.k9m6/catalogue/righte-foundation-judgemukku-ernakulam-ngos-0klybbjx7c.jpg"
              alt="Education"
              className="w-full h-[280px] sm:h-[350px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* Content */}
          <div data-aos="fade-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2f855a] mb-5">
              Empowering Children and Families
            </h3>

            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-5">
              RHCF works to ensure every child has access to quality education
              while supporting families through health, nutrition, and
              livelihood programs.
            </p>

            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              By combining education, healthcare awareness, community
              mobilization, and skill development, we create resilient
              communities where children and families can thrive.
            </p>
          </div>
        </div>

        {/* ===== COMMUNITY IMPACT ===== */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div
            className="order-2 lg:order-1"
            data-aos="fade-right"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2f855a] mb-5">
              Strengthening Communities
            </h3>

            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-5">
              We implement sustainable programs in women empowerment, skill
              development, environmental conservation, and community
              mobilization.
            </p>

            <ul className="space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
              <li>✓ Support child education and youth leadership</li>
              <li>✓ Improve health and nutrition awareness</li>
              <li>✓ Promote livelihood and skill-building initiatives</li>
              <li>✓ Empower women and marginalized groups</li>
              <li>✓ Encourage water conservation and sustainability</li>
            </ul>
          </div>

          {/* Image */}
          <div
            className="order-1 lg:order-2 overflow-hidden rounded-3xl shadow-xl"
            data-aos="zoom-in"
          >
            <img
              src="https://webfiles.amrita.edu/2024/10/green-gown-awards-live-in-labs-amrita-img.jpg"
              alt="Community Impact"
              className="w-full h-[280px] sm:h-[350px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;