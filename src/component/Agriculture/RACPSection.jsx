import React from "react";

const RACPSection = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-gradient-to-b from-white to-green-50">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Rajasthan Agriculture Competitiveness Project
            <span className="text-[#7cb342]"> (RACP)</span>
          </h2>

          <p className="text-gray-500 mt-3">
            Implemented from 2016 to 2020 to strengthen farmer livelihoods and agricultural sustainability
          </p>
        </div>

        {/* ================= VISION ================= */}
        <div className="mb-16 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-xl font-bold text-[#7cb342] mb-4">
              Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              The project envisions empowering farmers by building a sustainable,
              inclusive, and economically resilient agricultural ecosystem.
              It focuses on enhancing productivity, improving access to markets,
              and enabling farmers to become part of organized collectives that
              ensure fair pricing, reduced risks, and long-term livelihood security.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              Through a combination of infrastructure development, capacity building,
              and institutional strengthening, RACP aims to transform traditional
              agriculture into a more efficient, profitable, and climate-resilient system.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://t4.ftcdn.net/jpg/01/23/70/89/360_F_123708977_X8lHoZ3iSb6rRjsmFb2mxGNp2dngJrjh.jpg"
              alt="Farmers"
              className="w-full h-[320px] object-cover"
            />
          </div>
        </div>

        {/* ================= OBJECTIVES ================= */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-8">
            Objectives & Strategic Components
          </h3>

          <div className="space-y-6 text-gray-600 leading-relaxed">

            <p>
              <b>Enhancing Water-Use Efficiency:</b> The project promotes efficient
              water management through advanced irrigation techniques such as drip
              and sprinkler systems, supported by substantial subsidies. It also
              encourages rainwater harvesting, groundwater recharge, and improved
              canal distribution systems to ensure optimal use of limited water resources.
            </p>

            <p>
              <b>Improved Crop Management & Technology Adoption:</b> Farmers are
              supported with access to high-quality seeds, modern agricultural tools,
              and precision farming practices. Training programs help them adopt
              scientific methods, resulting in higher productivity, reduced input costs,
              and improved crop quality.
            </p>

            <p>
              <b>Market Linkages & Value Chain Development:</b> RACP strengthens
              farmer institutions such as Farmer Producer Organizations (FPOs)
              and connects them with markets. It supports aggregation, grading,
              storage, and processing facilities, enabling farmers to gain better
              prices and reduce dependency on intermediaries.
            </p>

            <p>
              <b>Environmental & Social Sustainability:</b> The project ensures that
              all agricultural interventions are environmentally responsible and socially
              inclusive. It promotes sustainable farming practices, soil health management,
              and climate-resilient agriculture while ensuring participation of women
              and marginalized communities.
            </p>

          </div>
        </div>

        {/* ================= OUTCOMES ================= */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-8">
            Key Outcomes & Achievements
          </h3>

          <div className="grid md:grid-cols-2 gap-10 text-gray-600 leading-relaxed">

            <div className="space-y-5">
              <p>
                <b>Irrigation Modernization & Subsidy Support:</b> Farmers benefited
                from significant subsidies—up to 90% for drip irrigation, 60% for
                sprinkler systems, and up to 86% for solar-powered pumps—making
                modern irrigation accessible and affordable.
              </p>

              <p>
                <b>Crop Diversification & Sustainable Practices:</b> The project
                encouraged farmers to shift towards high-value crops such as
                horticulture, floriculture, spices, and medicinal plants. It also
                promoted organic and low-input farming practices to ensure long-term
                sustainability.
              </p>
            </div>

            <div className="space-y-5">
              <p>
                <b>Farmer Collectives & Market Strengthening:</b> Formation of Farmer
                Producer Companies (FPCs) enabled farmers to collectively process,
                package, and market their produce. Facilities like flour mills,
                packaging units, and storage centers improved value addition and
                increased income opportunities.
              </p>

              <p>
                <b>Private Sector Participation:</b> The project attracted private
                agribusiness investments, fostering partnerships that strengthened
                supply chains, introduced innovation, and created better market access
                for farmers.
              </p>
            </div>

          </div>
        </div>

        {/* ================= COVERAGE (NO TABLE) ================= */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">

          <h3 className="text-2xl font-bold mb-6 text-center">
            Project Coverage & Beneficiaries
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            The Rajasthan Agriculture Competitiveness Project was implemented
            across selected high-potential regions, focusing on intensive agricultural
            development and farmer support through cluster-based interventions.
          </p>

          <div className="space-y-6 text-gray-700">

            <div>
              <h4 className="font-semibold text-[#7cb342] text-lg">
                Jhalawar District – Manoharthana Block
              </h4>
              <p>
                The project covered <b>28 Gram Panchayats</b> in this region,
                directly benefiting approximately <b>7,800 farmers</b>. Interventions
                focused on improving irrigation infrastructure, crop productivity,
                and strengthening farmer groups for better market access.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#7cb342] text-lg">
                Dholpur District – Bari Block
              </h4>
              <p>
                A total of <b>35 Gram Panchayats</b> were covered, reaching around
                <b> 9,600 farmers</b>. The initiative emphasized water conservation,
                crop diversification, and capacity building for sustainable agriculture.
              </p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-lg font-semibold">
                Overall Impact
              </p>

              <p className="text-gray-600 mt-2">
                Across both regions, the project successfully covered 
                <b> 2 blocks</b> and <b>63 Gram Panchayats</b>, directly impacting
                approximately <b>17,400 farmers</b>. These interventions have
                contributed to increased agricultural productivity, improved income
                levels, and enhanced resilience of rural farming communities.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RACPSection;