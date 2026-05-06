import React from "react";

const JJMSection = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Jal Jeevan Mission
            <span className="text-[#7cb342]"> (JJM)</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ensuring safe and sustainable drinking water for every rural household.
          </p>
        </div>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

          {/* TEXT */}
          <div>
            <h3 className="text-xl font-bold text-[#7cb342] mb-3">Vision</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Jal Jeevan Mission envisions a future where every rural household has
              assured access to safe, adequate, and sustainable drinking water through
              individual household tap connections. Beyond infrastructure, the mission
              focuses on improving public health, strengthening community ownership,
              and promoting responsible water usage.
            </p>

            <h3 className="text-xl font-bold text-[#7cb342] mb-3">Objective</h3>
            <p className="text-gray-600 leading-relaxed">
              The mission aims to provide Functional Household Tap Connections (FHTC)
              to every rural household, ensuring regular supply of potable water in
              adequate quantity and quality. It also promotes water conservation,
              groundwater recharge, and community participation for long-term sustainability.
            </p>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://img.manoramayearbook.in/content/dam/yearbook/learn/current-affairs/india/images/2025/3/25/jal-jeevan-mission-25a.jpg"
              alt="JJM"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* IMPACT */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10">
            Impact / Outcome of <span className="text-[#7cb342]">JJM</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">

            <div>
              Access to safe and reliable drinking water has significantly improved
              across rural households, reducing dependence on unsafe sources. The
              time spent collecting water has decreased, allowing families to focus
              on education, livelihood, and productivity.
            </div>

            <div>
              Health conditions have improved with a reduction in water-borne diseases.
              Women are actively participating in self-help groups and income-generating
              activities, strengthening both economic and social empowerment.
            </div>

          </div>
        </div>

        {/* IMPLEMENTATION */}
        <div className="mb-20 bg-[#7cb342] text-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Implementation</h3>

          <p className="leading-relaxed text-white/90">
            Rajasthan Human Care Foundation (RHCF) supports the implementation of
            Jal Jeevan Mission through awareness campaigns, capacity building, and
            community participation. Village Water and Sanitation Committees (VWSCs)
            are formed to ensure local ownership and governance.

            Village Action Plans (VAPs) are developed to address water conservation,
            groundwater recharge, and wastewater management. Through continuous
            engagement and training, the mission ensures long-term sustainability
            and effective water resource management.
          </p>
        </div>

        {/* TOTAL COVERAGE */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-6">Total Coverage</h3>

          <p className="text-gray-700 leading-8 text-lg">
            The mission is implemented across two states — Uttar Pradesh and Madhya Pradesh —
            covering nine districts: Hathras, Moradabad, Shahjahanpur, Rampur, Jhansi,
            Lalitpur, Jalaun, Ashok Nagar, and Seoni.

            A total of 3,095 Gram Panchayats have been covered, reaching approximately
            11 lakh households. This large-scale implementation reflects a strong
            commitment towards rural water security and sustainable development.
          </p>
        </div>

        {/* DISTRICT DETAILS */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10">
            Covered Geographical Area & Beneficiaries
          </h3>

          <div className="space-y-6 text-gray-700 leading-relaxed">

            <p><b>Hathras:</b> 313 Gram Panchayats and 758 villages covered, benefiting 134,166 people.</p>

            <p><b>Moradabad:</b> 280 Gram Panchayats and 644 villages covered, reaching 105,616 beneficiaries.</p>

            <p><b>Shahjahanpur:</b> 560 Gram Panchayats and 1,288 villages covered, benefiting 203,504 people.</p>

            <p><b>Rampur:</b> 240 Gram Panchayats and 476 villages covered, benefiting 51,238 people.</p>

            <p><b>Jalaun:</b> 212 Gram Panchayats and 508 villages covered, benefiting 89,916 people.</p>

            <p><b>Jhansi:</b> 160 Gram Panchayats and 368 villages covered, benefiting 69,184 people.</p>

            <p><b>Lalitpur:</b> 120 Gram Panchayats and 278 villages covered, benefiting 46,148 people.</p>

            <p><b>Ashok Nagar:</b> 738 Gram Panchayats and 1,623 villages covered, benefiting 223,974 people.</p>

            <p><b>Seoni:</b> 472 Gram Panchayats and 1,085 villages covered, benefiting 148,645 people.</p>

            <p className="font-semibold text-[#7cb342] mt-6">
              Overall coverage includes 3,095 Gram Panchayats, 7,028 villages,
              and more than 1,072,391 beneficiaries.
            </p>

          </div>
        </div>

        

      </div>
    </section>
  );
};

export default JJMSection;