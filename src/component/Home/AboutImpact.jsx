import React from "react";
import { useNavigate } from "react-router-dom";

const AboutImpact = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= TOP DESCRIPTION SECTION ================= */}
      <section className="bg-[#f5f5f5] py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
            Rajasthan Human Care Foundation is a grassroots movement dedicated
            to transforming the lives of the most vulnerable communities across
            the desert state. Through integrated programs in education,
            healthcare, and sustainable livelihoods, we turn the cycle of
            poverty into a journey of self-reliance.
          </p>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            We are a registered non-profit organization working tirelessly to
            bridge the gap between intent and impact. Our holistic approach
            ensures that no need goes unnoticed — because sustainable change
            begins at every level of human life.
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              onClick={() => navigate("/about#about")}
              className="text-[#7cb342] font-semibold text-sm sm:text-base hover:text-black transition duration-300"
            >
              Read More →
            </a>
          </div>

        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section className="bg-[#ece7e7] py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 tracking-wide text-black">
            OUR IMPACT
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            
            {/* CARD 1 */}
            <div className="group">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#7cb342] group-hover:text-black transition duration-300">
                10+
              </h3>
              <p className="mt-3 font-semibold text-[#7cb342] group-hover:text-black transition duration-300">
                DISTRICTS
              </p>
              <p className="text-sm sm:text-base text-gray-700 mt-2 max-w-xs mx-auto">
                Across Rajasthan are actively supported through integrated development programs.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#7cb342] group-hover:text-black transition duration-300">
                150+
              </h3>
              <p className="mt-3 font-semibold text-[#7cb342] group-hover:text-black transition duration-300">
                VILLAGES
              </p>
              <p className="text-sm sm:text-base text-gray-700 mt-2 max-w-xs mx-auto">
                Reached through education, healthcare, and community welfare initiatives.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#7cb342] group-hover:text-black transition duration-300">
                50+
              </h3>
              <p className="mt-3 font-semibold text-[#7cb342] group-hover:text-black transition duration-300">
                PROJECTS
              </p>
              <p className="text-sm sm:text-base text-gray-700 mt-2 max-w-xs mx-auto">
                Focused on sustainable livelihoods, women empowerment, and rural transformation.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="group">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#7cb342] group-hover:text-black transition duration-300">
                25K+
              </h3>
              <p className="mt-3 font-semibold text-[#7cb342] group-hover:text-black transition duration-300">
                LIVES IMPACTED
              </p>
              <p className="text-sm sm:text-base text-gray-700 mt-2 max-w-xs mx-auto">
                Beneficiaries supported through long-term capacity building and direct services.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutImpact;