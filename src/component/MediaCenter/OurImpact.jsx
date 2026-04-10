import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const OurImpact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800">
      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] flex items-center"
        data-aos="zoom-in"
      >
        <img
          src="/impactimg1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-black/50 to-transparent"></div>

        <div
          className="relative z-10 max-w-6xl px-6 md:px-16 text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Transforming Rural Lives Through Access to Water
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-gray-200">
            Water is not just a necessity — it is dignity, health, and
            opportunity. Through our continuous efforts, thousands of families
            are now living healthier, safer, and more empowered lives.
          </p>
        </div>
      </section>

      {/* ================= IMPACT STORY ================= */}
      <section className="py-16 sm:py-20 md:py-24 px-6 md:px-16 bg-white">
        <div
          className="max-w-5xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f172a]">
            A Movement That Changed Everyday Life
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            For decades, access to clean drinking water remained a daily
            struggle for rural communities. Women walked miles carrying heavy
            pots, children missed school, and families suffered from preventable
            diseases caused by unsafe water sources.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Today, that reality is changing. With the implementation of
            sustainable water systems, households now receive safe and reliable
            water directly at their doorstep. This transformation is not just
            physical — it is deeply social and economic.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Time once spent collecting water is now invested in education,
            livelihoods, and community growth. What started as a basic need has
            become a powerful force for development.
          </p>
        </div>
      </section>

      {/* ================= DEEP IMPACT ================= */}
      <section className="py-16 sm:py-20 md:py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0f172a]">
              Beyond Water: A Ripple Effect of Change
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              The impact of clean water extends far beyond hydration. It
              directly improves public health by reducing waterborne diseases,
              ensuring that families no longer live in constant fear of illness.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Women, once burdened with hours of daily water collection, now
              have the freedom to participate in self-help groups, start small
              businesses, and contribute economically to their households.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Children benefit the most — with improved health and more time,
              school attendance has increased significantly, opening doors to a
              brighter future.
            </p>
          </div>

          <img
            src="/impactimg2.jpg"
            className="rounded-3xl shadow-xl w-full"
            alt=""
            data-aos="zoom-in"
          />
        </div>
      </section>

      {/* ================= HUMAN STORY ================= */}
      <section className="py-16 sm:py-20 md:py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/impactimg3.jpg"
            className="rounded-3xl shadow-xl w-full"
            alt=""
            data-aos="zoom-in"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0f172a]">
              A Story of Dignity Restored
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              In villages like Bela and Sunaura, daily life once revolved around
              the search for water. Women would wake before sunrise, walking
              long distances under harsh conditions, often compromising their
              health and safety.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Today, that burden has been lifted. With clean water available at
              home, families are healthier, children attend school regularly,
              and women have reclaimed their time and dignity.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              These are not just improvements — they are life-changing
              transformations that redefine what is possible for entire
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY VOICE ================= */}
      <section
        className="relative py-16 sm:py-20 md:py-24 px-6 md:px-16 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/imactbg.jpg')",
        }}
        data-aos="zoom-in"
      >
        <div className="absolute inset-0 bg-white/20"></div>

        <div
          className="relative z-10 max-w-4xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Voices That Inspire Our Work
          </h2>

          <p className="text-lg leading-relaxed text-gray-900 mb-6">
            “Our children are healthier, and we no longer worry about unsafe
            water. This change has brought peace and stability into our lives.”
          </p>

          <p className="text-lg leading-relaxed text-gray-900 mb-6">
            “For the first time, I can focus on earning and supporting my
            family. Access to water has given me independence.”
          </p>

          <p className="text-lg leading-relaxed text-gray-900">
            “This is more than a facility — it is a new beginning for our
            village.”
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="py-16 sm:py-20 px-6 md:px-16 text-center bg-gray-100 text-black"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Be a Part of This Transformation
        </h2>

        <p className="max-w-2xl mx-auto text-lg mb-6">
          Every contribution helps bring clean water to another family, another
          village, and another future. Join us in building a world where access
          to water is not a privilege, but a basic human right.
        </p>

        <button
        onClick={() => navigate("/contact")}
        className="bg-[#7cb342] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
          Get Involved
        </button>
      </section>
    </div>
  );
};

export default OurImpact;