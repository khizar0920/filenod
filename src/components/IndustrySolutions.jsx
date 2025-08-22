import React from "react";
import schoolImg from "/industries/school.jpg";
import restImg from "/industries/rest.jpeg";
import hospitalImg from "/industries/hospital.jpeg";
import corporateImg from "/industries/corporate.jpeg";

export default function IndustrySolutions() {
  const industries = [
    {
      title: "School Websites",
      desc: "Digital platforms designed for educational institutions.",
      img: schoolImg,
    },
    {
      title: "Doctor Portfolios",
      desc: "Professional websites for medical practitioners and clinics.",
      img: hospitalImg,
    },
    {
      title: "Restaurant Apps",
      desc: "Digital menus, ordering systems, and reservations for restaurants.",
      img: restImg,
    },
    {
      title: "Corporate Sites",
      desc: "Enterprise-level solutions tailored for large organizations.",
      img: corporateImg,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Industry Solutions
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Tailored digital strategies for different industries and business needs.
        </p>

        {/* Industry Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={industry.img}
                  alt={industry.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition duration-300">
                  {industry.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{industry.desc}</p>

                {/* Button */}
                <button className="mt-5 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
