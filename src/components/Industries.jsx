import React from "react";
import { Link } from "react-router-dom";
import webDevImg from "/services/f770b62bc8f42a0b66751fe636fc6eb0.jpg";
export default function Industries() {
  const industries = [
    {
      name: "Education Sector",
      desc: "Streamline learning resources, compliance, and teacher onboarding.",
      link: "/industries/education",
      img: webDevImg,
    },
    {
      name: "Healthcare Industry",
      desc: "Access guidelines, training videos, and patient care templates.",
      link: "/industries/healthcare",
      img: webDevImg,
    },
    {
      name: "Construction Sector",
      desc: "Find safety protocols, project guidelines, and portfolio showcases.",
      link: "/industries/construction",
      img: webDevImg,
    },
    {
      name: "Technology & IT",
      desc: "Get development frameworks, code libraries, and deployment strategies.",
      link: "/industries/technology",
      img: webDevImg,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Meta SEO */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          One Window Solution for Industries – Comprehensive & Always Evolving
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We provide a single-window solution for industries, ensuring all your
          sector-specific needs – from compliance to creative assets – are in one
          place. Our platform is continuously updated with new industries and
          resources to meet evolving market demands.
        </p>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={industry.img}
                  alt={industry.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{industry.desc}</p>
                <Link
                  to={industry.link}
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 text-white rounded-2xl shadow-lg p-10 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            Need a custom solution for your industry?
          </h2>
          <p className="mt-3 text-blue-100 text-lg">
            We build tailored strategies and resources to fit your unique
            business needs.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:text-white transition"
          >
            Request Custom Solution →
          </Link>
        </div>
      </div>
    </section>
  );
}
