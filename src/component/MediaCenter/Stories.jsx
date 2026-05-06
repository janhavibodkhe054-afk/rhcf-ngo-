import React from "react";

const storiesData = [
  {
    name: "Rekha Devi",
    location: "Jaitpur, Hathras (Uttar Pradesh)",
    population: "1,126 people • 149 households",
    before:
      "Before the Jal Jeevan Mission, accessing drinking water was one of the most difficult parts of daily life. Women had to wake up before sunrise and walk long distances to collect water from hand pumps, often waiting in long queues and returning home physically exhausted.",
    after:
      "Today, every household has access to a functional tap water connection, ensuring clean and safe drinking water is available directly at home throughout the day.",
    impact:
      "This change has brought dignity, safety, and relief to families. Women now have more time for their households and livelihoods, children live in a healthier environment, and the village has witnessed a significant improvement in overall well-being.",
  },

  {
    name: "Neha Raja",
    location: "Andhiyari, Lalitpur",
    population: "1,462 people • 213 households",
    before:
      "Earlier, women and young girls spent several hours every day walking long distances to fetch water. The available water was often unsafe, leading to frequent illnesses and additional healthcare expenses for families.",
    after:
      "With household tap connections now installed, safe and reliable drinking water is available to every family without the need to travel outside the village.",
    impact:
      "The burden of water collection has been completely removed. Women now actively participate in self-help groups and livelihood activities, while children attend school regularly in a healthier and more stable environment.",
  },

  {
    name: "Nisha Sharma",
    location: "Khata Hajampur, Moradabad",
    population: "1,879 people • 298 households",
    before:
      "Unsafe and contaminated water sources were a major cause of recurring illness, especially among children. Families spent a considerable part of their income on medical treatment and recovery.",
    after:
      "The introduction of safe household water supply systems has ensured that clean drinking water now reaches homes directly and consistently.",
    impact:
      "Health conditions have improved significantly, medical expenses have reduced, and families now enjoy a better quality of life with improved hygiene and stability.",
  },

  {
    name: "Krishna Raikwar",
    location: "Taraguwan, Talbehat, Lalitpur",
    population: "2,392 people • 457 households",
    before:
      "Earlier, villagers depended on hand pumps and distant water points that required time, effort, and daily physical labor, especially for women and elderly family members.",
    after:
      "All 457 households are now connected with safe tap water supply, ensuring clean drinking water is available within every home.",
    impact:
      "This initiative has improved hygiene, reduced water-borne diseases, and enhanced the daily living standards of the entire village community.",
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
      <div
        className="relative py-20 px-6 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('https://d1u4oo4rb13yy8.cloudfront.net/article-bfffbueepu-1457429663.jpeg')", // 👉 put your image in public folder
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10">
          <p className="text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed">
            Access to clean water is not just about survival — it is about
            dignity, opportunity, and a better future for every family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stories;