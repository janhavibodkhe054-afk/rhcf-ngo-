import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menus = [
    {
      title: "ABOUT US",
      basePath: "/about",
      items: [
        { name: "About Us", path: "/about#about" },
        { name: "Vision & Mission", path: "/about#vision" },
        { name: "Our Team", path: "/about#team" },
        { name: "Our Journey", path: "/about#journey" },
      ],
    },
    {
      title: "OUR WORK",
      basePath: "/work",
      items: [
        { name: "Education", path: "/work#education" },
        { name: "Health Care Program", path: "/work#health" },
        { name: "Women Empowerment", path: "/work#women" },
        { name: "Skill Development", path: "/work#skill" },
        { name: "Child Welfare", path: "/work#child" },
        { name: "Community Development", path: "/work#community" },
      ],
    },
    {
      title: "CAMPAIGNS",
      basePath: "/camp",
      items: [{ name: "Ongoing Campaigns", path: "/camp" }],
    },
    {
      title: "MEDIA CENTRE",
      basePath: "/media",
      items: [
        { name: "Our Impact", path: "/media#impact" },
        { name: "Success Stories", path: "/media#stories" },
        { name: "Testimonials", path: "/media#testimonials" },
        { name: "Photo Gallery", path: "/media#photo" },
        { name: "News & Events", path: "/media#news" },
      ],
    },
    {
      title: "RESOURCE CENTER",
      basePath: "/center",
      items: [
        { name: "Annual Reports", path: "/center#reports" },
        { name: "Publications", path: "/center#publications" },
        { name: "Policies", path: "/center#policies" },
      ],
    },
    {
      title: "CONTACT US",
      basePath: "/contact",
      path: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 h-[90px]">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-20 md:h-28" />
        </NavLink>

        {/* ================= DESKTOP ================= */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-gray-700">
          {menus.map((menu, index) => {
            const isParentActive = location.pathname.startsWith(menu.basePath);

            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {menu.path ? (
                  <NavLink
                    to={menu.path}
                    className={({ isActive }) =>
                      `transition pb-1 ${
                        isActive
                          ? "text-[#ff6f00] border-b-2 border-[#ff6f00]"
                          : "hover:text-[#7cb342]"
                      }`
                    }
                  >
                    {menu.title}
                  </NavLink>
                ) : (
                  <button
                    className={`flex items-center gap-1 pb-1 transition ${
                      isParentActive
                        ? "text-[#ff6f00] border-b-2 border-[#ff6f00]"
                        : "hover:text-[#7cb342]"
                    }`}
                  >
                    {menu.title}
                    <ChevronDown size={14} />
                  </button>
                )}

                {/* Dropdown */}
                {menu.items && (
                  <div
                    className={`absolute left-0 top-full w-56 bg-white border shadow-xl mt-2 py-2 transition-all duration-200 ${
                      openMenu === index
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {menu.items.map((item, i) => (
                      <NavLink
                        key={i}
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm transition ${
                            isActive
                              ? "bg-[#f1f8e9] text-[#7cb342] font-semibold"
                              : "hover:bg-gray-50 hover:text-[#7cb342]"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Connect Button */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `ml-4 px-5 py-2 rounded-full text-sm transition ${
                isActive
                  ? "bg-[#ff6f00] text-white"
                  : "bg-[#7cb342] text-white hover:bg-[#689f38]"
              }`
            }
          >
            Connect
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE ================= */}
      {/* ================= MOBILE ================= */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
          {menus.map((menu, index) => {
            const isParentActive = location.pathname.startsWith(menu.basePath);

            return (
              <div key={index}>
                {menu.path ? (
                  <NavLink
                    to={menu.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 font-semibold ${
                        isActive ? "text-[#ff6f00]" : ""
                      }`
                    }
                  >
                    {menu.title}
                  </NavLink>
                ) : (
                  <>
                    <button
                      className={`flex justify-between w-full font-semibold py-2 ${
                        isParentActive ? "text-[#ff6f00]" : ""
                      }`}
                      onClick={() =>
                        setOpenMenu(openMenu === index ? null : index)
                      }
                    >
                      {menu.title}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openMenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openMenu === index && (
                      <div className="pl-4 space-y-2">
                        {menu.items.map((item, i) => (
                          <NavLink
                            key={i}
                            to={item.path}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) =>
                              `block text-sm ${
                                isActive
                                  ? "text-[#7cb342] font-semibold"
                                  : "text-gray-600"
                              }`
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}

          {/* ✅ Mobile Connect Button */}
          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center bg-[#7cb342] text-white py-3 rounded-full font-semibold hover:bg-[#689f38] transition"
          >
            Connect
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
