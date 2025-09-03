import React from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import schoolImg from "/industries/school.jpg";
import restImg from "/industries/restaurant.webp";
import hospitalImg from "/industries/doctor.jpg";
import corporateImg from "/industries/corporate.jpg";
=======
import schoolImg from "/industries/school.jpg";
import restImg from "/industries/rest.jpeg";
import hospitalImg from "/industries/hospital.jpeg";
import corporateImg from "/industries/corporate.jpeg";
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d

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

<<<<<<< HEAD
  // Heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Cards animation
  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95, rotate: 3 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Industry Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Tailored digital strategies for different industries and business needs.
        </motion.p>

        {/* Industry Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -8,
                rotate: -1,
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 },
              }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-blue-600 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={industry.img}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.2, rotate: 2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <span className="absolute top-0 left-[-80%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-12 transform group-hover:left-[120%] transition-all duration-700 ease-in-out"></span>
                </div>
=======
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
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition duration-300">
                  {industry.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{industry.desc}</p>

                {/* Button */}
<<<<<<< HEAD
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 8px 20px rgba(37, 99, 235, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-5 inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300"
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
=======
                <button className="mt-5 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                  Learn More →
                </button>
              </div>
            </div>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          ))}
        </div>
      </div>
    </section>
  );
}
