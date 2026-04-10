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
        { src: "/school1.jpeg", title: "Education Drive" },
        { src: "/school.jpeg", title: "School Support" },
        { src: "/student1.jpeg", title: "Learning Session" },
      ],
    },
    {
      title: "Health Camp",
      images: [
        { src: "/30.jpeg", title: "Medical Camp" },
        { src: "/34.jpeg", title: "Health Checkup" },
        { src: "/23.jpeg", title: "Health Checkup" },
        { src: "/img14.jpeg", title: "Health Checkup" },
        { src: "/img7.jpeg", title: "Health Checkup" },
        { src: "/88.jpeg", title: "Health Checkup" },
        { src: "/87.jpeg", title: "Health Checkup" },
        { src: "/71.jpeg", title: "Health Checkup" },
      ],
    },
    {
      title: "Women Empowerment",
      images: [
        { src: "/2.jpeg", title: "Women Training" },
        { src: "/4.jpeg", title: "Self Help Group" },
        { src: "/6.jpeg", title: "Self Help Group" },
        { src: "/10.jpeg", title: "Self Help Group" },
        { src: "/13.jpeg", title: "Self Help Group" },
        { src: "/15.jpeg", title: "Self Help Group" },
        { src: "/19.jpeg", title: "Self Help Group" },
        { src: "/22.jpeg", title: "Self Help Group" },
        { src: "/101.jpeg", title: "Self Help Group" },
        { src: "/95.jpeg", title: "Self Help Group" },
        { src: "/90.jpeg", title: "Self Help Group" },
        { src: "/85.jpeg", title: "Self Help Group" },
        { src: "/80.jpeg", title: "Self Help Group" },
        { src: "/77.jpeg", title: "Self Help Group" },
        { src: "/75.jpeg", title: "Self Help Group" },
        { src: "/68.jpeg", title: "Self Help Group" },
        { src: "/69.jpeg", title: "Self Help Group" },
        { src: "/28.jpeg", title: "Self Help Group" },
      ],
    },
    {
      title: "Skill Training",
      images: [
        { src: "/3.jpeg", title: "Skill Training" },
        { src: "/7.jpeg", title: "Workshop" },
        { src: "/10.jpeg", title: "Hands-on Training" },
        { src: "/11.jpeg", title: "Hands-on Training" },
        { src: "/16.jpeg", title: "Hands-on Training" },
        { src: "/17.jpeg", title: "Hands-on Training" },
        { src: "/100.jpeg", title: "Hands-on Training" },
        { src: "/97.jpeg", title: "Hands-on Training" },
        { src: "/93.jpeg", title: "Hands-on Training" },
        { src: "/92.jpeg", title: "Hands-on Training" },
        { src: "/91.jpeg", title: "Hands-on Training" },
        { src: "/25.jpeg", title: "Hands-on Training" },
        { src: "/93.jpeg", title: "Hands-on Training" },
        { src: "/93.jpeg", title: "Hands-on Training" },
        { src: "/93.jpeg", title: "Hands-on Training" },
        { src: "/93.jpeg", title: "Hands-on Training" },
      ],
    },
    {
      title: "Community Support",
      images: [
        { src: "/1.jpeg", title: "Community Help" },
        { src: "/5.jpeg", title: "Village Support" },
        { src: "/9.jpeg", title: "Awareness Program" },
        { src: "/12.jpeg", title: "Awareness Program" },
        { src: "/14.jpeg", title: "Awareness Program" },
        { src: "/18.jpeg", title: "Awareness Program" },
        { src: "/24.jpeg", title: "Awareness Program" },
        { src: "/105.jpeg", title: "Awareness Program" },
        { src: "/104.jpeg", title: "Awareness Program" },
        { src: "/102.jpeg", title: "Awareness Program" },
        { src: "/84.jpeg", title: "Awareness Program" },
        { src: "/79.jpeg", title: "Awareness Program" },
        { src: "/78.jpeg", title: "Awareness Program" },
        { src: "/102.jpeg", title: "Awareness Program" },
        { src: "/102.jpeg", title: "Awareness Program" },
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