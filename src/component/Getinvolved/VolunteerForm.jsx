import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need prior experience?",
    a: "No prior experience is needed. We welcome anyone with a genuine interest to help. Our team provides guidance, training, and support to get you started comfortably.",
  },
  {
    q: "Is volunteering paid?",
    a: "Volunteering is not a paid role. However, you gain real-world experience, meaningful connections, and the opportunity to create a positive impact in society.",
  },
  {
    q: "How are donations used?",
    a: "Every donation is used transparently for education support, food distribution, healthcare initiatives, and community development programs. We ensure maximum impact for every contribution.",
  },
  {
    q: "Can I volunteer remotely?",
    a: "Yes, absolutely. You can contribute remotely through social media management, technical support, fundraising campaigns, and awareness initiatives.",
  },
  {
    q: "How much time do I need to commit?",
    a: "You can choose a schedule that fits your availability—whether it's weekends, part-time, or full-time involvement. Every contribution matters.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes, active volunteers are recognized with certificates and appreciation for their contribution and commitment.",
  },
  {
    q: "How will I be contacted after applying?",
    a: "Once you submit the form, our team will connect with you directly on WhatsApp to guide you through the next steps and onboarding process.",
  },
];

const VolunteerForm = () => {
  const [active, setActive] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "916378920544"; // replace

    const text = `Hello, I want to join as a volunteer:

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Interest: ${form.interest}
Message: ${form.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`);
  };

  return (
    <section
    id="volunteerform"
    className="bg-gray-100 py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* LEFT: FORM */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Join as a <span className="text-[#7cb342]">Volunteer</span>
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Fill the form below and our team will connect with you instantly on WhatsApp.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 space-y-5 shadow-sm"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#7cb342] outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#7cb342] outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#7cb342] outline-none"
            />

            <select
              name="interest"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-[#7cb342] outline-none"
            >
              <option value="">Select Area of Interest</option>
              <option>Field Work</option>
              <option>Teaching</option>
              <option>Tech Support</option>
              <option>Social Media</option>
            </select>

            <textarea
              name="message"
              rows="3"
              placeholder="Tell us why you want to join (optional)"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#7cb342] outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#7cb342] text-white font-semibold hover:bg-[#6aa12f] transition duration-300 shadow-md hover:shadow-lg"
            >
              Submit & Connect on WhatsApp
            </button>
          </form>
        </div>

        {/* RIGHT: FAQ */}
        <div className="lg:sticky top-20 h-fit">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#7cb342]">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition"
              >
                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`transition ${
                      active === index ? "rotate-180 text-[#7cb342]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4 text-gray-600 text-sm leading-relaxed"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;