import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const menus = [
    {
      title: "ABOUT US",
      items: [
        { name: "About Us", path: "/aboutus" },
        { name: "Vision & Mission", path: "/vision" },
        { name: "Our Team", path: "/team" },
        { name: "Our Journey", path: "/journey" },
      ],
    },
    {
      title: "OUR WORK",
      items: [
        { name: "Education", path: "/education" },
        { name: "Health Care Program", path: "/health" },
        { name: "Women Empowerment", path: "/women" },
        { name: "Skill Development", path: "/skill" },
        { name: "Child Welfare", path: "/child" },
        { name: "Community Development", path: "/community" },
      ],
    },
    {
      title: "MEDIA CENTRE",
      items: [
        { name: "Our Impact", path: "/impact" },
        { name: "Success Stories", path: "/stories" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Photo Gallery", path: "/photo" },
      ],
    },
    {
      title: "RESOURCE CENTER",
      items: [
        { name: "Annual Reports", path: "/reports" },
        { name: "Publications", path: "/publications" },
        { name: "Policies", path: "/policies" },
        { name: "Newsletter", path: "/newspaper" }, // ✅ added
      ],
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://facebook.com",
      color: "text-[#1877F2]",
      hoverBg: "hover:bg-[#1877F2]",
    },
    {
      icon: FaInstagram,
      url: "https://instagram.com",
      color: "text-[#E4405F]",
      hoverBg: "hover:bg-[#E4405F]",
    },
    {
      icon: FaLinkedinIn,
      url: "https://linkedin.com",
      color: "text-[#0A66C2]",
      hoverBg: "hover:bg-[#0A66C2]",
    },
    {
      icon: FaXTwitter,
      url: "https://twitter.com",
      color: "text-[#1DA1F2]",
      hoverBg: "hover:bg-[#1DA1F2]",
    },
    {
      icon: FaYoutube,
      url: "https://youtube.com",
      color: "text-[#FF0000]",
      hoverBg: "hover:bg-[#FF0000]",
    },
  ];
  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-12">
          {menus.map((menu, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-sm border-b border-gray-700 pb-1">
                {menu.title}
              </h3>

              <ul className="space-y-2 text-gray-400">
                {menu.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="hover:text-white transition duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CONTACT + CTA */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          {/* LEFT */}
          <div className="space-y-4 text-gray-400 text-sm">
            <h3 className="text-xl font-semibold text-white">
              Rajasthan Human Care Foundation
            </h3>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-gray-500 mt-1" />
              <p>
                21, Champa Nagar, Gurjar Ki Thadi, New Sanganer Road, Jaipur,
                Rajasthan – 302019
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-3">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gray-500" />
                <span>+91-6378920544</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                <span>rhcfoffice@gmail.com</span>
              </div>
            </div>
          </div>

          {/* RIGHT CTA */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-start md:items-end gap-5 shadow-lg">
            <p className="text-gray-400 text-sm md:text-right max-w-sm">
              Join us in making a difference. Your support can transform lives
              and bring hope to communities.
            </p>

            <Link
              to="/donate"
              className="bg-white text-black font-semibold px-7 py-3 rounded-full transition hover:bg-gray-200"
            >
              Donate Now
            </Link>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md ${item.color} ${item.hoverBg} hover:text-white transition-all duration-300 hover:scale-110`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <p>
            © {new Date().getFullYear()} Rajasthan Human Care Foundation. All
            Rights Reserved.
          </p>

          {/* ✅ NEW DESIGN CREDIT */}
          <p className="text-gray-400 text-sm">
            Design & Developed by{" "}
            <span className="text-white font-medium">
              Arraylogic Softwares Pvt. Ltd.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
