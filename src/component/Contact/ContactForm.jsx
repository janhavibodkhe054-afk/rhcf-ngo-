import { motion } from "framer-motion";
import { Home } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* ================= HERO SECTION ================= */}
      {/* ================= HERO SECTION ================= */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center h-160"
          style={{
            backgroundImage: "url('103.jpeg')", // put your image in public folder
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-wide"
          >
            CONTACT US
          </motion.h1>

          <div className="flex items-center gap-3 mt-6 text-sm font-semibold text-gray-200">
            <Home size={16} />
            <span>HOME</span>
            <span className="text-gray-300">›</span>
            <span>PAGES</span>
            <span className="text-gray-300">›</span>
            <span className="text-[#7cb342]">CONTACT US</span>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-lg font-bold tracking-wide mb-3">
                FOR CORPORATE PARTNERSHIPS
              </h3>
              <p className="text-gray-800">6378920544</p>
              <p className="text-gray-600">rhcfoffice@gmail.com</p>
            </div>

            <div>
              <h3 className="text-lg font-bold tracking-wide mb-5">
                DONATION RELATED QUERIES
              </h3>

              <h4 className="font-semibold mb-2">FOR NEW DONORS</h4>

              <p className="text-gray-600 mb-5">rhcfoffice@gmail.com</p>

              <h4 className="font-semibold mb-2">FOR EXISTING DONORS</h4>

              <p className="text-gray-600 mb-5">rhcfoffice@gmail.com</p>

              <h4 className="font-semibold mb-2">FOR ALL GENERAL QUERIES</h4>
              <p className="text-gray-600">rhcfoffice@gmail.com</p>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold tracking-wide mb-4">HELPDESK</h3>
            <p className="text-gray-700 mb-8">
              For any grievance, suggestions and queries kindly write to us.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-400 px-4 py-3 bg-white focus:outline-none focus:border-green-600 transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-400 px-4 py-3 bg-white focus:outline-none focus:border-green-600 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-400 px-4 py-3 bg-white focus:outline-none focus:border-green-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="6"
                  placeholder="Message"
                  className="w-full border border-gray-400 px-4 py-3 bg-white focus:outline-none focus:border-green-600 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#7cb342] hover:bg-green-700 text-white px-8 py-3 font-semibold transition duration-300 transform hover:scale-105"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
