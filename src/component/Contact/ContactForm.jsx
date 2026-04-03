import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    const whatsappMessage = `
New Contact Form Message

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}
    `;

    const url = `https://wa.me/916378920544?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");

    // reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* ================= HERO SECTION ================= */}

      <div className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/contactform.png')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 text-white mt-20">
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
            className="grid gap-6"
          >

            {/* Address */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-[#7cb342]">
                Visit Our Office
              </h3>

              <p className="text-gray-700">
                Rajasthan Human Care Foundation
              </p>

              <p className="text-gray-600">
                21, Champa Nagar, Gurjar Ki Thadi,
                New Sanganer Road, Jaipur,
                Rajasthan – 302019
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-[#7cb342]">
                Call Us
              </h3>

              <p className="text-gray-700">
                +91 6378920544
              </p>

              <p className="text-gray-600">
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-[#7cb342]">
                Email Us
              </h3>

              <p className="text-gray-700">
                rhcfoffice@gmail.com
              </p>

              <p className="text-gray-600">
                We usually respond within 24 hours.
              </p>
            </div>

            {/* Donation */}
            <div className="bg-[#7cb342] text-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">
                Support Our Mission
              </h3>

              <p className="mb-4">
                Your donation helps us provide education, healthcare and
                empowerment to underserved communities.
              </p>

              <button className="bg-white text-[#7cb342] font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition">
                Donate Now
              </button>
            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h3 className="text-lg font-bold tracking-wide mb-4">
              HELPDESK
            </h3>

            <p className="text-gray-700 mb-8 text-base sm:text-lg md:text-xl">
              For any grievance, suggestions and queries kindly write to us.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full border border-gray-400 px-4 py-3 bg-white focus:outline-none focus:border-green-600 transition"
                />
              </div>

              {/* Phone + Email */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-400 px-4 py-3 bg-white focus:outline-none focus:border-green-600 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full border border-gray-400 px-4 py-3 bg-white focus:outline-none focus:border-green-600 transition"
                  />
                </div>

              </div>

              {/* Message */}

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="w-full border border-gray-400 px-4 py-3 bg-white focus:outline-none focus:border-green-600 transition"
                ></textarea>
              </div>

              {/* Submit */}

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