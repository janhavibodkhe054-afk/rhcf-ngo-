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
            Completed 2016 to 2020
          </p>
        </div>

        {/* ================= VISION ================= */}
        <div className="mb-16 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h3 className="text-xl font-bold text-[#7cb342] mb-4">
              Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To empower farmers by building a sustainable, inclusive, and
              economically viable collective that enhances productivity,
              ensures fair market access, and improves the overall livelihoods
              of its members.
            </p>
          </div>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://t4.ftcdn.net/jpg/01/23/70/89/360_F_123708977_X8lHoZ3iSb6rRjsmFb2mxGNp2dngJrjh.jpg"
              alt="Farmers"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* ================= OBJECTIVES ================= */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-8">
            🎯 Objectives & Strategic Components
          </h3>

          <div className="space-y-6 text-gray-600">

            <p>
              <b>Enhance water-use efficiency:</b> Promote on-farm water-saving
              techniques, irrigation modernization, rainwater harvesting,
              and improved canal management.
            </p>

            <p>
              <b>Crop management & technology integration:</b> Introduce better
              seeds, precision farming, drip/sprinkler systems (with subsidies
              up to 90%).
            </p>

            <p>
              <b>Market linkages & value-chain development:</b> Foster farmer
              producer groups, create public-private agribusiness partnerships,
              and support post-harvest processing facilities.
            </p>

            <p>
              <b>Environmental & social sustainability:</b> Ensure policies
              support natural resource conservation and include social safeguards,
              with medium environmental risk.
            </p>

          </div>
        </div>

        {/* ================= OUTCOMES ================= */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-8">
            🎯 Outcomes
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-gray-600">

            <div className="space-y-5">
              <p>
                <b>Irrigation modernization & subsidies:</b> Up to 90% subsidy
                on drip systems, 60% on sprinklers, and 86% toward solar pumps.
              </p>

              <p>
                <b>Crop & farm diversification:</b> Supports horticulture,
                floriculture, spices, medicinal plants, and sustainable practices
                like organic or zero-budget natural farming.
              </p>
            </div>

            <div className="space-y-5">
              <p>
                <b>Farmer collective & market linkages:</b> Establishes Farmer
                Producer Companies (FPCs) with crop-processing units (e.g., atta
                chakki, packaging centres) to improve aggregation, processing,
                and direct marketing.
              </p>

              <p>
                <b>Private sector engagement:</b> Encourages agribusinesses to
                invest in value chains, joint ventures, and market infrastructure.
              </p>
            </div>

          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div>

          <h3 className="text-2xl font-bold text-center mb-8">
            Project Coverage & Beneficiaries
          </h3>

          <div className="overflow-x-auto rounded-xl shadow-lg">

            <table className="w-full text-sm border">

              {/* HEADER */}
              <thead className="bg-[#7cb342] text-white">
                <tr>
                  <th className="p-3">Sr.</th>
                  <th className="p-3">District</th>
                  <th className="p-3">Block</th>
                  <th className="p-3">G.P. Covered</th>
                  <th className="p-3">Beneficiaries Farmers</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody className="text-center">

                <tr className="hover:bg-green-50">
                  <td className="p-3 border">1</td>
                  <td className="p-3 border">Jhalawar</td>
                  <td className="p-3 border">Manoharthana</td>
                  <td className="p-3 border">28 Gram Panchayats</td>
                  <td className="p-3 border">7800 Farmers</td>
                </tr>

                <tr className="hover:bg-green-50">
                  <td className="p-3 border">2</td>
                  <td className="p-3 border">Dholpur</td>
                  <td className="p-3 border">Bari</td>
                  <td className="p-3 border">35 Gram Panchayats</td>
                  <td className="p-3 border">9600 Farmers</td>
                </tr>

                {/* TOTAL */}
                <tr className="bg-green-100 font-semibold">
                  <td colSpan="2">Total</td>
                  <td>2 Blocks</td>
                  <td>63 Gram Panchayats</td>
                  <td>17400 Farmers</td>
                </tr>

              </tbody>

            </table>

          </div>
        </div>

      </div>
    </section>
  );
};

export default RACPSection;