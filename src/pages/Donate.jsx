import { useState } from "react";
import { Heart, Users, GraduationCap, ShieldCheck } from "lucide-react";

export default function Donate() {
  const [amount, setAmount] = useState(1000);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const presetAmounts = [500, 1000, 2500, 5000];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "916378920544"; // replace with your WhatsApp number

    const text = `New Donation Inquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Donation Amount: ₹${amount}

Message: ${formData.message}
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="w-full bg-gray-50">
      {/* HERO SECTION */}

      <section className="relative h-100 flex items-center justify-center text-center">
        <img
          src="https://www.cry.org/wp-content/themes/cry/images/children-banner.jpg"
          className="absolute inset-0 w-full h-100 object-cover"
          alt="children"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Support Can Change Lives
          </h1>

          <p className="text-lg max-w-2xl mx-auto">
            Every donation helps provide education, healthcare, and hope to
            underprivileged children and families.
          </p>
        </div>
      </section>

      {/* WHY DONATE */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Why Your Donation Matters
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Education */}
            <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <GraduationCap
                className="mx-auto text-green-600 mb-4 transition-transform duration-300 group-hover:scale-110"
                size={40}
              />
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-gray-600">
                Support school education for children.
              </p>
            </div>

            {/* Healthcare */}
            <div className="bg-red-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <Heart
                className="mx-auto text-red-500 mb-4 transition-transform duration-300"
                size={40}
              />
              <h3 className="font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-gray-600">
                Provide medical support to needy families.
              </p>
            </div>

            {/* Community */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <Users
                className="mx-auto text-blue-500 mb-4 transition-transform duration-300"
                size={40}
              />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-gray-600">
                Empower communities with resources.
              </p>
            </div>

            {/* Transparency */}
            <div className="bg-yellow-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <ShieldCheck
                className="mx-auto text-yellow-600 mb-4 transition-transform duration-300"
                size={40}
              />
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">
                Your funds are used responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION FORM */}

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* AMOUNT SECTION */}

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-6">Select Donation Amount</h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setAmount(amt)}
                  className={`py-3 rounded-lg border font-semibold ${
                    amount === amt
                      ? "bg-[#7cb342] text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  ₹ {amt}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Enter custom amount"
              className="w-full border p-3 rounded-lg mb-4"
              onChange={(e) => setAmount(e.target.value)}
            />

            <p className="text-gray-600 text-sm">
              Selected Amount: <span className="font-bold">₹ {amount}</span>
            </p>
          </div>

          {/* DONOR DETAILS */}

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-6">Donor Information</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded-lg"
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Message (Optional)"
                className="w-full border p-3 rounded-lg"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full bg-[#7cb342] text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}

      <section className="relative py-20 text-white text-center overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/b3/89/b8/b389b87c016a10480fa4a540c2124e4d.jpg"
          alt="Donation Impact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-10">Your Donation Impact</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            <div>
              <h3 className="text-4xl font-bold">₹500</h3>
              <p>Provides school supplies for one child</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">₹1000</h3>
              <p>Supports healthcare for a family</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">₹5000</h3>
              <p>Funds education for a child for a month</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}

      <section className="py-16 text-center bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">100% Transparency</h2>

        <p className="max-w-3xl mx-auto text-gray-600">
          We ensure that every rupee donated goes directly towards helping those
          in need. Our programs are monitored and audited to maintain
          transparency and accountability.
        </p>
      </section>
    </div>
  );
}
