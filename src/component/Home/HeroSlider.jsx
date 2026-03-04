import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/img1.jpeg",
    whiteText: "BRINGING SMILES",
    greenText: "THROUGH EDUCATION & EMPOWERMENT",
  },
  {
    id: 2,
    image: "/img7.jpeg",
    whiteText: "EMPOWERING CHILDREN",
    greenText: "WITH QUALITY EDUCATION",
  },
  {
    id: 3,
    image: "/img10.jpeg",
    whiteText: "SUPPORTING DREAMS",
    greenText: "BUILDING BRIGHT FUTURES",
  },
  {
    id: 4,
    image: "/img4.jpeg",
    whiteText: "SPREADING HOPE",
    greenText: "THROUGH COMMUNITY CARE",
  },
  {
    id: 5,
    image: "/img5.jpeg",
    whiteText: "CREATING IMPACT",
    greenText: "FOR GENERATIONS TO COME",
  },
];

export default function HeroSlider() {
const navigate = useNavigate();

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full 
              h-[70vh] 
              sm:h-[75vh] 
              md:h-[85vh] 
              lg:h-screen">

              {/* Background Image */}
              <img
                src={slide.image}
                alt="hero"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay for better readability */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center h-full">
                <div className="w-full px-4 sm:px-6 lg:px-10">
                  
                  {/* Responsive Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    
                    {/* Empty column for desktop spacing */}
                    <div className="hidden md:block"></div>

                    {/* Text Content */}
                    <div className="text-center md:text-left">

                      <h1 className="uppercase font-bold leading-tight tracking-wide">

                        {/* White Text */}
                        <span className="
                          block text-white
                          text-xl 
                          sm:text-2xl 
                          md:text-3xl 
                          lg:text-4xl 
                          xl:text-5xl
                        ">
                          {slide.whiteText}
                        </span>

                        {/* Green Text */}
                        <span className="
                          block text-[#7cb342]
                          text-2xl 
                          sm:text-3xl 
                          md:text-4xl 
                          lg:text-5xl 
                          xl:text-6xl
                          mt-1 sm:mt-2
                        ">
                          {slide.greenText}
                        </span>

                      </h1>

                      {/* Button */}
                      <button 
                      onClick={() => navigate("/work#education")}
                      className="
                        mt-6 
                        inline-flex 
                        items-center 
                        justify-center
                        gap-2
                        text-white 
                        text-base 
                        sm:text-lg 
                        md:text-xl 
                        font-medium 
                        tracking-wide 
                        hover:gap-4 
                        transition-all 
                        duration-300
                      ">
                        Know More
                        <span className="text-xl sm:text-2xl">›</span>
                      </button>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}