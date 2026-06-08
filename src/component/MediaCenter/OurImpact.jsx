import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const OurImpact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* ================= HERO ================= */}
      <section
        className="relative w-full min-h-[80vh] md:min-h-screen flex items-center"
        data-aos="zoom-in"
      >
        <img
          src="/impactimg1.jpg"
          alt="Impact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/85 via-black/60 to-black/20"></div>

        <div
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white mb-6 max-w-4xl">
            Transforming Rural Lives Through Access to Water
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Water is not just a necessity — it is dignity, health, and
            opportunity. Through our continuous efforts, thousands of families
            are now living healthier, safer, and more empowered lives.
          </p>
        </div>
      </section>

      {/* ================= IMPACT STORY ================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-8">
            A Movement That Changed Everyday Life
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
            For decades, access to clean drinking water remained a daily
            struggle for rural communities. Women walked miles carrying heavy
            pots, children missed school, and families suffered from preventable
            diseases caused by unsafe water sources.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
            Today, that reality is changing. With the implementation of
            sustainable water systems, households now receive safe and reliable
            water directly at their doorstep. This transformation is not just
            physical — it is deeply social and economic.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Time once spent collecting water is now invested in education,
            livelihoods, and community growth. What started as a basic need has
            become a powerful force for development.
          </p>
        </div>
      </section>

      {/* ================= DEEP IMPACT ================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
              Beyond Water: A Ripple Effect of Change
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              The impact of clean water extends far beyond hydration. It
              directly improves public health by reducing waterborne diseases,
              ensuring that families no longer live in constant fear of illness.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              Women, once burdened with hours of daily water collection, now
              have the freedom to participate in self-help groups, start small
              businesses, and contribute economically to their households.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Children benefit the most — with improved health and more time,
              school attendance has increased significantly, opening doors to a
              brighter future.
            </p>
          </div>

          <img
            src="/imactbg.jpg"
            alt="Water Impact"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            data-aos="zoom-in"
          />
        </div>
      </section>

      {/* ================= HUMAN STORY ================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <img
            src="/impactimg3.jpg"
            alt="Community Story"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl order-1"
            data-aos="zoom-in"
          />

          <div className="order-2" data-aos="fade-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
              A Story of Dignity Restored
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              In villages like Bela and Sunaura, daily life once revolved around
              the search for water. Women would wake before sunrise, walking
              long distances under harsh conditions, often compromising their
              health and safety.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              Today, that burden has been lifted. With clean water available at
              home, families are healthier, children attend school regularly,
              and women have reclaimed their time and dignity.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              These are not just improvements — they are life-changing
              transformations that redefine what is possible for entire
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY VOICE ================= */}
      <section
        className="relative py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/04/85/19/79/360_F_485197985_WvYk76tNcmHcjW1Nvhbfk6pDWreeVFi2.jpg')",
        }}
        data-aos="zoom-in"
      >
        <div className="absolute inset-0 bg-white/75"></div>

        <div
          className="relative z-10 max-w-4xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8">
            Voices That Inspire Our Work
          </h2>

          <div className="space-y-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed italic">
              “Our children are healthier, and we no longer worry about unsafe
              water. This change has brought peace and stability into our lives.”
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed italic">
              “For the first time, I can focus on earning and supporting my
              family. Access to water has given me independence.”
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed italic">
              “This is more than a facility — it is a new beginning for our
              village.”
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-16 bg-gray-100 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Be a Part of This Transformation
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
            Every contribution helps bring clean water to another family,
            another village, and another future. Join us in building a world
            where access to water is not a privilege, but a basic human right.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-[#7cb342] hover:bg-[#6ca036] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurImpact;