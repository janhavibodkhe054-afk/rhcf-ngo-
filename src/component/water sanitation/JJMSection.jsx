import React from "react";

const JJMSection = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-gradient-to-b from-white to-green-50">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Jal Jeevan Mission
            <span className="text-[#7cb342]"> (JJM)</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ensuring safe and sustainable drinking water for every rural household.
          </p>
        </div>

        {/* ================= TOP SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

          {/* TEXT */}
          <div>
            <h3 className="text-xl font-bold text-[#7cb342] mb-3">
              Vision of JJM
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We envision a society in which all communities have access to safe,
              protected and sustainable drinking water and sanitation services,
              with improved hygiene practices.
            </p>

            <h3 className="text-xl font-bold text-[#7cb342] mb-3">
              Objective
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Providing Functional Household Tap Connection (FHTC) to every rural
              household with regular water supply in adequate quantity and quality.
              Promoting sustainable water management through awareness.
            </p>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://img.manoramayearbook.in/content/dam/yearbook/learn/current-affairs/india/images/2025/3/25/jal-jeevan-mission-25a.jpg"
              alt="Water Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ================= IMPACT ================= */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10">
            Impact / Outcome of <span className="text-[#7cb342]">JJM</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="space-y-4 text-gray-600">
              <p><b>Improved access to clean water:</b> Millions of rural households now have tap connections.</p>
              <p><b>Time saved:</b> Less time fetching water means more time for education and work.</p>
              <p><b>Better health:</b> Reduced diseases like diarrhea, cholera, typhoid.</p>
            </div>

            <div className="space-y-4 text-gray-600">
              <p><b>Economic upliftment:</b> Women engage in productive activities.</p>
              <p><b>Community ownership:</b> Local water user groups manage resources.</p>
              <p><b>School benefits:</b> Improved hygiene and attendance.</p>
            </div>

          </div>
        </div>

        {/* ================= IMPLEMENTATION ================= */}
        <div className="mb-20 bg-[#7cb342] text-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Implementation
          </h3>

          <p className="text-white/90 leading-relaxed">
            RHCF implements Jal Jeevan Mission by addressing water scarcity and contamination
            through awareness and capacity building. Formation of Village Water and Sanitation
            Committees (VWSCs) and Village Action Plans (VAPs) ensures focus on conservation,
            groundwater recharge and wastewater management.
          </p>
        </div>

        {/* ================= SUMMARY TABLE ================= */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-6">
            Total Coverage
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <tbody>
                <tr className="bg-green-100">
                  <td className="p-3 font-semibold">Total State Covered</td>
                  <td className="p-3">02 State (Uttar Pradesh & Madhya Pradesh)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Total District Covered</td>
                  <td className="p-3">
                    09 Districts (Hathras, Moradabad, Shahjahanpur, Rampur,
                    Jhansi, Lalitpur, Jalaun, Ashok Nagar & Sheoni)
                  </td>
                </tr>
                <tr className="bg-green-100">
                  <td className="p-3 font-semibold">Total Gram Panchayat Covered</td>
                  <td className="p-3">3095 Gram Panchayat</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Total Beneficiaries Covered</td>
                  <td className="p-3">Approx. 11 Lakhs Household Covered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= MAIN TABLE ================= */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Covered Geographical Area & Beneficiaries
          </h3>

          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full text-sm border">

              <thead className="bg-[#7cb342] text-white">
                <tr>
                  <th className="p-3">Sr.</th>
                  <th className="p-3">District</th>
                  <th className="p-3">G.P. Covered</th>
                  <th className="p-3">Village Covered</th>
                  <th className="p-3">Beneficiaries</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {[
                  ["1","Hathras","313","758","134166"],
                  ["2","Moradabad","280","644","105616"],
                  ["3","Shahjahanpur","560","1288","203504"],
                  ["4","Rampur","240","476","51238"],
                  ["5","Jalaun","212","508","89916"],
                  ["6","Jhansi","160","368","69184"],
                  ["7","Lalitpur","120","278","46148"],
                  ["8","Ashoknagar","738","1623","223974"],
                  ["9","Sheoni","472","1085","148645"],
                ].map((row, i) => (
                  <tr key={i} className="border hover:bg-green-50">
                    {row.map((cell, j) => (
                      <td key={j} className="p-3 border">{cell}</td>
                    ))}
                  </tr>
                ))}

                {/* TOTAL */}
                <tr className="bg-green-100 font-semibold">
                  <td colSpan="2">Grand Total</td>
                  <td>3095</td>
                  <td>7028</td>
                  <td>1072391</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* ================= IMAGE STRIP ================= */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <img src="/1.jpeg" className="rounded-xl shadow-md" />
          <img src="/2.jpeg" className="rounded-xl shadow-md" />
          <img src="/3.jpeg" className="rounded-xl shadow-md" />
        </div>

      </div>
    </section>
  );
};

export default JJMSection;