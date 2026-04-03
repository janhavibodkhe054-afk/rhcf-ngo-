import React from "react";

const images = Array.from({ length: 31 }, (_, i) => `/news${i + 1}.jpeg`);

export default function NGOGalleryPage() {
  return (
    <div className="min-h-screen bg-[#f4f8f6] text-[#1a2b24]">
      {/* HEADER */}
      <header className="text-center py-10  bg-white ">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-[#1b4332]">
          NGO IMPACT STORIES
        </h1>
        <p className="text-sm mt-2 text-gray-600">
          Transforming Lives • Building Communities • Creating Hope
        </p>
      </header>

      {/* FEATURED SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <img
          src="/news25.jpeg"
          alt="featured"
          className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
        />
        
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Empowering Communities Through Sustainable Initiatives
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our NGO works across education, healthcare, and women empowerment.
            These moments capture real stories of change and the impact we are
            creating at the grassroots level.
          </p>
          <button className="w-fit px-6 py-2 bg-[#2d6a4f] text-white rounded-full hover:bg-[#1b4332] transition">
            Learn More
          </button>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Our Work in Action
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white"
            >
              <img
                src={src}
                alt={`ngo-${index}`}
                className="w-full object-cover hover:scale-105 transition duration-300"
              />
              <div className="p-3">
                <p className="text-sm font-semibold text-[#1b4332]">
                  Initiative #{index + 1}
                </p>
                <p className="text-xs text-gray-500">
                  Supporting communities through impactful programs.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
