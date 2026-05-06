import React from "react";

const WashImpactSection = () => {
  return (
    <section className="bg-[#f8fafc] py-16 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            WASH Program Impact & Reach
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our initiatives under SBM(G) have empowered communities across Rajasthan 
            through structured training programs, sanitation awareness campaigns, 
            and sustainable water management practices that directly improve lives.
          </p>
        </div>

        {/* VISION + IMPLEMENTATION */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#2e7d32]">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We envision a society where every community has access to safe, protected,
              and sustainable drinking water along with improved sanitation facilities.
              Our focus is on building long-term behavioral change by strengthening
              hygiene awareness and ensuring community participation in water governance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#2e7d32]">
              Implementation Strategy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our structured WASH framework is built on three pillars: learning,
              performance, and impact. Through Community Approach to Sanitation (CAS),
              we conduct 1–5 day intensive residential and non-residential training
              programs across Rajasthan, empowering local leaders, frontline workers,
              and communities to adopt safe hygiene and sanitation practices.
            </p>
          </div>
        </div>

        {/* ================= FIRST DATA BLOCK ================= */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-gray-800 text-center">
            5-Day Residential Training Program Coverage
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              { name: "Dungarpur", gp: 353, batch: 93, participants: 2807 },
              { name: "Jodhpur", gp: 627, batch: 81, participants: 2462 },
              { name: "Bundi", gp: 184, batch: 20, participants: 614 },
              { name: "Sikar", gp: 375, batch: 64, participants: 1934 },
              { name: "Bharatpur", gp: 400, batch: 70, participants: 2132 },
              { name: "Dausa", gp: 284, batch: 44, participants: 1358 },
              { name: "Chittorgarh", gp: 299, batch: 50, participants: 1536 },
              { name: "Banswara", gp: 417, batch: 57, participants: 1744 },
              { name: "Barmer", gp: 686, batch: 92, participants: 2782 },
              { name: "Hanumangarh", gp: 269, batch: 38, participants: 1164 },
              { name: "Jaipur", gp: 489, batch: 57, participants: 1738 },
              { name: "Ajmer", gp: 56, batch: 8, participants: 254 },
            ].map((d, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-lg font-semibold text-[#2e7d32] mb-3">
                  {d.name}
                </h4>

                <p className="text-sm text-gray-600 mb-1">
                  <b>Gram Panchayats Covered:</b> {d.gp}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <b>Training Batches:</b> {d.batch}
                </p>
                <p className="text-sm text-gray-600">
                  <b>Participants Trained:</b> {d.participants}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ================= SECOND DATA BLOCK ================= */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-gray-800 text-center">
            Extended Training Coverage & Large-Scale Impact
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              { name: "Jaipur", gp: 85, batch: 17, participants: 1445 },
              { name: "Churu", gp: 120, batch: 24, participants: 2880 },
              { name: "Chittorgarh", gp: 140, batch: 28, participants: 3920 },
              { name: "Hanumangarh", gp: 269, batch: 98, participants: 26362 },
              { name: "Bharatpur", gp: 400, batch: 245, participants: 98000 },
              { name: "Nagaur", gp: 502, batch: 121, participants: 60742 },
              { name: "Ajmer", gp: 254, batch: 154, participants: 39116 },
              { name: "Barmer", gp: 689, batch: 117, participants: 80613 },
            ].map((d, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow flex justify-between items-center hover:shadow-lg transition">
                <div>
                  <h4 className="text-lg font-semibold text-[#2e7d32]">
                    {d.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {d.gp} GPs • {d.batch} Batches
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-gray-800">
                    {d.participants}
                  </p>
                  <p className="text-xs text-gray-500">Participants</p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ================= IMPACT ================= */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-6 text-[#2e7d32] text-center">
            Outcomes & Early Impact
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-gray-600">

            <div className="space-y-3">
              <p>✔ Significant reduction in water-borne diseases such as diarrhoea, cholera, and typhoid.</p>
              <p>✔ Improved access to safe and clean drinking water for daily household use.</p>
              <p>✔ Decrease in open defecation practices and improved sanitation infrastructure.</p>
              <p>✔ Better nutrition outcomes due to improved hygiene and water quality.</p>
            </div>

            <div className="space-y-3">
              <p>✔ Reduction in healthcare expenses for rural families.</p>
              <p>✔ Enhanced environmental cleanliness and waste management practices.</p>
              <p>✔ Increased dignity, safety, and participation of women in community activities.</p>
              <p>✔ Strengthened community awareness, ownership, and sustainable behavior change.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WashImpactSection;