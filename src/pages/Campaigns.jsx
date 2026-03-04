import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Campaigns() {
const navigate = useNavigate();

  return (
    <section id="campaigns" className="w-full overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <div
        className="relative h-[90vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.smilefoundationindia.org/wp-content/uploads/2023/04/6-3-e1682411279977.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Cultivating Hope, Harvesting Dignity
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            Rajasthan Human Care Foundation is a grassroots movement dedicated
            to transforming lives across the desert state. Through education,
            healthcare, and sustainable livelihoods, we convert vulnerability
            into opportunity and poverty into self-reliance.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <button
            onClick={() => navigate("/contact")}
            className="bg-[#7cb342] hover:[#7cb343] px-8 py-4 rounded-full font-semibold transition">
              Support a Campaign
            </button>
            <button
            onClick={() => navigate("/media#impact")}
            className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* ================= CORE CAMPAIGNS ================= */}
      <div className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Transformational Campaigns
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Every campaign is designed to create long-term, sustainable
              change rooted in dignity, equality, and community ownership.
            </p>
          </div>

          <div className="space-y-32">

            {/* Education Campaign */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Shiksha Setu – Education for Every Child
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our goal is to achieve 100% literacy in adopted villages by 2030.
                  Through bridge education centers, school enrollment drives,
                  and solar study lamps for rural students, we ensure that
                  no child’s future is defined by geography or poverty.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We intervene holistically — providing nutritional support,
                  mentorship, and school reintegration for children who
                  dropped out to support their families.
                </p>
                
              </div>

              <div className="bg-gray-100 p-12 rounded-3xl shadow-lg">
                <h4 className="text-5xl font-extrabold text-orange-500 mb-4">
                  2030
                </h4>
                <p className="text-gray-700">
                  Target Year for Complete Literacy in Adopted Villages
                </p>
              </div>
            </div>

            {/* Health Campaign */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-gray-100 p-12 rounded-3xl shadow-lg">
                <h4 className="text-5xl font-extrabold text-orange-500 mb-4">
                  500+
                </h4>
                <p className="text-gray-700">
                  Rural Hamlets Served During Crisis Interventions
                </p>
              </div>

              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-6">
                  Sanjeevani – Mobile Healthcare for All
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our mobile medical interventions reduce maternal and infant
                  mortality in remote regions. From health vans reaching
                  nomadic tribes to telemedicine services during the pandemic,
                  we bring care where infrastructure is absent.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We focus on preventive healthcare, maternal support,
                  vaccinations, and disease awareness programs to build
                  healthier communities.
                </p>
                
              </div>
            </div>

            {/* Women Empowerment */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Women Empowerment & Livelihood Mission
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We aim to train 50,000 women in vocational skills,
                  transforming them into primary breadwinners of their families.
                  From sewing machines to entrepreneurship training,
                  we ignite independence.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our approach replaces dependency with dignity —
                  creating long-term economic stability across generations.
                </p>
                
              </div>

              <div className="bg-gray-100 p-12 rounded-3xl shadow-lg">
                <h4 className="text-5xl font-extrabold text-orange-500 mb-4">
                  50,000
                </h4>
                <p className="text-gray-700">
                  Women to be Skilled Under the Mission
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= JOURNEY HIGHLIGHT ================= */}
      <div className="py-24 px-6 bg-[#7cb342] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          From Drought Relief to Multi-District Impact
        </h2>
        <p className="max-w-4xl mx-auto text-white leading-relaxed">
          What began in 2003 as a drought relief effort distributing dry rations
          has evolved into a multi-district foundation partnering with global
          corporations. From launching mobile health vans in 2008 to providing
          oxygen concentrators during the pandemic, our journey reflects resilience,
          adaptability, and an unwavering commitment to dignity.
        </p>
      </div>

    </section>
  );
}