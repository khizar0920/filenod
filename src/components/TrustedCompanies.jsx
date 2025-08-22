import React from "react";
import googleLogo from "/companies/google.png";
import microsoftLogo from "/companies/microsoft.png";
import amazonLogo from "/companies/amazon.png";
import netflixLogo from "/companies/netflex.jpeg";
import adobeLogo from "/companies/adobe.jpeg";
import metaLogo from "/companies/meta.png";

export default function TrustedCompanies() {
  const companies = [
    { name: "Google", logo: googleLogo },
    { name: "Microsoft", logo: microsoftLogo },
    { name: "Amazon", logo: amazonLogo },
    { name: "Netflix", logo: netflixLogo },
    { name: "Adobe", logo: adobeLogo },
    { name: "Meta", logo: metaLogo },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted by Leading Companies
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Filenod is proud to partner with top brands and businesses across the globe.
        </p>

        {/* Logos */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 group"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 object-contain opacity-80 group-hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
