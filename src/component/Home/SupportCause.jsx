import React from "react";

const SupportCause = () => {
  const causes = [
    {
      title: "SAFE WATER FOR ALL",
      image: "/support1.jpg",
      description:
        "Support clean drinking water access, rainwater harvesting, and village sanitation initiatives under Jal Jeevan Mission for rural communities.",
    },
    {
      title: "FARMER EMPOWERMENT",
      image: "/support2.jpeg",
      description:
        "Help farmers improve productivity through soil testing, modern irrigation, and sustainable agriculture support programs.",
    },
    {
      title: "WOMEN EMPOWERMENT",
      image: "/img2.jpeg",
      description:
        "Empower women through vocational skills, self-reliance programs, and livelihood opportunities that strengthen families and communities.",
    },
    {
      title: "SKILL DEVELOPMENT",
      image: "/img12.jpeg",
      description:
        "Support youth skill training, digital education, and employment-focused programs that create sustainable livelihoods.",
    },
  ];

  return (
    <section className="bg-[#f4f4f4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase mb-12 sm:mb-16 tracking-wide">
          Support Our Mission
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {causes.map((cause, index) => (
            <div key={index} className="group">
              {/* Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-[380px] object-cover transform group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>

                {/* Title */}
                <h3 className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-lg sm:text-xl md:text-2xl font-extrabold uppercase leading-tight pr-4">
                  {cause.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-base sm:text-lg md:text-lg mt-5 leading-relaxed">
                {cause.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportCause;
