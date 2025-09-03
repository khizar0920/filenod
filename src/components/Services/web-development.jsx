import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Helmet from "@/seo/HelmetConfig";
import Header from "../Header";
import Footer from "../Footer";
import ClientSays from "../ClientSays";


import { FiMonitor, FiCode, FiShoppingCart, FiDatabase, FiLayers, FiRefreshCw, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectsSlider from "./ProjectsSlider";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  { title: "Custom Website Design", desc: "Unique websites tailored to your brand and goals.", icon: <FiMonitor /> },
  { title: "Responsive Development", desc: "Mobile-friendly layouts that look great on all devices.", icon: <FiCode /> },
  { title: "E-Commerce Solutions", desc: "Secure, scalable online stores with smooth UX.", icon: <FiShoppingCart /> },
  { title: "CMS Integration", desc: "WordPress, custom CMS, or headless solutions.", icon: <FiDatabase /> },
  { title: "Landing Pages & Funnels", desc: "Conversion-focused pages to generate leads and sales.", icon: <FiLayers /> },
  { title: "Website Maintenance & Support", desc: "Keep your website updated, fast, and secure.", icon: <FiRefreshCw /> },
];

// Projects
const projects = [
  { title: "E-Commerce Platform", desc: "Custom online store for a retail brand with payment integration.", category: "E-Commerce" },
  { title: "Corporate Website", desc: "Professional website for a consultancy firm with CMS.", category: "Corporate" },
  { title: "Education Portal", desc: "Responsive web app for an online learning platform.", category: "Education" },
  { title: "SaaS Dashboard", desc: "Interactive dashboard for analytics SaaS platform.", category: "SaaS" },
  { title: "Healthcare Website", desc: "User-friendly healthcare web app with booking features.", category: "Healthcare" },
  { title: "Food Delivery App", desc: "Web app interface for a food ordering platform.", category: "Food & Delivery" },
];

const WebDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProjects = () => {
    const start = currentSlide * projectsPerSlide;
    return projects.slice(start, start + projectsPerSlide);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides, isAutoPlaying]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Manual navigation pauses auto-scroll temporarily
  const handleManualNavigation = (callback) => {
    setIsAutoPlaying(false);
    callback();
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  return (
    <>
      <Header />
      <Helmet>
        <title>Custom Web Development in Abbottabad | Filenod</title>
        <meta
          name="description"
          content="Filenod builds stunning, high-performance websites and web apps that drive business growth. Get a free web development consultation today."
        />
        <meta
          name="keywords"
          content="Web Development in Abbottabad, Custom Website Design, Responsive Web Development, E-Commerce Solutions, Professional Web Development Company"
        />
      </Helmet>

      <motion.section
        className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-28 px-6 text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/10 animate-pulse"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 animate-pulse"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeUp}>
          Web Development That Drives Real Business Results
        </motion.h1>
        <motion.p className="text-lg max-w-2xl mx-auto mb-8" variants={fadeUp}>
          From concept to launch, Filenod creates websites that attract, engage, and convert visitors into loyal customers.
        </motion.p>
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-white to-gray-100 text-blue-700 font-semibold rounded-full shadow-xl hover:scale-105 transform transition"
          whileHover={{ scale: 1.08 }}
        >
          Get Started Today →
        </motion.button>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-24 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.div className="max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Web Development Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We offer comprehensive web development solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-lg  group  duration-500 border border-gray-100 hover:border-blue-200"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                              className="flex items-center justify-center mb-6 w-16 h-16 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full text-white text-3xl mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg"
                              whileHover={{ rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              {service.icon}
                            </motion.div>

              

              {/* Service Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              
              {/* Hover effect line */}
              <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto group-hover:w-12 transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Development Process Section */}
      <motion.section
        className="py-24 px-6 bg-white text-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
        
        <motion.div className="relative z-10 max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Web Development Process
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We follow a proven methodology to ensure your project's success
          </p>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 -translate-y-1/2 z-0 rounded-full"></div>
          
          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {["Research & Strategy", "Design & Prototyping", "Development & Coding", "Testing & Launch"].map((step, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 group"
                whileHover={{ y: -12, scale: 1.02 }}
                variants={fadeUp}
                custom={i}
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {i + 1}
                </motion.div>
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">{step}</h3>
                <div className="mt-4 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto group-hover:w-8 transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <ProjectsSlider/>

      {/* Testimonials */}
      <ClientSays />
      
      {/* Simple Final CTA */}
      <motion.section
        className="container mx-auto px-6 mt-12 bg-blue-600 text-white py-10 rounded-lg text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">
          Your Website Journey Starts Here
        </h2>
        <p className="text-base mb-5">
          Let's build a stunning online presence your customers will love.
        </p>
        <button className="bg-white text-blue-600 px-5 py-2.5 rounded-md font-medium hover:bg-blue-700 hover:text-white transition">
          Start Your Project →
        </button>
      </motion.section>

      <Footer />
    </>
  );
};

export default WebDevelopment;