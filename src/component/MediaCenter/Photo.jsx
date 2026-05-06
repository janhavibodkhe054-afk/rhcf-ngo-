import React, { useEffect, useState } from "react";

const Photo = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("photo");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Categories (UPDATED based on your image)
  const categories = [
    {
      title: "Deep Utsav",
      images: [
        { src: "/deep1.jpeg", title: "Festival Celebration" },
        { src: "/deep2.jpeg", title: "Lighting Diyas" },
        { src: "/deep3.jpeg", title: "Lighting Diyas" },
        { src: "/deep4.jpeg", title: "Lighting Diyas" },
      ],
    },
    {
      title: "Health Camp Photograph",
      images: [
        { src: "/health1.jpeg", title: "Health Checkup" },
        { src: "/health2.jpeg", title: "Medical Camp" },
        { src: "/health3.jpeg", title: "Medical Camp" },
        { src: "/health4.jpeg", title: "Medical Camp" },
        { src: "/health5.jpeg", title: "Medical Camp" },
        { src: "/health6.jpeg", title: "Medical Camp" },
        { src: "/health7.jpeg", title: "Medical Camp" },
        { src: "/health8.jpeg", title: "Medical Camp" },
        { src: "/health9.jpeg", title: "Medical Camp" },
        { src: "/health10.jpeg", title: "Medical Camp" },
        { src: "/health11.jpeg", title: "Medical Camp" },
        { src: "/health12.jpeg", title: "Medical Camp" },
        { src: "/health13.jpeg", title: "Medical Camp" },
        { src: "/health14.jpeg", title: "Medical Camp" },
        { src: "/health15.jpeg", title: "Medical Camp" },

      ],
    },
    {
      title: "Plantation",
      images: [
        { src: "/Picture1.png", title: "Tree Plantation" },
        { src: "/plant1.jpg", title: "Green Drive" },
        { src: "/plant2.jpeg", title: "Green Drive" },
        { src: "/plant4.jpeg", title: "Green Drive" },
        { src: "/plant5.jpg", title: "Green Drive" },
        { src: "/plant6.jpg", title: "Green Drive" },
        { src: "/plant7.jpg", title: "Green Drive" },
        { src: "/plant8.jpg", title: "Green Drive" },
        { src: "/plant9.jpg", title: "Green Drive" },
      ],
    },
    {
      title: "Skill Development (Jal Jeevan Mission)",
      images: [
        { src: "/jjm1.jpeg", title: "Training Session" },
        { src: "/jjm2.jpeg", title: "Skill Workshop" },
        { src: "/jjm3.jpeg", title: "Skill Workshop" },
        { src: "/jjm4.jpeg", title: "Skill Workshop" },
        { src: "/jjm5.jpeg", title: "Skill Workshop" },
        { src: "/jjm6.jpeg", title: "Skill Workshop" },
        { src: "/jjm7.jpeg", title: "Skill Workshop" },
        { src: "/jjm8.jpeg", title: "Skill Workshop" },
        { src: "/jjm9.jpeg", title: "Skill Workshop" },
        { src: "/jjm10.jpeg", title: "Skill Workshop" },
      ],
    },
    {
      title: "Swachh Bharat Mission",
      images: [
        { src: "/sbm1.jpeg", title: "Clean Drive" },
        { src: "/sbm2.jpeg", title: "Awareness Program" },
        { src: "/sbm3.jpeg", title: "Awareness Program" },
        { src: "/sbm4.jpeg", title: "Awareness Program" },
        { src: "/sbm5.jpeg", title: "Awareness Program" },
        { src: "/sbm6.jpeg", title: "Awareness Program" },
        { src: "/sbm7.jpeg", title: "Awareness Program" },
        { src: "/sbm8.jpeg", title: "Awareness Program" },
      ],
    },
    
  ];

  return (
    <section id="photo" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Moments of <span className="text-[#7cb342]">Impact</span>
        </h2>

        {categories.map((category, index) => (
          <div key={index} className="mb-20">

            {/* CATEGORY TITLE */}
            <h3 className="text-2xl font-semibold text-center mb-10 relative inline-block w-full">
              <span className="bg-black text-white px-6 py-2 rounded-full shadow-md">
                {category.title}
              </span>
            </h3>

            {/* GRID */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

              {category.images.map((item, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-xl border-4 border-black"
                >
                  {/* IMAGE */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white text-sm font-semibold text-center px-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photo;