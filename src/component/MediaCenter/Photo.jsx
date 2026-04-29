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

  // ✅ Your original Jal Jeevan images (UNCHANGED)
  const jalJeevanImages = [
    { src: "/3.jpeg", title: "Education Drive" },
    { src: "/8.jpeg", title: "School Support" },
    { src: "/9.jpeg", title: "Learning Session" },
    { src: "/11.jpeg", title: "Learning Session" },
    { src: "/12.jpeg", title: "Learning Session" },
    { src: "/14.jpeg", title: "Learning Session" },
    { src: "/16.jpeg", title: "Learning Session" },
    { src: "/17.jpeg", title: "Learning Session" },
    { src: "/20.jpeg", title: "Learning Session" },
    { src: "/23.jpeg", title: "Learning Session" },
    { src: "/24.jpeg", title: "Learning Session" },
    { src: "/28.jpeg", title: "Learning Session" },
    { src: "/29.jpeg", title: "Learning Session" },
    { src: "/30.jpeg", title: "Learning Session" },
    { src: "/32.jpeg", title: "Learning Session" },
    { src: "/33.jpeg", title: "Learning Session" },
    { src: "/34.jpeg", title: "Learning Session" },
    { src: "/37.jpeg", title: "Learning Session" },
    { src: "/38.jpeg", title: "Learning Session" },
    { src: "/39.jpeg", title: "Learning Session" },
    { src: "/40.jpeg", title: "Learning Session" },
    { src: "/41.jpeg", title: "Learning Session" },
    { src: "/42.jpeg", title: "Learning Session" },
    { src: "/44.jpeg", title: "Learning Session" },
    { src: "/45.jpeg", title: "Learning Session" },
    { src: "/46.jpeg", title: "Learning Session" },
    { src: "/47.jpeg", title: "Learning Session" },
    { src: "/49.jpeg", title: "Learning Session" },
    { src: "/52.jpeg", title: "Learning Session" },
    { src: "/53.jpeg", title: "Learning Session" },
    { src: "/57.jpeg", title: "Learning Session" },
    { src: "/58.jpeg", title: "Learning Session" },
    { src: "/65.jpeg", title: "Learning Session" },
    { src: "/67.jpeg", title: "Learning Session" },
    { src: "/68.jpeg", title: "Learning Session" },
    { src: "/70.jpeg", title: "Learning Session" },
    { src: "/71.jpeg", title: "Learning Session" },
    { src: "/72.jpeg", title: "Learning Session" },
    { src: "/74.jpeg", title: "Learning Session" },
    { src: "/75.jpeg", title: "Learning Session" },
    { src: "/76.jpeg", title: "Learning Session" },
    { src: "/80.jpeg", title: "Learning Session" },
    { src: "/81.jpeg", title: "Learning Session" },
    { src: "/82.jpeg", title: "Learning Session" },
    { src: "/83.jpeg", title: "Learning Session" },
    { src: "/84.jpeg", title: "Learning Session" },
    { src: "/85.jpeg", title: "Learning Session" },
    { src: "/86.jpeg", title: "Learning Session" },
    { src: "/88.jpeg", title: "Learning Session" },
    { src: "/89.jpeg", title: "Learning Session" },
    { src: "/91.jpeg", title: "Learning Session" },
    { src: "/94.jpeg", title: "Learning Session" },
    { src: "/95.jpeg", title: "Learning Session" },
    { src: "/96.jpeg", title: "Learning Session" },
    { src: "/102.jpeg", title: "Learning Session" },
    { src: "/103.jpeg", title: "Learning Session" },
    { src: "/104.jpeg", title: "Learning Session" },
  ];

  // 🔥 Create a set for fast lookup
  const jalSet = new Set(jalJeevanImages.map((img) => img.src));

  // 🔥 Filter function (remove duplicates from other categories)
  const filterImages = (images) =>
    images.filter((img) => !jalSet.has(img.src));

  const categories = [
    {
      title: "Jal Jeevan Mission",
      images: jalJeevanImages,
    },
    
    {
      title: "Women Empowerment",
      images: filterImages([
        { src: "/2.jpeg", title: "Women Training" },
        { src: "/4.jpeg", title: "Self Help Group" },
        { src: "/6.jpeg", title: "Self Help Group" },
        { src: "/10.jpeg", title: "Self Help Group" },
        { src: "/13.jpeg", title: "Self Help Group" },
      ]),
    },
    
  ];

  return (
    <section id="photo" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Moments of <span className="text-[#7cb342]">Impact</span>
        </h2>

        {categories.map((category, index) => (
          <div key={index} className="mb-20">
            <h3 className="text-2xl font-semibold text-center mb-8">
              {category.title}
            </h3>

            <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
              {category.images.map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  alt={item.title}
                  className="rounded-xl w-full"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photo;