import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const certificates = [
  "/certificate1.png",
  
  "/certificate2.png",
  "/certificate10.jpeg",
  "/certificate11.jpeg",
  "/certificate12.jpeg",
  "/certificate13.jpeg",
];

const Certificate = () => {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 3000);

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
    <div className="py-10 px-4 bg-white">
      <div className="relative max-w-4xl mx-auto" data-aos="zoom-in">
        
        {/* Slider */}
        <div className="overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-100">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {certificates.map((img, index) => (
              <div
                key={index}
                className="min-w-full p-5 sm:p-8 bg-gradient-to-b from-gray-50 to-white"
              >
                <div
                  onClick={() => setSelectedImage(img)}
                  className="cursor-pointer group"
                >
                  <img
                    src={img}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-contain rounded-2xl transition duration-300 group-hover:scale-[1.02]"
                  />

                  <p className="text-center text-sm text-gray-500 mt-3">
                    Click to view certificate
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#2f855a] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#2f855a] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          ›
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-[#2f855a] scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* IMAGE POPUP */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:rotate-90 transition"
          >
            <X size={20} />
          </button>

          {/* Full Image */}
          <img
            src={selectedImage}
            alt="Full Certificate"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Certificate;