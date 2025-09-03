import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="bg-gray-200 py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
          Ready to Transform Your Digital Presence?
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Join thousands of businesses that have elevated their online presence with our services.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          {/* Primary Button */}
          <Link
            to="/services"
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Get Started
          </Link>

          {/* Secondary Button */}
          <Link
            to="/contact"
            className="px-8 py-3 rounded-lg bg-white text-blue-600 border-1 border-blue-600 font-semibold text-lg shadow hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
