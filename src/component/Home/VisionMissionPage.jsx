import React from "react";
import { ShieldCheck, Target } from "lucide-react";

const VisionMissionPage = () => {
  return (
    <div className="bg-[#f4f4f4]">

      {/* VISION & MISSION SECTION */}
      <section className="max-w-7xl mx-auto py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

          {/* Vision */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
            <div className="bg-yellow-100 p-4 rounded-full w-fit">
              <Target className="text-yellow-600 w-7 h-7 sm:w-8 sm:h-8" />
            </div>
                        
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-700 uppercase">
                Our Vision
              </h3>
              <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                To manifest a Rajasthan where every household is self-sufficient,
                every child is in school, and every individual has access to
                quality healthcare regardless of their postal code or social
                standing.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
            <div className="bg-green-100 p-4 rounded-full w-fit">
              <ShieldCheck className="text-green-600 w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-700 uppercase">
                Our Mission
              </h3>
              <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>
                  <strong>Education:</strong> Achieve 100% literacy in adopted
                  villages by 2030.
                </li>
                <li>
                  <strong>Health:</strong> Reduce maternal & infant mortality
                  via mobile medical units.
                </li>
                <li>
                  <strong>Empowerment:</strong> Train 50,000 women in vocational
                  skills.
                </li>
                <li>
                  <strong>Integrity:</strong> Maintain highest governance &
                  financial transparency standards.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 uppercase">
            Founder / Chairperson Message
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            I have traveled to the farthest corners of the Thar Desert, and in
            every village, I saw immense potential suppressed by lack of
            opportunity. Rajasthan Human Care Foundation was not started to give
            “charity” — it was started to give “opportunity.”
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Whether it’s providing a solar lamp to a student or a sewing machine
            to a widow, our goal is to ignite independence. I thank our donors,
            volunteers, and partners for being the backbone of this mission.
          </p>

        </div>
      </section>

    </div>
  );
};

export default VisionMissionPage;