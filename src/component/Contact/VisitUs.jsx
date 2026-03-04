import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const VisitUs = () => {
  const [activeCity, setActiveCity] = useState("Delhi");

  const offices = {
    Delhi: {
      address:
        "101, First Floor Gladdiola Above Kotak Bank, Hanuman Road, Ville Parle East, Mumbai - 400 057",
      phone: "91-22-26104106/07",
      email: "mumbai@smilefoundationindia.org",
    },
    Jaipur: {
      address: "Kolkata Office Address Here",
      phone: "033-00000000",
      email: "kolkata@smilefoundationindia.org",
    },
    Maharashtra: {
      address: "Bengaluru Office Address Here",
      phone: "080-00000000",
      email: "bengaluru@smilefoundationindia.org",
    },
  };

  return (
    <section className="w-full bg-white pt-20">

      {/* Inner Container (content centered) */}
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== VISIT US ===== */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-wide mb-10"
        >
          VISIT US HERE
        </motion.h2>

        {/* ===== HEAD OFFICE ===== */}
        <div className="space-y-4 text-gray-800 mb-14">
          <h3 className="font-bold text-lg">HEAD OFFICE</h3>
          <p>
           21, Champa Nagar, Gurjar ki thadi, New Sanganer Road, Jaipur, Rajasthan, 302019.
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +91-6378920544,
            
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            rhcfoffice@gmail.com
          </p>

          <h4 className="font-bold mt-6">Regd. Office:</h4>
          <p>V-11, Level 1, Green Park Extension, New Delhi – 110016</p>
        </div>

        {/* ===== REGIONAL OFFICES ===== */}
        <h3 className="text-2xl font-bold mb-6">REGIONAL OFFICES</h3>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {Object.keys(offices).map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeCity === city
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-black hover:text-white"
              }`}
            >
              {city.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Cards Container */}
        <motion.div
          key={activeCity}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-10 border border-gray-200 rounded-xl p-10"
        >
          {/* ADDRESS */}
          <div className="relative bg-gray-50 p-10 rounded-xl shadow-sm text-center">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-md">
              <MapPin className="text-green-600" size={22} />
            </div>
            <h4 className="font-bold mt-8 mb-4 tracking-wide">ADDRESS</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {offices[activeCity].address}
            </p>
          </div>

          {/* PHONE */}
          <div className="relative bg-gray-50 p-10 rounded-xl shadow-sm text-center">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-md">
              <Phone className="text-green-600" size={22} />
            </div>
            <h4 className="font-bold mt-8 mb-4 tracking-wide">PHONE</h4>
            <p className="text-gray-700 text-sm">
              {offices[activeCity].phone}
            </p>
          </div>

          {/* EMAIL */}
          <div className="relative bg-gray-50 p-10 rounded-xl shadow-sm text-center">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-md">
              <Mail className="text-green-600" size={22} />
            </div>
            <h4 className="font-bold mt-8 mb-4 tracking-wide">EMAIL</h4>
            <p className="text-gray-700 text-sm break-words">
              {offices[activeCity].email}
            </p>
          </div>
        </motion.div>

      </div>
      <div className="w-full h-[450px] md:h-[550px] pt-20">
    <iframe
            title="Rajasthan Human Care Foundation Location"
            src="https://www.google.com/maps?q=21,Champa+Nagar,Gurjar+ki+Thadi,New+Sanganer+Road,Jaipur,Rajasthan,302019&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
  </div>
    </section>
  );
};

export default VisitUs;