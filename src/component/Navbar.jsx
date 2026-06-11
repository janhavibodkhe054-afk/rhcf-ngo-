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
        { name: "About Us", path: "/aboutus" },
        { name: "Vision & Mission", path: "/vision" },
        { name: "Our Team", path: "/team" },
        { name: "Our Journey", path: "/journey" },
        { name: "Technical Strength", path: "/technical" },
      ],
    },

    {
      title: "OUR WORK",
      basePath: "/work",
      items: [
        {
          name: "Wash",
          submenu: [
            {
              name: "Water Sanitation & Hygiene management",
              path: "/hygine",
            },
            {
              name: "Health & hygiene & drinking water management",
              path: "/water",
            },
          ],
        },

        { name: "Agriculture & Live", path: "/agri" },
        { name: "Ground Water", path: "/groundwater" },
        { name: "Skill Development", path: "/skill" },
        { name: "Women Empowerment", path: "/women" },
        { name: "Community Awareness Program", path: "/community" },
        { name: "Education", path: "/education" },
      ],
    },

    {
      title: "MEDIA CENTRE",
      basePath: "/media",
      items: [
        { name: "Our Impact", path: "/impact" },
        { name: "Success Stories", path: "/stories" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Photo Gallery", path: "/photo" },
        { name: "Newsletter", path: "/newspaper" },
      ],
    },

    {
      title: "RESOURCE CENTER",
      basePath: "/center",
      items: [
        { name: "Annual Reports", path: "/reports" },
        { name: "Publications", path: "/publications" },
        { name: "Policies", path: "/policies" },
      ],
    },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md h-[70px]">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 h-full">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3 min-w-[180px]">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 sm:h-14 md:h-16 object-contain"
            />

            <div className="whitespace-nowrap leading-tight">
              <span className="text-sm sm:text-base md:text-lg font-bold text-gray-800">
                Rajasthan Human Care
              </span>

              <span className="text-sm sm:text-base md:text-lg text-gray-800 font-bold block">
                Foundation
              </span>
            </div>
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden xl:flex items-center gap-6 font-semibold text-gray-700">
            {menus.map((menu, index) => {
              const isActive = location.pathname.startsWith(menu.basePath);

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(index)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className={`flex items-center gap-1 ${
                      isActive ? "text-[#7cb342]" : "hover:text-[#7cb342]"
                    }`}
                  >
                    {menu.title}
                    <ChevronDown size={14} />
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className={`absolute left-0 top-full w-[280px] bg-white shadow-xl rounded-xl mt-3 p-3 transition-all ${
                      openMenu === index
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    {menu.items.map((item, i) => (
                      <div key={i} className="relative group">
                        {/* NORMAL MENU */}
                        {!item.submenu ? (
                          <NavLink
                            to={item.path}
                            className="block px-3 py-2 text-sm hover:bg-gray-100 hover:text-[#7cb342]"
                          >
                            {item.name}
                          </NavLink>
                        ) : (
                          <>
                            {/* SUBMENU BUTTON */}
                            <div className="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer rounded-md">
                              {item.name}
                              <ChevronDown size={14} className="-rotate-90" />
                            </div>

                            {/* SIDE DROPDOWN */}
                            <div className="absolute top-0 left-full ml-2 w-[320px] bg-white shadow-xl rounded-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                              {item.submenu.map((sub, subIndex) => (
                                <NavLink
                                  key={subIndex}
                                  to={sub.path}
                                  className="block px-3 py-2 text-sm hover:bg-gray-100 hover:text-[#7cb342] rounded-md"
                                >
                                  {sub.name}
                                </NavLink>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <NavLink to="/get-involved" className="hover:text-[#7cb342]">
              GET INVOLVED
            </NavLink>

            <NavLink to="/contact" className="hover:text-[#7cb342]">
              CONNECT
            </NavLink>

            <NavLink
              to="/donate"
              className="px-2 py-2 rounded-full text-white bg-[#7cb342]"
            >
              DONATE
            </NavLink>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-white z-40 transform transition duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden`}
      >
        <div className="p-6 space-y-5 overflow-y-auto h-full">
          {menus.map((menu, index) => (
            <div key={index}>
              <button
                className="flex justify-between w-full font-semibold py-2"
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
              >
                {menu.title}

                <ChevronDown
                  size={16}
                  className={`transition ${
                    openMenu === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === index && (
                <div className="pl-4 space-y-3">
                  {menu.items.map((item, i) => (
                    <div key={i}>
                      {!item.submenu ? (
                        <NavLink
                          to={item.path}
                          onClick={() => setMobileOpen(false)}
                          className="block text-gray-600 hover:text-[#7cb342]"
                        >
                          {item.name}
                        </NavLink>
                      ) : (
                        <div>
                          <p className="font-semibold text-gray-800 mb-2">
                            {item.name}
                          </p>

                          <div className="pl-4 space-y-2">
                            {item.submenu.map((sub, subIndex) => (
                              <NavLink
                                key={subIndex}
                                to={sub.path}
                                onClick={() => setMobileOpen(false)}
                                className="block text-gray-600 hover:text-[#7cb342]"
                              >
                                {sub.name}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <NavLink
            to="/get-involved"
            onClick={() => setMobileOpen(false)}
            className="block font-semibold"
          >
            GET INVOLVED
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block font-semibold"
          >
            CONNECT
          </NavLink>

          <NavLink
          to="/donate"
            onClick={() => {
              
              setMobileOpen(false);
            }}
            className="block w-full text-center py-3 bg-[#7cb342] text-white rounded-full font-semibold"
          >
            DONATE
          </NavLink>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
