import React, { useEffect, useState } from "react";

const certificates = [
  "/certificate.png",
  "/certificate2.png",
  "/certificate3.png",
  "/certificate4.png",
  "/certificate5.png",
  "/certificate6.png",
  "/certificate7.png",
  "/certificate8.png",
  "/certificate9.png",
  "/certificate10.jpeg",
  "/certificate11.jpeg",
  "/certificate12.jpeg",
  "/certificate13.jpeg",
];

const Certificate = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <div className="py-10 px-4">
      <div className="relative max-w-4xl mx-auto" data-aos="zoom-in">
        {/* Slider */}
        <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {certificates.map((img, index) => (
              <div key={index} className="min-w-full p-6 bg-gray-50">
                <img
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-contain rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#2f855a] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#2f855a] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          ›
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index
                  ? "bg-[#2f855a]"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;