import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const menus = [
    {
      title: "ABOUT US",
      items: [
        { name: "About Us", path: "/about" },
        { name: "Vision & Mission", path: "/vision-mission" },
        { name: "Our Team", path: "/our-team" },
        { name: "Our Journey", path: "/our-journey" },
      ],
    },
    {
      title: "OUR WORK",
      items: [
        { name: "Education", path: "/education" },
        { name: "Health Care Program", path: "/health-care" },
        { name: "Women Empowerment", path: "/women-empowerment" },
        { name: "Skill Development", path: "/skill-development" },
        { name: "Child Welfare", path: "/child-welfare" },
        { name: "Community Development", path: "/community-development" },
      ],
    },
    {
      title: "CAMPAIGNS",
      items: [{ name: "Ongoing Campaigns", path: "/campaigns" }],
    },
    {
      title: "MEDIA CENTRE",
      items: [
        { name: "Our Impact", path: "/impact" },
        { name: "Success Stories", path: "/success-stories" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Photo Gallery", path: "/photo-gallery" },
        { name: "Video Gallery", path: "/video-gallery" },
        { name: "News & Events", path: "/news-events" },
      ],
    },
    {
      title: "RESOURCE CENTER",
      items: [
        { name: "Annual Reports", path: "/reports" },
        { name: "Publications", path: "/publications" },
        { name: "Policies", path: "/policies" },
      ],
    },
  ];

  return (
    <footer className="bg-[#4a4a4a] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= MENU GRID ================= */}
        <div
          className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-5 
                        gap-10"
        >
          {menus.map((menu, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold tracking-wider border-b border-gray-500 pb-2 mb-4">
                {menu.title}
              </h3>

              <ul className="space-y-2 text-sm text-gray-200">
                {menu.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="hover:text-[#8bc34a] transition duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-10"></div>

        {/* ================= BOTTOM SECTION ================= */}
        <div
          className="flex 
                        flex-col 
                        md:flex-col 
                        lg:flex-row 
                        justify-between 
                        items-start 
                        lg:items-center 
                        gap-10"
        >
          {/* Contact Info */}
          <div className="text-sm text-gray-200 max-w-md">
            <h4 className="font-semibold text-white mb-3 text-base">
              Rajasthan Human Care Foundation
            </h4>

            <p className="leading-relaxed">
              21, Champa Nagar, Gurjar ki thadi, New Sanganer Road, Jaipur,
              Rajasthan – 302019
            </p>

            <p className="mt-4">
              Tel: +91-6378920544 <br />
              Email: rhcfoffice@gmail.com
            </p>
          </div>

          {/* Right Side */}
          <div
            className="flex flex-col 
                          items-start 
                          md:items-start 
                          lg:items-end 
                          gap-6 w-full lg:w-auto"
          >
            {/* Button */}
            <Link
              to="/contact"
              className="bg-[#8bc34a] hover:bg-[#7cb342] text-white font-semibold px-6 py-3 rounded-full transition duration-300"
            >
              CONTACT US
            </Link>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube, Instagram, Linkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-black p-3 rounded-full hover:bg-[#8bc34a] transition duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Rajasthan Human Care Foundation. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
