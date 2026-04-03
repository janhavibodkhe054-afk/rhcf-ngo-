import React from "react";

const storiesData = [
  {
    name: "Rekha Devi",
    location: "Jaitpur, Hathras (Uttar Pradesh)",
    population: "1,126 people • 149 households",
    before:
      "Before the Jal Jeevan Mission, access to drinking water was one of the biggest daily challenges in our village. Women had to wake up before sunrise and walk long distances to fetch water from community hand pumps. Long queues, physical exhaustion, and uncertainty were part of everyday life. Even during illness or extreme weather, there was no alternative. Washing clothes or managing household chores required traveling to rivers or ponds, which became even more dangerous during monsoon seasons due to slippery paths, insects, and snake threats.",
    after:
      "With the introduction of household tap connections, clean and safe drinking water is now available directly within homes. The dependency on distant and unsafe water sources has completely ended.",
    impact:
      "This change has transformed daily life. Women now have time to focus on their families and participate in income-generating activities. Health risks have reduced significantly, children live in a safer environment, and the overall quality of life has improved with dignity and comfort.",
  },
  {
    name: "Neha Raja",
    location: "Andhiyari, Lalitpur",
    population: "1,462 people • 213 households",
    before:
      "Earlier, water scarcity forced women and young girls to walk several kilometers every day to collect water. Conflicts at water collection points were frequent due to limited supply. The water available was often unsafe, leading to repeated illnesses in families and increasing healthcare expenses.",
    after:
      "Today, every household has access to a functional tap water connection that provides safe and reliable drinking water throughout the day.",
    impact:
      "The burden of water collection has been completely eliminated. Women now have the freedom to engage in self-help groups, skill development, and livelihood activities. Families are healthier, children are more consistent in school attendance, and the village environment has become more peaceful and productive.",
  },
  {
    name: "Nisha Sharma",
    location: "Khata Hajampur, Moradabad",
    population: "1,879 people • 298 households",
    before:
      "Unsafe and contaminated water sources were a major cause of illness in the village, especially among children. Families often spent a large portion of their income on medical treatments, and productivity was affected due to poor health.",
    after:
      "With the implementation of clean water supply systems, most households now receive safe drinking water directly at home.",
    impact:
      "Health conditions have improved dramatically. Children are now able to attend school regularly, and families are saving money previously spent on healthcare. The overall well-being of the community has improved, bringing stability and hope for the future.",
  },
];

const Stories = () => {
  return (
    <section className="bg-[#f5f7f2]">

      {/* ================= HERO ================= */}
      <div className="relative h-[550px] w-full">
        <img
          src="https://stmsco.github.io/assets/images/slider/slider.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 to-black/40"></div>

        <div className="absolute bottom-16 left-6 md:left-16 max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Stories of Change Through Water Access
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed">
            Behind every tap connection lies a story of resilience, struggle,
            and transformation. These stories reflect how access to clean water
            is not just a facility, but a life-changing force.
          </p>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Across rural communities, the availability of clean drinking water has
          redefined everyday life. What was once a daily struggle has now become
          a source of stability, health, and opportunity. The following stories
          highlight real experiences of individuals whose lives have been
          transformed through improved water access.
        </p>
      </div>

      {/* ================= STORIES ================= */}
      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-20">

        {storiesData.map((story, index) => (
          <div key={index}>

            {/* NAME */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-[#0f172a]">
                {story.name}
              </h2>
              <p className="text-gray-500 text-sm">
                {story.location} • {story.population}
              </p>
            </div>

            {/* CONTENT */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

              <p>
                <span className="font-semibold text-red-500">Before: </span>
                {story.before}
              </p>

              <p>
                <span className="font-semibold text-blue-500">After: </span>
                {story.after}
              </p>

              <p className="bg-[#eef3e6] p-6 rounded-xl">
                <span className="font-semibold text-[#5f7c3f]">Impact: </span>
                {story.impact}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* ================= QUOTE ================= */}
      <div className="bg-[#0f172a] text-white py-20 px-6 text-center">
        <p className="text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed">
          Access to clean water is not just about survival — it is about dignity,
          opportunity, and a better future for every family.
        </p>
      </div>

    </section>
  );
};

export default Stories;