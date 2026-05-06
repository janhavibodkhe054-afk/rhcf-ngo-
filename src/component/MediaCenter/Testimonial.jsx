import React, { useEffect } from "react";
import { Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Meera Devi",
    role: "Farmer, Rajasthan",
    image: "/img5.jpeg",
    text: "Before RHCF introduced rainwater harvesting systems in our village, water scarcity was a yearly struggle. Today our wells remain filled, our crops survive dry seasons, and our farming productivity has improved.",
  },
  {
    name: "Ganesh Sharma",
    role: "Self Help Group Member",
    image: "/impact1.jpeg",
    text: "Through the skill development program, I received training and now run my own business. RHCF gave me independence and dignity.",
  },
  {
    name: "Raj kumar",
    role: "Rural Parent",
    image: "/img6.jpeg",
    text: "The medical camp helped diagnose my child’s issue early. RHCF has become a trusted organization in our community.",
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-[#f5f7f2] overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* IMAGE SIDE */}
        <div data-aos="fade-right" className="relative">
          {/* Main Image */}
          <img
            src="https://media.istockphoto.com/id/537311780/photo/unity-of-indian-children-asia.jpg?s=612x612&w=0&k=20&c=MaI8mTFkStJHG4ZyKXNbynkdSCObejk73qutdW7vS7k="
            alt=""
            className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-10 -right-6 bg-white p-6 rounded-2xl shadow-xl w-64 hidden md:block">
            <p className="text-sm text-gray-600">
              “Empowering communities starts with listening to their stories.”
            </p>
          </div>

          {/* Background Shape */}
          <div className="absolute -z-10 -top-10 -left-10 w-72 h-72 bg-[#7cb342]/20 rounded-full blur-3xl"></div>
        </div>

        {/* TEXT SIDE */}
        <div data-aos="fade-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
            Voices of Change <br />
            <span className="text-[#7cb342]">From Real Communities</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Behind every initiative lies a human story. These voices reflect
            resilience, transformation, and the power of sustainable change
            brought by community-driven efforts.
          </p>

          <div className="flex gap-6">
            <div>
              <h3 className="text-3xl font-bold text-[#0f172a]">500+</h3>
              <p className="text-sm text-gray-500">Families Impacted</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#0f172a]">120+</h3>
              <p className="text-sm text-gray-500">Villages Reached</p>
            </div>
          </div>
        </div>
      </div>
          
      {/* ================= TESTIMONIALS ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* HEADER */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-[#0f172a] mb-6">
            Voices That Reflect Change
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Real experiences from individuals and families whose lives have
            transformed through meaningful initiatives.
          </p>
        </div>

        {/* FEATURED */}
        <div
          data-aos="zoom-in"
          className="relative bg-white/70 backdrop-blur-lg border border-white/40 text-gray-800 rounded-3xl p-12 mb-20 shadow-2xl"
        >
          <Quote className="absolute top-8 left-8 opacity-20" size={80} />

          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mb-10 relative z-10">
            {testimonials[0].text}
          </p>

          <div className="flex items-center gap-4 relative z-10">
            <img
              src={testimonials[0].image}
              className="w-16 h-16 rounded-full object-cover border-2 border-white"
              alt=""
            />
            <div>
              <h4 className="font-bold text-lg">{testimonials[0].name}</h4>
              <p className="text-sm text-gray-800">{testimonials[0].role}</p>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.slice(1).map((t, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative bg-gradient-to-br from-[#e6f4ea] to-white border border-[#7cb342]/20 rounded-3xl p-10 shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >
              <Quote
                className="absolute top-6 right-6 text-[#7cb342]/20"
                size={50}
              />

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                {t.text}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#7cb342]"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <span className="text-sm text-[#7cb342]">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* IMPACT STRIP */}
        <div
          data-aos="fade-up"
          className="mt-24 bg-gradient-to-br from-[#e6f4ea] to-white text-gray-800 rounded-3xl p-12 text-center shadow-lg"
        >
          <p className="text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto">
            Every story reflects the power of collective action and the
            transformation that becomes possible when communities are supported.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
