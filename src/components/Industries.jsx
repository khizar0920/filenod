import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import webDevImg from "/services/f770b62bc8f42a0b66751fe636fc6eb0.jpg";

=======
import webDevImg from "/services/f770b62bc8f42a0b66751fe636fc6eb0.jpg";
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
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

<<<<<<< HEAD
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
        >
          One Window Solution for Industries
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-14"
        >
          We provide a single-window solution for industries, ensuring all your
          sector-specific needs — from compliance to creative assets — are in
          one place. Our platform is continuously updated with new industries
          and resources to meet evolving market demands.
        </motion.p>
=======
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
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
<<<<<<< HEAD
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-500 overflow-hidden hover:-translate-y-2 border border-gray-200"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={industry.img}
                  alt={industry.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
=======
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
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                  {industry.name}
                </h3>
<<<<<<< HEAD
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {industry.desc}
                </p>
                <Link
                  to={industry.link}
                  className="mt-5 inline-flex items-center gap-1 text-blue-600 font-semibold hover:gap-2 transition-all"
                >
                  View Details <FiArrowRight className="text-lg" />
                </Link>
              </div>
            </motion.div>
=======
                <p className="text-gray-600 mt-2 text-sm">{industry.desc}</p>
                <Link
                  to={industry.link}
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          ))}
        </div>

        {/* CTA Section */}
<<<<<<< HEAD
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-2xl shadow-lg p-10 max-w-3xl mx-auto"
        >
=======
        <div className="mt-16 bg-blue-600 text-white rounded-2xl shadow-lg p-10 max-w-3xl mx-auto">
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          <h2 className="text-2xl md:text-3xl font-bold">
            Need a custom solution for your industry?
          </h2>
          <p className="mt-3 text-blue-100 text-lg">
<<<<<<< HEAD
            We build tailored strategies and resources to fit your unique business needs.
=======
            We build tailored strategies and resources to fit your unique
            business needs.
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:text-white transition"
          >
            Request Custom Solution →
          </Link>
<<<<<<< HEAD
        </motion.div>
      </div>
    </section>
  );
}
=======
        </div>
      </div>
    </section>
  );
}
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
