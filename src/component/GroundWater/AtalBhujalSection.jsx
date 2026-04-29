import React from "react";

const AtalBhujalSection = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-gradient-to-b from-white to-blue-50">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Atal Bhujal Yojana
            <span className="text-[#7cb342]"> (Rajasthan & Uttar Pradesh)</span>
          </h2>

          <div className="mt-4 text-gray-500 text-sm md:text-base space-y-1">
            <p>U.P. Atal: Ongoing from May 2021 – Present</p>
            <p>Rajasthan Atal: Nov 2022 – March 2025</p>
          </div>
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
              src="https://static.vecteezy.com/system/resources/thumbnails/057/213/582/small/fresh-water-pouring-from-a-gray-pipe-creating-ripples-in-a-stream-with-greenery-blurred-in-background-natural-spring-refreshment-free-photo.jpg"
              alt="Groundwater Management"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* ================= IMPLEMENTATION ================= */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-6">
            Implementation
          </h3>

          <p className="text-gray-600 leading-relaxed">
            RHCF implemented the Atal Bhujal Yojana in Rajasthan’s Sikar and
            Hanumangarh districts, and Uttar Pradesh’s Jhansi district, focusing
            on community-led groundwater management. The project emphasized the
            creation of groundwater recharge structures and sustainable water
            usage practices.
            <br /><br />
            RHCF facilitated the formation of local water management committees
            in the Gram Panchayats and supported the preparation of Water
            Security Plans to ensure long-term sustainability.
          </p>

        </div>

        {/* ================= OUTCOMES ================= */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-8">
            Outcomes / Early Impacts
          </h3>

          <div className="space-y-6 text-gray-600">

            <p>
              <b>Groundwater Decline Trends Reversed in Some Areas:</b> In certain
              blocks and districts, the pre-monsoon groundwater level decline has
              been successfully reversed.
            </p>

            <p>
              <b>Increasing Water Use Efficiency:</b> The shift toward
              micro-irrigation systems such as drip, sprinkler, and pipelines is
              growing, reducing water usage per unit of agricultural output.
            </p>

            <p>
              <b>Awareness and Institutional Strengthening:</b> High awareness in
              Gram Panchayats regarding ATAL JAL tools (monitoring kits, etc.).
              Community committees and line departments are actively involved,
              though capacity to interpret and use data continues to evolve.
            </p>

          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div>

          <h3 className="text-2xl font-bold text-center mb-8">
            Coverage & Beneficiaries
          </h3>

          <div className="overflow-x-auto rounded-xl shadow-lg">

            <table className="w-full text-sm border">

              {/* HEADER */}
              <thead className="bg-[#7cb342] text-white">
                <tr>
                  <th className="p-3">Sr.</th>
                  <th className="p-3">District</th>
                  <th className="p-3">G.P. Covered</th>
                  <th className="p-3">Beneficiaries Farmers</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody className="text-center">

                <tr className="hover:bg-green-50">
                  <td className="p-3 border">1</td>
                  <td className="p-3 border">Sikar</td>
                  <td className="p-3 border">79 Gram Panchayats</td>
                  <td className="p-3 border">9885 Farmers</td>
                </tr>

                <tr className="hover:bg-green-50">
                  <td className="p-3 border">2</td>
                  <td className="p-3 border">Hanumangarh</td>
                  <td className="p-3 border">97 Gram Panchayats</td>
                  <td className="p-3 border">12904 Farmers</td>
                </tr>

                <tr className="hover:bg-green-50">
                  <td className="p-3 border">3</td>
                  <td className="p-3 border">Jhansi</td>
                  <td className="p-3 border">9 Gram Panchayats</td>
                  <td className="p-3 border">1629 Farmers</td>
                </tr>

                {/* TOTAL */}
                <tr className="bg-green-100 font-semibold">
                  <td colSpan="2">Total</td>
                  <td>185 Gram Panchayats</td>
                  <td>24418 Farmers</td>
                </tr>

              </tbody>

            </table>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AtalBhujalSection;