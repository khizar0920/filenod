import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
