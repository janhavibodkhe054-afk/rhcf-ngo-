import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Droplet, Users, GraduationCap, Leaf } from "lucide-react";

const ImpactandMedia = () => {
  const slides = [
    { title: "Cultivating Hope, Harvesting Dignity", img: "/img4.jpeg" },
    { title: "Transforming Lives Through Education", img: "/img5.jpeg" },
    { title: "Accessible Healthcare For All", img: "/img6.jpeg" },
    { title: "Empowering Women, Strengthening Families", img: "/img7.jpeg" },
  ];

  const location = useLocation();
  const [current, setCurrent] = useState(0);

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

  // Hash Scroll Support
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

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const element = document.getElementById("impact-counter");
        if (element) {
          const position = element.getBoundingClientRect().top;
          if (position < window.innerHeight - 100) {
            setStart(true);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      if (!start) return;

      let startValue = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(startValue));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [start, end]);

    return (
      <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
        {count.toLocaleString()}
        {suffix}
      </h3>
    );
  };

  const images = [
    { src: "/1.jpeg", title: "Education Drive" },
    { src: "/2.jpeg", title: "Health Camp" },
    { src: "/3.jpeg", title: "Women Empowerment" },
    { src: "/4.jpeg", title: "Community Support" },
    { src: "/5.jpg", title: "Tree Plantation" },
    { src: "/6.jpeg", title: "Skill Training" },
    { src: "/7.jpeg", title: "Skill Training" },
    { src: "/8.jpeg", title: "Skill Training" },
    { src: "/9.jpeg", title: "Skill Training" },
    { src: "/10.jpeg", title: "Skill Training" },
    { src: "/11.jpeg", title: "Skill Training" },
    { src: "/12.jpeg", title: "Skill Training" },
    { src: "/13.jpeg", title: "Skill Training" },
    { src: "/14.jpeg", title: "Skill Training" },
    { src: "/15.jpeg", title: "Skill Training" },
    { src: "/16.jpeg", title: "Skill Training" },
    { src: "/17.jpeg", title: "Skill Training" },
    { src: "/18.jpeg", title: "Skill Training" },
    { src: "/19.jpeg", title: "Skill Training" },
    { src: "/20.jpeg", title: "Skill Training" },
    { src: "/21.jpeg", title: "Skill Training" },
    { src: "/22.jpeg", title: "Skill Training" },
    { src: "/23.jpeg", title: "Skill Training" },
    { src: "/24.jpeg", title: "Skill Training" },
    { src: "/25.jpeg", title: "Skill Training" },
    { src: "/26.jpeg", title: "Skill Training" },
    { src: "/27.jpeg", title: "Skill Training" },
    { src: "/28.jpeg", title: "Skill Training" },
    { src: "/29.jpeg", title: "Skill Training" },
    { src: "/30.jpeg", title: "Skill Training" },
    { src: "/31.jpeg", title: "Skill Training" },
    { src: "/32.jpeg", title: "Skill Training" },
    { src: "/33.jpeg", title: "Skill Training" },
    { src: "/34.jpeg", title: "Skill Training" },
    { src: "/35.jpeg", title: "Skill Training" },
    { src: "/36.jpeg", title: "Skill Training" },
    { src: "/37.jpeg", title: "Skill Training" },
    { src: "/38.jpeg", title: "Skill Training" },
    { src: "/39.jpeg", title: "Skill Training" },

  ];
  return (
    <main className="w-full bg-white">
      {/* ================= HERO SLIDER ================= */}
      <section
        id="impact"
        className="relative w-full h-[450px] md:h-[600px] overflow-hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
              <h1 className="text-white text-3xl md:text-5xl font-extrabold uppercase max-w-4xl leading-tight">
                {slide.title}
              </h1>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white text-3xl bg-black/40 w-10 h-10 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white text-3xl bg-black/40 w-10 h-10 rounded-full"
        >
          ›
        </button>
      </section>

      {/* ================= OUR IMPACT ================= */}

      <section id="impact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Impact</h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Rajasthan Human Care Foundation has been consistently working at the
            grassroots level to uplift marginalized communities across
            Rajasthan. Through focused initiatives in education, healthcare,
            women empowerment, and rural development, we have transformed
            thousands of lives and created sustainable change.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-3">
              <Counter end={5000} suffix="+" />
              <p className="text-gray-700 font-medium">
                Children Educated through scholarships, digital literacy, and
                school re-enrollment programs.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-3">
              <Counter end={25000} suffix="+" />
              <p className="text-gray-700 font-medium">
                Patients Treated via free medical camps, health awareness
                drives, and rural clinics.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-3">
              <Counter end={12000} suffix="+" />
              <p className="text-gray-700 font-medium">
                Women Empowered through vocational training, self-help groups,
                and financial independence programs.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-3">
              <Counter end={150} suffix="+" />
              <p className="text-gray-700 font-medium">
                Villages Reached with sanitation, clean water, livelihood and
                rural development initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUCCESS STORIES ================= */}
      <section
        id="stories"
        className="relative py-28 px-6 bg-gradient-to-br from-orange-50 via-white to-yellow-50 overflow-hidden"
      >
        {/* Animated Background Blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Transforming Communities Since 2003
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
              Rajasthan Human Care Foundation is committed to sustainable rural
              development, empowering marginalized communities including women,
              tribal groups, minorities and children through education, water
              conservation, skill building and environmental protection
              initiatives.
            </p>
          </div>

          {/* STORY 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Image */}
            <div className="relative group">
              <img
                src="/img7.jpeg"
                alt="Water & Agriculture"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-full shadow-lg">
                <Droplet className="w-8 h-8 text-orange-500" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-orange-600">
                Water Security & Sustainable Agriculture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Recognized as a Key Resource Centre, RHCF has played a major
                role in rainwater harvesting, soil testing labs, watershed
                development and farmer capacity building programs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through scientific farming techniques and irrigation
                improvements, thousands of farmers have increased productivity
                while conserving natural resources.
              </p>
            </div>
          </div>

          {/* STORY 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-3xl font-bold text-orange-600">
                Women Empowerment & Livelihood
              </h3>
              <p className="text-gray-700 leading-relaxed">
                RHCF strengthens self-help groups, promotes enterprise
                development and provides vocational training to women from rural
                and underprivileged communities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Skill development programs in tailoring, handicrafts and digital
                literacy have enabled thousands of women to achieve financial
                independence and dignity.
              </p>
            </div>

            {/* Image */}
            <div className="relative group order-1 md:order-2">
              <img
                src="/impact1.jpeg"
                alt="Women Empowerment"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
            </div>
          </div>

          {/* STORY 3 */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative group">
              <img
                src="/imapct2.jpeg"
                alt="Education"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-full shadow-lg">
                <GraduationCap className="w-8 h-8 text-orange-500" />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-orange-600">
                Education & Social Justice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                RHCF ensures access to quality education for economically weaker
                children through scholarship support, re-enrollment drives and
                digital literacy campaigns.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The organization works towards reducing socio-economic
                disparities while promoting equality, justice, peace and
                community participation.
              </p>
            </div>
          </div>

          {/* STORY 4 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-3xl font-bold text-orange-600">
                Environmental Conservation & Tree Plantation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                RHCF actively promotes tree plantation drives, soil
                conservation, and sustainable natural resource management
                practices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By mobilizing communities and encouraging participatory
                development, the foundation strengthens village self-governance
                and ecological balance.
              </p>
            </div>

            <div className="relative group order-1 md:order-2">
              <img
                src="https://thumbs.dreamstime.com/b/tree-plantation-drive-world-environment-day-19782137.jpg"
                alt="Environment"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg">
                <Leaf className="w-8 h-8 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="py-28 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-4xl font-extrabold mb-6 text-gray-900">
              Voices From The Community
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Testimonials from beneficiaries and families who experienced
              meaningful change through Rajasthan Human Care Foundation’s
              initiatives.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-500 border-l-4 border-orange-500">
              <p className="text-gray-700 leading-relaxed mb-8">
                Before RHCF introduced rainwater harvesting systems in our
                village, water scarcity was a yearly struggle. Today our wells
                remain filled, our crops survive dry seasons, and our farming
                productivity has improved. The support brought stability and
                confidence to our entire community.
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="/img5.jpeg"
                  alt="Ramesh Meena"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Ramesh Meena</h4>
                  <span className="text-sm text-gray-500">
                    Farmer, Rajasthan
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-500 border-l-4 border-orange-500">
              <p className="text-gray-700 leading-relaxed mb-8">
                Through the skill development program, I received tailoring and
                entrepreneurship training. I now run my own small business and
                contribute to my household income. RHCF didn’t just provide
                training — they gave me independence and dignity.
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="/impact1.jpeg"
                  alt="Meera Devi"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Meera Devi</h4>
                  <span className="text-sm text-gray-500">
                    Self Help Group Member
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-500 border-l-4 border-orange-500">
              <p className="text-gray-700 leading-relaxed mb-8">
                The medical camp organized in our area helped diagnose my
                child’s health issue at an early stage. The doctors were
                attentive and supportive. RHCF’s dedication and transparency
                make them a trusted organization in our community.
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="/img6.jpeg"
                  alt="Sunita Sharma"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Sunita Sharma</h4>
                  <span className="text-sm text-gray-500">Rural Parent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold text-[#7cb342] leading-tight">
            How we, as communities, can{" "}
            <span className="relative inline-block font-bold">
              change the future.
              <span className="absolute left-0 right-0 -bottom-2 h-3 bg-white/60 rounded-full -z-10"></span>
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rajasthan Human Care Foundation is a not-for-profit organization
            transforming the lives of children and families in marginalized
            communities. Through education, healthcare, women empowerment and
            environmental programs, we create sustainable change across
            Rajasthan.
          </p>

          {/* Button */}
          {/* <div className="mt-10">
            <button className="px-10 py-4 bg-[#7cb342] text-white rounded-full text-lg font-medium hover:scale-105 hover:shadow-xl transition duration-300">
              Learn more
            </button>
          </div> */}
        </div>

        {/* Oval Image */}
      </section>

      {/* ================= PHOTO GALLERY ================= */}
      <section
        id="photo"
        className="relative py-28 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        {/* Decorative Blur */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <h2
            className={`text-4xl md:text-4xl font-extrabold text-center mb-20 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Moments of Impact
          </h2>

          {/* Masonry Layout */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {images.map((item, i) => (
              <div
                key={i}
                className={`break-inside-avoid relative overflow-hidden rounded-2xl shadow-xl group transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>

                {/* Floating Glow Border */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-orange-400 transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWS & EVENTS ================= */}
      <section id="news" className="pt-4 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-4xl font-extrabold mb-6">
              News & Field Updates
            </h2>
            <p className="text-gray-600 text-lg">
              Recent developments and ongoing initiatives undertaken by
              Rajasthan Human Care Foundation across rural and urban
              communities.
            </p>
          </div>

          {/* News 1 */}
          <div className="mb-16">
            <p className="text-sm text-orange-600 font-semibold mb-2">
              March 2026 • Village Development Initiative
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Adoption of Villages for Integrated Rural Development
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Rajasthan Human Care Foundation expanded its village adoption
              program to strengthen integrated rural development. The initiative
              focuses on improving sanitation, access to safe drinking water,
              community infrastructure, and local employment generation.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Through participatory planning and community mobilization, local
              stakeholders are actively engaged in decision-making processes to
              ensure sustainable and long-term improvements in quality of life.
            </p>
          </div>

          <hr className="my-16 border-gray-200" />

          {/* News 2 */}
          <div className="mb-16">
            <p className="text-sm text-orange-600 font-semibold mb-2">
              February 2026 • Water & Natural Resource Management
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Rainwater Harvesting & Soil Testing Lab Strengthening
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Recognized as a Key Resource Centre by Jal Shakti Mantralay, RHCF
              intensified its efforts in rainwater harvesting and water
              conservation practices across drought-prone regions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Soil testing laboratory services were strengthened to support
              farmers with scientific agricultural guidance. Farmers received
              training on crop planning, soil health improvement, and efficient
              irrigation methods.
            </p>

            <p className="text-gray-700 leading-relaxed">
              These interventions aim to enhance agricultural productivity while
              promoting sustainable and environmentally responsible farming
              practices.
            </p>
          </div>

          <hr className="my-16 border-gray-200" />

          {/* News 3 */}
          <div className="mb-16">
            <p className="text-sm text-orange-600 font-semibold mb-2">
              January 2026 • Women & Livelihood Development
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Skill Building and Enterprise Promotion for Women
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              RHCF continues to empower women from marginalized and BPL
              communities through structured skill-building programs and
              livelihood training.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Training sessions focus on vocational skills, entrepreneurship,
              financial literacy, and self-help group formation. The initiative
              encourages women to establish small enterprises and become
              financially independent.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The program strengthens community confidence and promotes
              equitable participation in local economic activities.
            </p>
          </div>

          <hr className="my-16 border-gray-200" />

          {/* News 4 */}
          <div>
            <p className="text-sm text-orange-600 font-semibold mb-2">
              Ongoing • Community Health & Environmental Conservation
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Health Camps, Tree Plantation & Community Mobilization
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              RHCF regularly organizes health and sanitation camps to address
              healthcare accessibility gaps in underserved areas. Preventive
              care, awareness drives, and medical consultations are conducted in
              collaboration with local stakeholders.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Environmental conservation initiatives including large-scale tree
              plantation drives are being carried out to promote ecological
              balance and sustainable natural resource management.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Through strong community mobilization efforts, RHCF ensures that
              beneficiaries actively participate in development processes,
              creating ownership and long-term sustainability.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ImpactandMedia;
