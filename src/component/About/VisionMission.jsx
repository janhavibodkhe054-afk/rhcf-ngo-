import React from "react";

const VisionMission = () => {
  return (
    <div>
      <section
        id="about-vision-mission"
        className="w-full bg-[#f9fafb] py-12 sm:py-16 md:py-20 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">

          {/* ===== SECTION HEADER ===== */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Building Stronger Communities
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8">
              Rajasthan Human Care Foundation works at the grassroots to create sustainable
              change for individuals, families, and communities. We focus on health, education,
              livelihoods, women empowerment, and environmental initiatives to improve lives.
            </p>
          </div>

          {/* ===== VISION & MISSION (NEW SECTION) ===== */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-20"
          
          >

            {/* VISION */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-lg transition">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2f855a] mb-4">
                Our Vision
              </h3>

              <p className="text-gray-700 text-base sm:text-lg leading-7">
                Our vision is to build an inclusive and empowered society where every individual,
                regardless of their background, has equal access to opportunities, dignity, and
                a better quality of life. We envision communities that are self-reliant, resilient,
                and capable of driving their own sustainable development.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-7 mt-4">
                We strive for a future where children receive quality education, women are empowered
                to lead change, families live with security and health, and communities actively
                participate in shaping their own progress.
              </p>
            </div>

            {/* MISSION */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-lg transition">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2f855a] mb-4">
                Our Mission
              </h3>

              <p className="text-gray-700 text-base sm:text-lg leading-7 mb-4">
                Our mission is to implement impactful, sustainable, and community-driven programs
                that address the root causes of poverty, inequality, and social challenges.
              </p>

              <ul className="space-y-2 text-gray-700 text-sm sm:text-base list-disc list-inside">
                <li>Provide access to quality education for children and youth</li>
                <li>Improve healthcare, nutrition, and sanitation awareness</li>
                <li>Empower women through leadership and livelihood initiatives</li>
                <li>Promote skill development and employment opportunities</li>
                <li>Encourage environmental sustainability and water conservation</li>
                <li>Strengthen community participation and grassroots leadership</li>
              </ul>

              <p className="text-gray-700 text-base sm:text-lg leading-7 mt-4">
                Through collaboration, innovation, and transparency, we aim to create long-term
                positive impact and bring meaningful change in the lives of underserved communities.
              </p>
            </div>
          </div>

          {/* ===== EDUCATION & CHILDREN SECTION ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-16 sm:mb-20">
            
            {/* Image */}
            <div>
              <img
                src="/school.jpeg"
                alt="Child Education & Community"
                className="rounded-2xl shadow-lg w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2f855a] mb-4">
                Empowering Children and Families
              </h3>

              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 mb-4">
                RHCF works to ensure every child has access to quality education while supporting
                families through health, nutrition, and livelihood programs. We believe education
                alone is not enough—children thrive when their families and communities are strong
                and empowered.
              </p>

              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8">
                By combining learning initiatives with health awareness, community mobilization,
                and skill development, we help create a resilient society where children and
                families can flourish.
              </p>
            </div>
          </div>

          {/* ===== COMMUNITY IMPACT SECTION ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

            {/* Content */}
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2f855a] mb-4">
                Strengthening Communities
              </h3>

              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 mb-4">
                At RHCF, we implement sustainable programs in women empowerment, skill development,
                environmental conservation, and community mobilization. Our work reaches underserved
                villages and marginalized groups to create equitable opportunities.
              </p>

              <ul className="space-y-2 text-gray-700 text-sm sm:text-base md:text-lg list-disc list-inside">
                <li>Support child education and youth leadership programs</li>
                <li>Improve health, sanitation, and nutrition awareness</li>
                <li>Promote livelihood, skill-building, and self-help groups</li>
                <li>Empower women and marginalized communities</li>
                <li>Encourage environmental conservation and water management</li>
              </ul>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <img
                src="/gallery1.jpeg"
                alt="Community Engagement & Impact"
                className="rounded-2xl shadow-lg w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default VisionMission;