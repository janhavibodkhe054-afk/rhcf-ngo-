import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const OurWork = () => {
  const slides = [
    {
      title: "Education Is Important",
      img: "student1.jpeg",
    },
    {
      title: "Every Child Deserves Learning",
      img: "workslide2.jpg",
    },
    {
      title: "Building Futures Through Knowledge",
      img: "workslide3.jpg",
    },
    {
      title: "Education Empowers Communities",
      img: "/school.jpeg",
    },
    {
      title: "From Classroom to Confidence",
      img: "school1.jpeg",
    },
  ];

  const location = useLocation();
  const [current, setCurrent] = useState(0);

  // Hash scroll support
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  // Slider autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full bg-white">
      {/* ================= HERO ================= */}
      <section
  id="education"
  className="relative w-full min-h-[70vh] md:min-h-[85vh] lg:min-h-screen overflow-hidden"
>
  {/* Slides */}
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      {/* IMAGE */}
      <img
        src={slide.img}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TEXT */}
      <div className="relative flex items-center justify-center h-full px-6 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase max-w-5xl leading-tight drop-shadow-2xl">
          {slide.title}
        </h1>
      </div>
    </div>
  ))}

  {/* Dots */}
  <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrent(i)}
        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
          current === i
            ? "bg-white scale-125"
            : "bg-white/50 hover:bg-white/80"
        }`}
      />
    ))}
  </div>

  {/* Left Arrow */}
  <button
    onClick={() =>
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    }
    className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20
               text-white text-2xl md:text-3xl
               bg-black/40 w-9 h-9 md:w-12 md:h-12
               rounded-full flex items-center justify-center
               hover:bg-black/60 transition"
  >
    ‹
  </button>

  {/* Right Arrow */}
  <button
    onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
    className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20
               text-white text-2xl md:text-3xl
               bg-black/40 w-9 h-9 md:w-12 md:h-12
               rounded-full flex items-center justify-center
               hover:bg-black/60 transition"
  >
    ›
  </button>
</section>

      <section className="w-full">

  {/* ===== WHY EDUCATION ===== */}
  <div className="bg-white py-16 sm:py-20 px-6 md:px-12 lg:px-24">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-black mb-6">
        Why Education
      </h2>

      <p className="text-gray-700 text-[15px] sm:text-[16px] md:text-[17px] leading-7 md:leading-8">
        Education is the most powerful tool to break the cycle of poverty,
        inequality, and social exclusion. In Rajasthan, thousands of
        children are still deprived of quality education due to poverty,
        migration, lack of access to schools, poor learning environments,
        and social challenges. Rajasthan Human Care Foundation believes
        that education is not just about literacy—it is about confidence,
        critical thinking, and opportunity. By ensuring access to
        education and continuous learning support, we help children grow
        into responsible individuals capable of shaping their own future
        and contributing positively to society.
      </p>
    </div>
  </div>

  {/* ===== WHAT WE DO ===== */}
  <div className="bg-[#f5f6f8] py-16 sm:py-20 px-6 md:px-12 lg:px-24">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-black mb-6">
        What We Do
      </h2>

      <p className="text-gray-700 text-[15px] sm:text-[16px] md:text-[17px] leading-7 md:leading-8">
        Rajasthan Human Care Foundation’s education initiatives focus on
        empowering underprivileged children by providing access to
        learning, academic support, and a nurturing environment. Our
        programs are designed to address both access and quality gaps in
        education. Our approach includes bridge education for
        out-of-school children, remedial learning support, digital
        literacy, and collaboration with government education systems.
        Through sustained engagement and community participation, we aim
        to ensure that every child not only enrolls in school but stays in
        school, learns effectively, and builds the confidence to pursue a
        brighter future.
      </p>

      {/* Responsive Image */}
      <div className="mt-12 flex justify-center">
        <div className="w-[85%] sm:w-[80%] md:w-full max-w-6xl">
          <img
            src="workdia.webp"
            alt="What We Do"
            className="w-full h-auto  object-contain"
          />
        </div>
      </div>

    </div>
  </div>

</section>

      {/* ================= HEALTH ================= */}
      <section
  id="health"
  className="scroll-mt-[110px] py-16 sm:py-20 px-4 sm:px-6 md:px-10 bg-white"
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8">
      Health Care Program
    </h2>

    <p className="text-gray-700 text-[15px] sm:text-[16px] leading-7 md:leading-8 mb-6">
      Access to basic healthcare continues to remain a major challenge for
      thousands of families living in rural, tribal, and remote regions of
      Rajasthan. Geographic isolation, poverty, lack of awareness, and
      limited medical infrastructure often prevent communities from
      receiving timely and quality healthcare services.
    </p>

    <p className="text-gray-700 text-[15px] sm:text-[16px] leading-7 md:leading-8 mb-6">
      Rajasthan Human Care Foundation’s Health Care Program is designed to
      bridge this gap by focusing on preventive healthcare, early
      diagnosis, and community-based health awareness. Our approach
      ensures that health interventions reach the most vulnerable
      populations in a sustainable and dignified manner.
    </p>

    <p className="text-gray-700 text-[15px] sm:text-[16px] leading-7 md:leading-8 mb-10">
      We believe that healthcare is not limited to treatment alone. True
      well-being comes from awareness, timely support, and access to
      essential services that allow families to lead healthier and more
      secure lives.
    </p>
  </div>

  {/* ===== FULL WIDTH IMAGE WITH TEXT ===== */}
  <div
    className="
      relative w-full
      min-h-[220px] 
      sm:min-h-[280px] 
      md:min-h-[380px] 
      lg:min-h-[450px]
      mb-16
      bg-center bg-cover
      md:bg-fixed
    "
    style={{
      backgroundImage: "url('gallery1.png')",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Text Content */}
    <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
      <h3 className="text-white text-lg sm:text-2xl md:text-4xl font-extrabold max-w-4xl leading-snug uppercase">
        Accessible Healthcare Is the First Step Toward Stronger
        Communities
      </h3>
    </div>
  </div>

  <div className="max-w-6xl mx-auto">
    <p className="text-gray-700 text-[15px] sm:text-[16px] leading-7 md:leading-8 mb-6">
      Our health initiatives place special emphasis on maternal and child
      health, adolescent health, nutrition, sanitation, and disease
      prevention. Through health awareness sessions, we educate families
      about hygiene, immunization, nutrition, menstrual health, and
      preventive care practices.
    </p>

    <p className="text-gray-700 text-[15px] sm:text-[16px] leading-7 md:leading-8 mb-6">
      The foundation organizes regular health check-ups and community
      health camps to identify illnesses at an early stage. We facilitate
      referrals and link beneficiaries with government hospitals and
      public health schemes to ensure continuity of care and access to
      specialized treatment.
    </p>

    <p className="text-gray-700 text-[15px] sm:text-[16px] leading-7 md:leading-8">
      At Rajasthan Human Care Foundation, we believe that healthy
      individuals form the backbone of educated children, productive
      livelihoods, and resilient communities. Our Health Care Program aims
      to reduce preventable suffering and enable families to live
      healthier, more dignified lives.
    </p>
  </div>
</section>
      {/* ================= WOMEN ================= */}
      <section
  id="women"
  className="relative w-full bg-[#f9fafb] overflow-hidden"
>
  {/* ================= HERO IMAGE SECTION ================= */}
  <div className="relative w-full h-[260px] xs:h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]">
    <img
      src="workback.webp"
      alt="Women Empowerment"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-8 md:px-12">
      <div className="max-w-3xl">
        <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight">
          Empowering Women <br /> Transforming Communities
        </h2>

        <p className="text-white/90 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-6 sm:leading-8">
          Empowerment is not a single intervention — it is a journey that
          enables women to build confidence, claim their rights, secure
          livelihoods, and become leaders of change within their families and
          communities.
        </p>
      </div>
    </div>
  </div>

  {/* ================= CONTENT SECTION ================= */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 -mt-12 sm:-mt-16 md:-mt-20">
    <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 md:p-12 lg:p-14">
      <div className="space-y-5 sm:space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-7 md:leading-8">
        <p>
          In underserved communities, women often face layered challenges —
          limited access to education, early marriage, economic dependency,
          poor healthcare, and lack of awareness about their rights. These
          barriers restrict their ability to participate meaningfully in
          social and economic life.
        </p>

        <p>
          Our women empowerment programs are designed to address these
          challenges holistically. We work across education, health,
          livelihood, and social awareness to create an enabling environment
          where women can grow with dignity and confidence.
        </p>

        <p>
          By investing in women, we strengthen families, improve child
          outcomes, and build resilient communities capable of driving
          long-term social change.
        </p>
      </div>
    </div>
  </div>

  {/* ================= EMPOWERMENT STEPS ================= */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 md:pt-24 pb-20">
    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
      Our Empowerment Approach
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
      
      {/* STEP 1 */}
      <div className="bg-white p-5 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
        <div className="text-3xl sm:text-4xl font-extrabold text-gray-300 mb-3">
          01
        </div>
        <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2">
          Awareness & Education
        </h4>
        <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
          Literacy programs, rights awareness, life skills, and financial
          education help women build confidence and informed
          decision-making.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="bg-white p-5 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
        <div className="text-3xl sm:text-4xl font-extrabold text-gray-300 mb-3">
          02
        </div>
        <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2">
          Skill & Livelihood
        </h4>
        <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
          Vocational training, entrepreneurship support, and income
          generation pathways enable economic independence.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="bg-white p-5 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
        <div className="text-3xl sm:text-4xl font-extrabold text-gray-300 mb-3">
          03
        </div>
        <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2">
          Health & Well-being
        </h4>
        <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
          Maternal health, nutrition, sanitation, and mental well-being
          programs ensure healthier lives for women and families.
        </p>
      </div>

      {/* STEP 4 */}
      <div className="bg-white p-5 sm:p-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
        <div className="text-3xl sm:text-4xl font-extrabold text-gray-300 mb-3">
          04
        </div>
        <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2">
          Leadership & Participation
        </h4>
        <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
          Leadership development encourages women to participate in
          community decision-making and become agents of change.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ================= SKILL ================= */}
      <section
  id="skill"
  className="relative w-full bg-[#f7f9f6] overflow-hidden"
>
  {/* ================= DECORATIVE BLURS ================= */}
  <div className="hidden md:block absolute -top-32 -right-32 w-[380px] h-[380px] xl:w-[520px] xl:h-[520px] bg-[#7b9a72]/10 rounded-full blur-3xl"></div>
  <div className="hidden md:block absolute -bottom-40 -left-40 w-[420px] h-[420px] xl:w-[600px] xl:h-[600px] bg-[#a5bfa0]/10 rounded-full blur-3xl"></div>

  {/* ================= HEADER ================= */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20 lg:pt-24">
    <span className="uppercase tracking-[0.2em] sm:tracking-widest text-xs sm:text-sm text-[#6f8f6b]">
      Livelihoods & Self-Reliance
    </span>

    <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#2f3e2f] leading-tight">
      Skill Development <br />
      <span className="text-[#6f8f6b]">
        Building Dignity Through Sustainable Livelihoods
      </span>
    </h2>

    <p className="mt-6 sm:mt-8 max-w-3xl text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-gray-700">
      Skill development is the foundation of economic independence. At
      Rajasthan Human Care Foundation, we equip youth and women with
      practical, income-generating skills that respond to local market
      needs and long-term livelihood opportunities.
    </p>
  </div>

  {/* ================= IMAGE + FLOATING CARD ================= */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-14 sm:mt-16 lg:mt-20">
    <div className="relative rounded-3xl overflow-hidden shadow-lg">
      <img
        src="/img14.jpeg"
        alt="Skill Development Training"
        className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

      {/* Floating Card */}
      <div className="
        absolute 
        bottom-4 left-4 right-4
        sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm
        md:max-w-md
        bg-white/95 backdrop-blur-md 
        rounded-2xl 
        p-4 sm:p-6 md:p-8 
        shadow-xl
      ">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2f3e2f] mb-3">
          From Survival to Self-Reliance
        </h3>

        <p className="text-gray-700 text-sm sm:text-base leading-6 sm:leading-7">
          In rural and semi-urban Rajasthan, lack of employable skills
          often forces families into unstable, low-paid labor. Our skill
          programs create pathways toward stable incomes,
          entrepreneurship, and economic dignity.
        </p>
      </div>
    </div>
  </div>

  {/* ================= LONG FORM CONTENT ================= */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 space-y-8 sm:space-y-10">
    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 md:leading-8">
      We design our training programs after closely studying local
      employment trends, traditional crafts, and emerging opportunities.
      This ensures that beneficiaries do not just receive certificates but
      acquire skills that translate into real income.
    </p>

    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 md:leading-8">
      Training modules are hands-on and practice-oriented, covering both
      technical skills and essential soft skills such as communication,
      time management, financial literacy, and entrepreneurship.
    </p>

    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 md:leading-8">
      Our approach emphasizes confidence building and ownership.
      Participants are encouraged to explore self-employment, cooperative
      enterprises, and local market linkages that allow them to sustain
      livelihoods within their own communities.
    </p>
  </div>

  {/* ================= PROCESS MODEL ================= */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 sm:pb-20 lg:pb-24">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2f3e2f] mb-10 sm:mb-12 text-center">
      Our Skill Development Model
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
      {[
        {
          title: "Community Assessment",
          desc: "Understanding local needs, skills gaps, and employment potential.",
        },
        {
          title: "Hands-On Training",
          desc: "Practical training in tailoring, handicrafts, digital skills, and trades.",
        },
        {
          title: "Mentorship & Support",
          desc: "Guidance, confidence building, and entrepreneurship exposure.",
        },
        {
          title: "Income Generation",
          desc: "Employment linkage or self-employment opportunities.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute -top-4 -left-4 w-9 h-9 bg-[#7b9a72] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
            {i + 1}
          </div>

          <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#2f3e2f] mb-3">
            {item.title}
          </h4>

          <p className="text-gray-700 text-sm sm:text-base leading-6 sm:leading-7">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* ================= IMPACT SECTION ================= */}
  <div className="bg-[#e6ede4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {[
        {
          title: "Youth Employment",
          desc: "Young adults gain employable skills that reduce migration and create local livelihood options.",
        },
        {
          title: "Women-Led Enterprises",
          desc: "Women become income earners through tailoring units, handicrafts, and home-based businesses.",
        },
        {
          title: "Long-Term Stability",
          desc: "Sustainable incomes lead to better education, nutrition, and health outcomes for families.",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <h4 className="text-lg sm:text-xl font-bold text-[#2f3e2f] mb-3">
            {card.title}
          </h4>
          <p className="text-gray-700 text-sm sm:text-base leading-6 sm:leading-7">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* ================= CHILD ================= */}
      <section
  id="child"
  className="relative w-full bg-[#f4f7f3] overflow-hidden"
>
  {/* ===== ATMOSPHERIC BACKGROUND ===== */}
  <div className="absolute inset-0 bg-white"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(170,200,170,0.12),transparent_60%)]"></div>

  {/* ================= INTRO ================= */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 md:pt-28 pb-12 sm:pb-16 md:pb-20">
    <span className="inline-block text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#6f8f6b]">
      Child Welfare
    </span>

    <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#253525] leading-tight max-w-4xl">
      Childhood Should Be a Time of Wonder,
      <br />
      <span className="text-[#6f8f6b]">Not Survival</span>
    </h2>

    <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-gray-700 max-w-3xl">
      Across vulnerable regions of Rajasthan, thousands of children grow
      up too fast — burdened by hunger, unsafe environments, interrupted
      education, and emotional neglect. At Rajasthan Human Care
      Foundation, child welfare is not a program. It is a promise — to
      protect, nurture, and restore dignity to every childhood we touch.
    </p>
  </div>

  {/* ================= IMAGE SECTION ================= */}
  <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px]">
    <img
      src="workgallery.webp"
      alt="Child Welfare"
      className="w-full h-full object-cover grayscale-[20%]"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

    <div className="absolute left-4 sm:left-8 md:left-20 top-1/2 -translate-y-1/2 max-w-xs sm:max-w-md md:max-w-xl">
      <h3 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
        A child’s future is shaped
        <br />
        long before adulthood begins
      </h3>
    </div>
  </div>

  {/* ================= TIMELINE ================= */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16 sm:py-20 md:py-28">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#253525] mb-12 sm:mb-16 md:mb-20 text-center">
      Our Child Welfare Journey
    </h3>

    <div className="relative border-l-2 border-[#9bb39a] ml-3 sm:ml-4 md:ml-2">
      {[
        {
          title: "Identifying Vulnerability",
          text: "Through village visits, school interactions, and community trust-building, we identify children facing malnutrition, neglect, child labor, or early dropout risks.",
        },
        {
          title: "Immediate Protection & Care",
          text: "Children receive nutrition support, health checkups, emotional care, and safe spaces where they are protected from harm and instability.",
        },
        {
          title: "Education Reintegration",
          text: "We bridge learning gaps and reintegrate children into age-appropriate schooling, ensuring continuity and confidence in learning.",
        },
        {
          title: "Long-Term Monitoring",
          text: "Our teams conduct regular follow-ups, counseling, and family engagement to ensure the child remains safe, supported, and progressing.",
        },
      ].map((step, i) => (
        <div key={i} className="relative pl-8 sm:pl-10 md:pl-14 pb-12 sm:pb-16">
          <div className="absolute -left-[9px] top-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#6f8f6b] rounded-full"></div>

          <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#253525] mb-3 sm:mb-4">
            {step.title}
          </h4>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-3xl">
            {step.text}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* ================= PHILOSOPHY ================= */}
  <div className="relative bg-[#e4ece2] py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12">
    <div className="max-w-6xl mx-auto">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#253525] mb-8 sm:mb-10">
        What Child Welfare Means to Us
      </h3>

      <div className="space-y-6 sm:space-y-8 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-gray-700">
        <p>
          Child welfare is not limited to protection from visible harm. It
          is about restoring a sense of safety, belonging, and
          possibility. A nourished child learns better. A protected child
          dreams freely. A supported child grows into a responsible,
          confident adult.
        </p>

        <p>
          Our approach works across the child’s ecosystem — engaging
          parents, schools, healthcare systems, and local governance. We
          do not remove children from communities; we strengthen
          communities so that children can thrive within them.
        </p>

        <p>
          Every intervention is guided by dignity, patience, and long-term
          accountability — because childhood lost can never be replaced.
        </p>
      </div>
    </div>
  </div>
</section>

      <section
        id="community"
        className="relative w-full bg-[#f6f8f5] overflow-hidden"
      >
        {/* ===== SOFT BACKGROUND TEXTURE ===== */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(130,160,130,0.12),transparent_55%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(180,200,180,0.14),transparent_55%)]"></div>

        <div className="relative w-full h-[380px] md:h-[480px]">
          <img
            src="/img13.jpeg"
            alt="Community Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55"></div>

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <p className="text-white text-2xl md:text-4xl font-bold text-center max-w-4xl leading-snug">
              Development becomes sustainable
              <br />
              when the community becomes the owner
            </p>
          </div>
        </div>

        {/* ===== SYSTEM-BUILDING BLOCKS ===== */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-28">
          <h3 className="text-3xl font-bold text-[#243424] mb-20 text-center">
            How We Build Community Systems
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Local Leadership",
                text: "We identify and nurture local leaders, youth volunteers, and women champions who guide collective decision-making and represent community interests.",
              },
              {
                title: "Sanitation & Environment",
                text: "Programs promote hygiene, waste management, clean water access, and environmental responsibility to create healthier living conditions.",
              },
              {
                title: "Participatory Governance",
                text: "Communities are trained to engage with local governance systems, access public schemes, and hold institutions accountable.",
              },
              {
                title: "Collective Ownership",
                text: "Projects are designed so that communities eventually manage schools, water systems, and health initiatives independently.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
              >
                <h4 className="text-xl font-bold text-[#243424] mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-700 leading-7 text-[15px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== LONG-FORM EXPLANATION ===== */}
        <div className="relative bg-[#e3ece2] py-28 px-6 md:px-10">
          <div className="max-w-6xl mx-auto space-y-10 text-gray-700 text-[17px] leading-8">
            <p>
              Community development at Rajasthan Human Care Foundation is a
              long-term commitment. We do not introduce parallel systems;
              instead, we strengthen existing social structures so that
              communities can function independently even after our direct
              involvement reduces.
            </p>

            <p>
              Our teams work closely with village councils, local institutions,
              frontline workers, and informal networks to ensure that
              development is inclusive, culturally sensitive, and aligned with
              local realities.
            </p>

            <p>
              When communities gain confidence in their own capacity to lead,
              plan, and act, development stops being a project — it becomes a
              way of life.
            </p>
          </div>
        </div>

        {/* ===== CLOSING STATEMENT ===== */}
        <div className="py-24 px-6 md:px-10 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-[#243424] max-w-4xl mx-auto leading-snug">
            Sustainable change begins
            <br />
            when communities lead their own future
          </p>
        </div>
      </section>
    </main>
  );
};

export default OurWork;
