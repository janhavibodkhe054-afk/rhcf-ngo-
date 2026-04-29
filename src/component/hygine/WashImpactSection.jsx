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
            through structured training, sanitation awareness, and sustainable water practices.
          </p>
        </div>

        {/* VISION + IMPLEMENTATION */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#2e7d32]">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              We envision a society where all communities have access to safe, 
              protected, and sustainable drinking water and sanitation services, 
              supported by improved hygiene practices and awareness.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#2e7d32]">Implementation Strategy</h3>
            <p className="text-gray-600 leading-relaxed">
              Our WASH training framework focuses on learning, individual performance, 
              and improved program execution. Through Community Approach to Sanitation (CAS), 
              we conduct 1–5 day training programs across Rajasthan to build capacity and 
              sensitize communities toward hygiene and sanitation practices.
            </p>
          </div>
        </div>

        {/* TABLE 1 */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Covered Districts under 5 Days Residential Training Program
          </h3>

          <div className="overflow-x-auto bg-white rounded-xl shadow">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-[#e8f5e9] text-gray-700">
                <tr>
                  <th className="p-3">District</th>
                  <th className="p-3">G.P Covered</th>
                  <th className="p-3">Batches</th>
                  <th className="p-3">Participants</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr><td className="p-3">Dungarpur</td><td className="p-3">353</td><td className="p-3">93</td><td className="p-3">2807</td></tr>
                <tr><td className="p-3">Jodhpur</td><td className="p-3">627</td><td className="p-3">81</td><td className="p-3">2462</td></tr>
                <tr><td className="p-3">Bundi</td><td className="p-3">184</td><td className="p-3">20</td><td className="p-3">614</td></tr>
                <tr><td className="p-3">Sikar</td><td className="p-3">375</td><td className="p-3">64</td><td className="p-3">1934</td></tr>
                <tr><td className="p-3">Bharatpur</td><td className="p-3">400</td><td className="p-3">70</td><td className="p-3">2132</td></tr>
                <tr><td className="p-3">Dausa</td><td className="p-3">284</td><td className="p-3">44</td><td className="p-3">1358</td></tr>
                <tr><td className="p-3">Chittorgarh</td><td className="p-3">299</td><td className="p-3">50</td><td className="p-3">1536</td></tr>
                <tr><td className="p-3">Banswara</td><td className="p-3">417</td><td className="p-3">57</td><td className="p-3">1744</td></tr>
                <tr><td className="p-3">Barmer</td><td className="p-3">686</td><td className="p-3">92</td><td className="p-3">2782</td></tr>
                <tr><td className="p-3">Hanumangarh</td><td className="p-3">269</td><td className="p-3">38</td><td className="p-3">1164</td></tr>
                <tr><td className="p-3">Jaipur</td><td className="p-3">489</td><td className="p-3">57</td><td className="p-3">1738</td></tr>
                <tr><td className="p-3">Ajmer</td><td className="p-3">56</td><td className="p-3">8</td><td className="p-3">254</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLE 2 */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Additional Training Coverage & Impact
          </h3>

          <div className="overflow-x-auto bg-white rounded-xl shadow">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-[#e3f2fd] text-gray-700">
                <tr>
                  <th className="p-3">District</th>
                  <th className="p-3">G.P Covered</th>
                  <th className="p-3">Batches</th>
                  <th className="p-3">Participants</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr><td className="p-3">Jaipur</td><td className="p-3">85</td><td className="p-3">17</td><td className="p-3">1445</td></tr>
                <tr><td className="p-3">Churu</td><td className="p-3">120</td><td className="p-3">24</td><td className="p-3">2880</td></tr>
                <tr><td className="p-3">Chittorgarh</td><td className="p-3">140</td><td className="p-3">28</td><td className="p-3">3920</td></tr>
                <tr><td className="p-3">Hanumangarh</td><td className="p-3">269</td><td className="p-3">98</td><td className="p-3">26362</td></tr>
                <tr><td className="p-3">Bharatpur</td><td className="p-3">400</td><td className="p-3">245</td><td className="p-3">98000</td></tr>
                <tr><td className="p-3">Nagaur</td><td className="p-3">502</td><td className="p-3">121</td><td className="p-3">60742</td></tr>
                <tr><td className="p-3">Ajmer</td><td className="p-3">254</td><td className="p-3">154</td><td className="p-3">39116</td></tr>
                <tr><td className="p-3">Barmer</td><td className="p-3">689</td><td className="p-3">117</td><td className="p-3">80613</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IMPACT */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-6 text-[#2e7d32]">
            Outcomes & Early Impact
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
            <li>✔ Reduced disease burden (diarrhoea, cholera)</li>
            <li>✔ Safer water for drinking and cooking</li>
            <li>✔ Lower open defecation and improved sanitation</li>
            <li>✔ Better nutrition and reduced child mortality</li>
            <li>✔ Lower healthcare costs for rural households</li>
            <li>✔ Improved environmental conditions</li>
            <li>✔ Increased dignity and safety for women</li>
            <li>✔ Stronger community awareness and hygiene practices</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WashImpactSection;