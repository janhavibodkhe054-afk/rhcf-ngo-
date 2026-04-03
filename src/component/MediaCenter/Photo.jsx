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

  const categories = [
    {
      title: "Education",
      images: [
        { src: "/1.jpeg", title: "Education Drive" },
        { src: "/2.jpeg", title: "School Support" },
        { src: "/3.jpeg", title: "Learning Session" },
      ],
    },
    {
      title: "Health Camp",
      images: [
        { src: "/4.jpeg", title: "Medical Camp" },
        { src: "/5.jpg", title: "Health Checkup" },
      ],
    },
    {
      title: "Women Empowerment",
      images: [
        { src: "/6.jpeg", title: "Women Training" },
        { src: "/7.jpeg", title: "Self Help Group" },
      ],
    },
    {
      title: "Skill Training",
      images: [
        { src: "/8.jpeg", title: "Skill Training" },
        { src: "/9.jpeg", title: "Workshop" },
        { src: "/10.jpeg", title: "Hands-on Training" },
      ],
    },
    {
      title: "Community Support",
      images: [
        { src: "/11.jpeg", title: "Community Help" },
        { src: "/12.jpeg", title: "Village Support" },
        { src: "/13.jpeg", title: "Awareness Program" },
      ],
    },
  ];

  return (
    <section
      id="photo"
      className="relative py-16 px-6 bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className={`text-4xl font-extrabold text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Moments of Impact
        </h2>

        {/* Categories */}
        {categories.map((category, index) => (
          <div key={index} className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2f855a] mb-8 text-center">
              {category.title}
            </h3>

            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
              {category.images.map((item, i) => (
                <div
                  key={i}
                  className={`break-inside-avoid relative overflow-hidden rounded-2xl group transition-all duration-700 shadow-2xl hover:shadow-2xl ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
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