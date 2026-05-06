import React from "react";

const partners = [
  { img: "/doc1.png" },
  { img: "/doc2.png" },
  
  { img: "/doc4.png" },
  { img: "/doc5.png" },
  { img: "/doc6.png" },
  { img: "/doc7.png" },
  { img: "/doc8.png" },
  { img: "/doc9.png" },
  { img: "/doc10.png" },
  { img: "/doc11.png" },
  
  { img: "/doc13.png" },
  { img: "/doc14.png" },
  { img: "/doc15.png" },
  { img: "/doc16.png" },
  { img: "/doc17.png" },
  { img: "/doc18.png" },
  { img: "/doc19.png" },
];

// 👉 split into 2 rows
const half = Math.ceil(partners.length / 2);
const row1 = partners.slice(0, half);
const row2 = partners.slice(half);

const FundingPartners = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white">

      {/* 🔷 BACKGROUND BLOBS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* 🔷 HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Our Funding Partners
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We proudly collaborate with organizations that support our mission
            and help us create meaningful, lasting impact across communities.
          </p>
        </div>

        {/* 🔷 ROW 1 (LEFT → RIGHT) */}
        <div className="relative mb-10">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee gap-12 group-hover:[animation-play-state:paused]">
              {[...row1, ...row1].map((item, index) => (
                <Card key={index} img={item.img} />
              ))}
            </div>
          </div>
        </div>

        {/* 🔷 ROW 2 (RIGHT → LEFT) */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee-reverse gap-12 group-hover:[animation-play-state:paused]">
              {[...row2, ...row2].map((item, index) => (
                <Card key={index} img={item.img} />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* 🔥 ANIMATION */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marqueeReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }

          .animate-marquee-reverse {
            animation: marqueeReverse 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

// 🔷 CARD COMPONENT (clean reuse)
const Card = ({ img }) => {
  return (
    <div
      className="min-w-[220px] h-[150px] flex items-center justify-center 
      bg-white/70 backdrop-blur-lg border border-white/40
      rounded-2xl shadow-lg transition duration-500
      hover:scale-110 hover:-rotate-1
      hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
    >
      <img
        src={img}
        alt="partner"
        className="max-h-28 object-contain"
      />
    </div>
  );
};

export default FundingPartners;