import React from "react";
import {
  BookOpen,
  HeartPulse,
  Users,
  FileText,
  Leaf,
  HandHeart,
} from "lucide-react";

const OurPrograms = () => {
  return (
    <section className="bg-[#f3f3f3] py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide uppercase mb-12 sm:mb-16 lg:mb-20">
          OUR IMPACT AREAS
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">

          {/* EDUCATION */}
          <div className="flex items-start gap-5">
            <div className="bg-[#e6c27a] p-4 sm:p-5 rounded-full shrink-0">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase text-[#e0b15c] tracking-wide">
                Education – Shiksha Setu
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
                Providing bridge education to school dropouts, ensuring 100%
                literacy in adopted villages by 2030 and empowering children to
                reclaim their future.
              </p>
            </div>
          </div>

          {/* HEALTHCARE */}
          <div className="flex items-start gap-5">
            <div className="bg-[#cbb8d8] p-4 sm:p-5 rounded-full shrink-0">
              <HeartPulse className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase text-[#b39ac9] tracking-wide">
                Healthcare – Sanjeevani
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
                Mobile medical vans and localized health interventions reducing
                maternal and infant mortality in remote desert communities.
              </p>
            </div>
          </div>

          {/* WOMEN EMPOWERMENT */}
          <div className="flex items-start gap-5">
            <div className="bg-[#c9d8d7] p-4 sm:p-5 rounded-full shrink-0">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase text-[#9db7b6] tracking-wide">
                Women Empowerment
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
                Training women in vocational skills and transforming them into
                financially independent breadwinners for their families.
              </p>
            </div>
          </div>

          {/* SUSTAINABLE LIVELIHOODS */}
          <div className="flex items-start gap-5">
            <div className="bg-[#e3c6b4] p-4 sm:p-5 rounded-full shrink-0">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase text-[#d3a98f] tracking-wide">
                Sustainable Livelihoods
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
                Skill development, micro-enterprise support, and livelihood
                opportunities that replace dependency with dignity.
              </p>
            </div>
          </div>

          {/* GRASSROOTS DEVELOPMENT */}
          <div className="flex items-start gap-5">
            <div className="bg-[#b7d9b8] p-4 sm:p-5 rounded-full shrink-0">
              <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase text-[#6bb46f] tracking-wide">
                Grassroots Development
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
                Community-owned schools, water systems, and health centers built
                for long-term sustainability and local management.
              </p>
            </div>
          </div>

          {/* DISASTER RESPONSE */}
          <div className="flex items-start gap-5">
            <div className="bg-[#f2b1a5] p-4 sm:p-5 rounded-full shrink-0">
              <HandHeart className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase text-[#e17868] tracking-wide">
                Disaster & Crisis Response
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
                From drought relief to pandemic oxygen support, we provide
                immediate aid while building long-term resilience in vulnerable
                villages.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurPrograms;