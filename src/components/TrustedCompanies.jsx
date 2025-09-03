import React from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
=======
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
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

<<<<<<< HEAD
  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 3,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

=======
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
<<<<<<< HEAD
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Trusted by Leading Companies
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Filenod is proud to partner with top brands and businesses across the globe.
        </motion.p>

        {/* Logos with animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              animate={floatAnimation}
              className="flex justify-center items-center bg-white rounded-xl shadow-md p-4 group cursor-pointer"
=======
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
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 object-contain opacity-80 group-hover:opacity-100 transition duration-300"
              />
<<<<<<< HEAD
            </motion.div>
          ))}
        </motion.div>
=======
            </div>
          ))}
        </div>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
      </div>
    </section>
  );
}
