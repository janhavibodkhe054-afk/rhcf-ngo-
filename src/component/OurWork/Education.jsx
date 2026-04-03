import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  const [counter, setCounter] = useState({
    students: 0,
    schools: 0,
    digital: 0,
    workshops: 0,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => ({
        students: prev.students < 6000 ? prev.students + 60 : 6000,
        schools: prev.schools < 250 ? prev.schools + 3 : 250,
        digital: prev.digital < 3500 ? prev.digital + 35 : 3500,
        workshops: prev.workshops < 1000 ? prev.workshops + 10 : 1000,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full font-sans text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://savioursfoundation.org/wp-content/uploads/2021/03/teach-for-india-1024x576.jpg"
            alt="Education Background"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-[5000ms]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div
          className="relative z-10 text-center px-4 sm:px-6 max-w-4xl"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Empowering Futures Through Education
          </h1>

          <p className="mt-6 text-white text-base sm:text-lg md:text-xl leading-relaxed">
            We provide access to quality learning, mentorship, and skill-building
            programs for children and communities across Rajasthan.
          </p>
        </div>
      </section>

      {/* Split Section */}
      <section className="relative max-w-7xl mx-auto py-14 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        <div
          className="lg:w-1/2 space-y-6 order-2 lg:order-1"
          data-aos="fade-right"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
            Why Education Matters
          </h2>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Education is the cornerstone of social and economic progress. RHCF
            ensures that children from marginalized communities gain literacy,
            critical thinking, and digital skills to navigate the modern world.
          </p>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Our programs combine academic support, life skills, and community
            engagement to create a sustainable learning ecosystem.
          </p>
        </div>

        <div
          className="lg:w-1/2 relative order-1 lg:order-2"
          data-aos="fade-left"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/student1.jpeg"
              alt="Child Learning"
              className="w-full h-[280px] sm:h-[400px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="absolute -top-6 -right-4 sm:-top-10 sm:-right-8 md:-top-12 md:-right-12 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
            <img
              src="https://howyoudoin.wordpress.com/wp-content/uploads/2008/08/tribal_girl.jpg?w=500&h=341"
              alt="Digital Learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-tr from-green-100 to-green-50 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <polygon fill="rgba(255,255,255,0.2)" points="0,0 100,0 100,100" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-center mb-10 sm:mb-12"
            data-aos="fade-up"
          >
            Our Education Initiatives
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Inclusive Learning",
                desc: "Programs for marginalized children to ensure everyone gets an equal chance.",
                img: "https://thumbs.dreamstime.com/b/educational-inclusive-education-icon-educational-inclusive-education-icon-representing-community-learning-351937148.jpg",
              },
              {
                title: "Digital Literacy",
                desc: "Bringing technology and modern skills to rural students.",
                img: "https://static.vecteezy.com/system/resources/thumbnails/046/283/754/small/digital-literacy-and-online-learning-icon-concept-vector.jpg",
              },
              {
                title: "Life Skills & Mentorship",
                desc: "Confidence, leadership, and problem-solving workshops.",
                img: "/icon3.jpg",
              },
              {
                title: "Remedial Support",
                desc: "Helping children catch up academically and thrive in school.",
                img: "https://thumbs.dreamstime.com/b/family-luggage-inside-heart-icon-refugee-support-protection-humanitarian-care-safe-shelter-vector-thin-line-illustration-418542151.jpg",
              },
              {
                title: "Career Guidance",
                desc: "Vocational and higher education awareness programs.",
                img: "https://cdn-icons-png.freepik.com/512/10365/10365395.png",
              },
              {
                title: "Community Engagement",
                desc: "Parents, teachers, and leaders involved in sustainable learning.",
                img: "https://www.shutterstock.com/image-vector/networking-icon-related-marketing-line-600nw-2381032727.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-4"
                />

                <h3 className="text-xl sm:text-2xl font-bold text-[#7cb342] mb-2 text-center">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-center text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter */}
      <section className="max-w-7xl mx-auto py-14 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
        {[
          { value: counter.students, label: "Children Educated" },
          { value: counter.schools, label: "Schools Supported" },
          { value: counter.digital, label: "Digital Skills Trained" },
          { value: counter.workshops, label: "Workshops Conducted" },
        ].map((item, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="bg-green-50 p-5 sm:p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#7cb342]">
              {item.value}+
            </h3>
            <p className="mt-2 text-gray-700 text-sm sm:text-lg">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      {/* Closing */}
      <section
        className="max-w-7xl mx-auto py-14 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
          Every Child, Every Future
        </h2>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          By investing in education, RHCF transforms lives, strengthens
          communities, and creates a generation capable of shaping a sustainable,
          equitable future. Knowledge is empowerment, and every child deserves
          it.
        </p>
      </section>
    </div>
  );
};

export default Education;