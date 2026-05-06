import React from "react";

const ProgramDetails = () => {
  return (
    <section className="bg-[#f7f7f7] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* 🔷 INTRO */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
          {/* 🔷 TEXT RIGHT */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
              Rajasthan Agriculture Competitiveness Project (RACP)
            </h2>

            <p className="text-sm text-green-600 font-medium mb-4">
              Completed: 2016 – 2020
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              The Rajasthan Agriculture Competitiveness Project (RACP) was
              implemented to enhance agricultural productivity and improve water
              resource management across rural regions of Rajasthan. The project
              focused on strengthening the economic conditions of farmers by
              promoting sustainable agricultural practices, efficient irrigation
              systems, and improved access to markets.
            </p>

            <p className="text-gray-600 leading-relaxed">
              By integrating modern technology with community-based approaches,
              RACP aimed to address key challenges such as water scarcity, low
              productivity, and limited value-chain opportunities. The
              initiative played a crucial role in building resilient farming
              systems while ensuring environmental sustainability and inclusive
              growth.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/108313157/photo/india-farming.jpg?s=612x612&w=0&k=20&c=eIh5qLq3fmUIKfVVzg1GO-aU2cTXCH_6yjf16zMPEK8="
              alt="RACP Project"
              className="w-full h-[320px] object-cover rounded-2xl shadow-lg"
            />

            {/* subtle background shape */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-green-100 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* 🔷 VISION */}
        <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-green-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>

          <p className="text-gray-600 leading-relaxed">
            The vision of the project was to empower farmers by building a
            sustainable, inclusive, and economically viable collective that
            enhances productivity, ensures fair market access, and improves the
            overall livelihoods of its members. It emphasized long-term
            agricultural resilience through better resource utilization,
            community participation, and market integration.
          </p>
        </div>

        {/* 🔷 OBJECTIVES */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Objectives & Strategic Components
          </h3>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 leading-relaxed">
                The project focused on enhancing water-use efficiency by
                promoting on-farm water-saving techniques such as drip
                irrigation, sprinkler systems, rainwater harvesting, and
                improved canal management. These interventions helped in
                reducing water wastage while ensuring optimal utilization of
                available resources.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 leading-relaxed">
                Another key component was crop management and technology
                integration, where farmers were introduced to improved seed
                varieties, precision farming practices, and advanced irrigation
                technologies. Subsidies of up to 90% were provided to encourage
                adoption, making modern techniques accessible and affordable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 leading-relaxed">
                The project also strengthened market linkages and value-chain
                development by fostering farmer producer groups and promoting
                public-private partnerships in agribusiness. It supported the
                establishment of post-harvest infrastructure such as processing
                units and packaging facilities to improve value addition and
                reduce losses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 leading-relaxed">
                Environmental and social sustainability remained central to the
                project’s approach. It ensured that agricultural practices
                aligned with natural resource conservation while incorporating
                social safeguards to protect vulnerable communities, maintaining
                a balanced and inclusive development model.
              </p>
            </div>
          </div>
        </div>

        {/* 🔷 OUTCOMES */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Key Outcomes
          </h3>

          <div className="space-y-8">
            <div className="bg-[#eef7f0] p-6 rounded-xl">
              <p className="text-gray-600 leading-relaxed">
                The project significantly improved irrigation systems through
                financial support and subsidies. Farmers received up to 90%
                subsidy on drip irrigation systems, 60% on sprinkler systems,
                and 86% support for solar pumps, leading to efficient water use
                and reduced dependency on conventional energy.
              </p>
            </div>

            <div className="bg-[#eef7f0] p-6 rounded-xl">
              <p className="text-gray-600 leading-relaxed">
                It promoted crop and farm diversification by encouraging
                cultivation of horticulture, floriculture, spices, and medicinal
                plants. Sustainable agricultural practices such as organic and
                zero-budget natural farming were also supported to improve soil
                health and long-term productivity.
              </p>
            </div>

            <div className="bg-[#eef7f0] p-6 rounded-xl">
              <p className="text-gray-600 leading-relaxed">
                The formation of Farmer Producer Companies (FPCs) strengthened
                farmer collectives and improved market access. These groups
                established processing units such as flour mills and packaging
                centres, enabling aggregation, value addition, and direct
                marketing of produce.
              </p>
            </div>

            <div className="bg-[#eef7f0] p-6 rounded-xl">
              <p className="text-gray-600 leading-relaxed">
                The project also encouraged private sector participation,
                leading to investments in agricultural value chains, joint
                ventures, and development of rural market infrastructure,
                ultimately boosting economic opportunities for farmers.
              </p>
            </div>
          </div>
        </div>

        {/* 🔷 IMPACT */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Project Coverage & Impact
          </h3>

          <p className="text-gray-600 mb-10 max-w-4xl leading-relaxed">
            The Rajasthan Agriculture Competitiveness Project successfully
            expanded across key districts, strengthening agricultural systems
            and improving livelihoods for thousands of farmers. By focusing on
            water efficiency, modern farming practices, and market linkages, the
            project created a measurable and sustainable impact at the
            grassroots level.
          </p>

          {/* COVERAGE BLOCKS */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* JHALAWAR */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-[#7cb342] mb-2">
                Jhalawar District
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                <b>Block:</b> Manoharthana
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <b>Coverage:</b> 28 Gram Panchayats
              </p>
              <p className="text-gray-600 text-sm">
                <b>Beneficiaries:</b> 7,800 Farmers
              </p>
            </div>

            {/* DHOLPUR */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-[#7cb342] mb-2">
                Dholpur District
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                <b>Block:</b> Bari
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <b>Coverage:</b> 35 Gram Panchayats
              </p>
              <p className="text-gray-600 text-sm">
                <b>Beneficiaries:</b> 9,600 Farmers
              </p>
            </div>
          </div>

          {/* TOTAL IMPACT */}
          <div className="bg-[#7cb342] text-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-3">
              Overall Project Reach
            </h4>

            <p className="text-white/90 leading-relaxed">
              The project collectively covered <b>63 Gram Panchayats</b> across
              <b> 2 major blocks</b>, directly benefiting more than
              <b> 17,400 farmers</b>. These interventions significantly enhanced
              agricultural productivity, promoted efficient water usage, and
              improved income stability, contributing to long-term rural
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
