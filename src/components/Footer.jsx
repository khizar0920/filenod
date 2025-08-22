import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <img src="/favicon-filenod.png" alt="Filenod Logo" className="h-10" />
              <span className="text-2xl font-bold text-white">Filenod</span>
            </div>
            <p className="text-gray-300 text-sm leading-6">
              Empowering businesses with innovative digital solutions including 
              web development, SEO, hosting, and more.
            </p>
            {/* Social Icons */}
          <div className="flex space-x-5 mt-8 sm:mt-2">
            <a href="#" className="hover:text-white transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-white transition"><Instagram size={18} /></a>
          </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/team" className="hover:text-white transition">Team</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Career</Link></li>
              <li><Link to="/TemplateGallery" className="hover:text-white transition">Template Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/Faqs" className="hover:text-white transition">FAQS</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="/services/website-development"
                  className="hover:text-white transition-colors duration-300"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="/services/seo-optimization"
                  className="hover:text-white transition-colors duration-300"
                >
                  SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="/services/mobile-app-development"
                  className="hover:text-white transition-colors duration-300"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="/services/graphic-design"
                  className="hover:text-white transition-colors duration-300"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="/services/hosting-solutions"
                  className="hover:text-white transition-colors duration-300"
                >
                  Hosting Solutions
                </a>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="/terms"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="hover:text-white transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/GDRP"
                  className="hover:text-white transition-colors duration-300"
                >
                  GDPR Compliance
                </a>
              </li>
              
            </ul>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm border-t border-gray-700 pt-6 mt-8">
  {/* Copyright */}
  <p className="text-center sm:text-left">
    © {new Date().getFullYear()} Filenod. All Rights Reserved.
  </p>

  {/* Links */}
  <div className="flex flex-wrap justify-center sm:justify-end space-x-5 mt- sm:mt-0">
    <a
      href="/terms"
      className="hover:text-white transition-colors duration-300"
    >
      Terms & Conditions
    </a>
    <a
      href="/privacy"
      className="hover:text-white transition-colors duration-300"
    >
      Privacy Policy
    </a>
    <a
      href="/cookies"
      className="hover:text-white transition-colors duration-300"
    >
      Cookies Policy
    </a>
  </div>
</div>

      </div>
    </footer>
  );
}
