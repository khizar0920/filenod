import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
=======
import { Link as ScrollLink } from "react-scroll";
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
import { Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
<<<<<<< HEAD
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Updated services list
  const services = [
    { name: "Website Development", path: "/services/web-development" },
    { name: "SEO Optimization", path: "/services/seo-optimization" },
    { name: "Mobile App Development", path: "/services/Mobile-App" },
    { name: "Custom Software", path: "/services/Custom-software" },
    { name: "Hosting Solutions", path: "/services/Hosting-solutions" },
    { name: "Graphic Design", path: "/services/Graphic-designing" },
    { name: "Content Writing", path: "/services/Content-writing" },
    { name: "Social Media Management", path: "/services/Social-media-management" },
    { name: "Digital Marketing & PPC", path: "/services/Digital-marketing" },
    { name: "Web Hosting & Domains", path: "/services/Web-hosting-domains" },
  ];

=======
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/favicon-filenod.png" alt="Filenod Logo" className="h-10" />
          <span className="text-2xl font-bold text-gray-800">
            <Link to="/">Filenod</Link>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
<<<<<<< HEAD
          <nav className="flex space-x-8 text-gray-700 font-medium relative">
            <Link to="/" className="hover:text-blue-600">Home</Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className="hover:text-blue-600 flex items-center"
              >
                Services ▾
              </Link>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-8 bg-white shadow-lg rounded-lg w-[500px] py-5 border border-gray-100 transition-all duration-300 ${
                  isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="grid grid-cols-2 gap-4 px-5">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition shadow-sm border border-gray-100 hover:border-blue-200"
                    >
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/industries" className="hover:text-blue-600">Industries</Link>
            <Link to="/compaigns" className="hover:text-blue-600">Campaigns</Link>
            <Link to="/pricings" className="hover:text-blue-600">Pricing</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
=======
          <nav className="flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
            {isHomePage ? (
              <ScrollLink
                to="services"
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                className="cursor-pointer hover:text-blue-600 transition"
              >
                Services
              </ScrollLink>
            ) : (
              <Link to="/#services" className="hover:text-blue-600 transition">
                Services
              </Link>
            )}
            <Link to="/industries" className="hover:text-blue-600">
            Industries
          </Link>

            <Link to="/compaigns" className="hover:text-blue-600">
            Campaigns
          </Link>

            <Link to="/pricings" className="hover:text-blue-600 transition">
              Pricing
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact Us
            </Link>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          </nav>

          {/* Desktop Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <X size={28} className="text-blue-600" />
            ) : (
              <Menu size={28} className="text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
<<<<<<< HEAD
            <Link to="/" onClick={toggleMenu} className="hover:text-blue-600">Home</Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex justify-between items-center w-full text-left hover:text-blue-600"
              >
                Services
                <span>{isServicesOpen ? "▲" : "▼"}</span>
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 grid grid-cols-1 gap-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={toggleMenu}
                      className="block text-gray-600 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/industries" onClick={toggleMenu} className="hover:text-blue-600">Industries</Link>
            <Link to="/compaigns" onClick={toggleMenu} className="hover:text-blue-600">Campaigns</Link>
            <Link to="/pricings" onClick={toggleMenu} className="hover:text-blue-600">Pricing</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-blue-600">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-blue-600">Contact Us</Link>
=======
            <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
            {isHomePage ? (
              <ScrollLink
                to="services"
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-blue-600 transition"
              >
                Services
              </ScrollLink>
            ) : (
              <Link
                to="/#services"
                onClick={toggleMenu}
                className="hover:text-blue-600 transition"
              >
                Services
              </Link>
            )}
            <Link to="/industries" className="hover:text-blue-600">
            Industries
          </Link>
            <Link
              to="/Compaigns"
              onClick={toggleMenu}
              className="hover:text-blue-600 transition"
            >
              Campaigns
            </Link>
            <Link
              to="/pricings"
              onClick={toggleMenu}
              className="hover:text-blue-600 transition"
            >
              Pricing
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact Us
            </Link>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
            <Link
              to="/login"
              onClick={toggleMenu}
              className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={toggleMenu}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
