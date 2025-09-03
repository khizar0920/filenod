import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Helmet from "@/seo/HelmetConfig";
import Header from "../Header";
import Footer from "../Footer";
import ClientSays from "../ClientSays";
import {
  FiServer,
  FiCloud,
  FiShield,
  FiDatabase,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const hostingServices = [
  { title: "Shared Hosting", desc: "Affordable and reliable for small businesses.", icon: <FiServer /> },
  { title: "VPS Hosting", desc: "Flexible and scalable for growing sites.", icon: <FiCloud /> },
  { title: "Dedicated Hosting", desc: "Maximum performance for high-traffic sites.", icon: <FiShield /> },
  { title: "Cloud Hosting", desc: "Scalable and globally accessible.", icon: <FiCloud /> },
  { title: "Managed WordPress Hosting", desc: "Optimized for speed and security.", icon: <FiDatabase /> },
  { title: "Domain Registration", desc: "Secure your brand’s online identity.", icon: <FiSettings /> },
];

export default function HostingSolutions() {
  

  const projects = [
  {
    title: "Managed VPS Hosting",
    desc: "High-performance virtual private servers with 99.9% uptime and full root access.",
    category: "Hosting Solutions",
    image: "https://cdn.pixabay.com/photo/2017/06/06/21/29/server-2375934_1280.jpg",
  },
  {
    title: "Dedicated Server Setup",
    desc: "Secure and optimized dedicated servers for enterprise-level applications.",
    category: "Hosting Solutions",
    image: "https://cdn.pixabay.com/photo/2015/05/31/12/14/server-791205_1280.jpg",
  },
  {
    title: "Cloud Hosting Dashboard",
    desc: "Custom cloud resource management and automated scaling solutions.",
    category: "Cloud Solutions",
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/cloud-1867584_1280.jpg",
  },
  {
    title: "Domain Registration System",
    desc: "Seamless domain search, registration, and management platform.",
    category: "Hosting Solutions",
    image: "https://cdn.pixabay.com/photo/2017/03/07/20/15/internet-2123160_1280.jpg",
  },
  {
    title: "Reseller Hosting Platform",
    desc: "Multi-tenant hosting platform for resellers with white-label solutions.",
    category: "Hosting Solutions",
    image: "https://cdn.pixabay.com/photo/2017/06/07/04/21/server-2375935_1280.jpg",
  },
  {
    title: "Website Migration Tool",
    desc: "Fast and secure migration of websites and applications to new servers.",
    category: "Hosting Solutions",
    image: "https://cdn.pixabay.com/photo/2016/03/09/15/15/cloud-1245783_1280.jpg",
  },
];



   const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
    const projectsPerSlide = 3;
    const totalSlides = Math.ceil(projects.length / projectsPerSlide);
  
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  
    useEffect(() => {
      if (!isAutoPlaying) return;
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
      return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);
  
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);
  

  return (
    <>
      <Helmet>
        <title>Reliable Web Hosting in [Region] | Filenod Hosting Solutions</title>
        <meta
          name="description"
          content="Enjoy fast, secure, and scalable hosting for your website or app. Filenod offers managed hosting with 99.9% uptime and expert support."
        />
        <meta
          name="keywords"
          content="Web Hosting in [Region], Secure & Reliable Hosting Services, Business Website Hosting Solutions"
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-28 px-6 text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeUp}>
          Hosting Solutions Built for Speed, Security, and Scalability
        </motion.h1>
        <motion.p className="text-lg max-w-2xl mx-auto mb-8" variants={fadeUp}>
          Keep your website running smoothly 24/7 with Filenod’s managed hosting services.
        </motion.p>
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-white to-gray-100 text-blue-700 font-semibold rounded-full shadow-xl hover:scale-105 transform transition"
          whileHover={{ scale: 1.08 }}
        >
          Get Started Today →
        </motion.button>
      </motion.section>

      {/* Hosting Services Section */}
      <motion.section className="py-24 px-6 bg-gray-50 text-center">
        <motion.h2 className="text-3xl font-bold text-gray-800 mb-14" variants={fadeUp}>
          Complete Hosting Solutions for Every Need
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {hostingServices.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-lg group border border-gray-100 hover:border-blue-200 transition"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center mb-6 w-16 h-16 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full text-white text-3xl mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
              <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto group-hover:w-12 transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

       {/* Projects Slider */}
             <motion.section
                    className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div className="max-w-3xl mx-auto mb-16" variants={fadeUp}>
                     <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Our Successful Projects
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Explore our portfolio of innovative and successful projects delivered across multiple services.
      </p>
                    </motion.div>
                    
                    <div 
                      className="relative max-w-7xl mx-auto"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Auto-scroll indicator */}
                      <motion.div 
                        className="absolute top-0 right-4 z-20 bg-white/90 backdrop-blur-md text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-gray-200"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                      >
                        <div className="flex items-center space-x-2">
                          <motion.div 
                            className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'}`}
                            animate={isAutoPlaying ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                          <span className="text-xs">{isAutoPlaying ? 'Auto-play' : 'Paused'}</span>
                        </div>
                      </motion.div>
            
                      {/* Slider Container */}
<div className="overflow-hidden">
  <motion.div
    className="flex"
    animate={{ x: `-${currentSlide * 100}%` }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 40,
      mass: 1,
    }}
  >
    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
      <div key={slideIndex} className="w-full flex-shrink-0">
        <div className="grid md:grid-cols-3 gap-8 p-8">
          {projects
            .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
            .map((project, idx) => (
              <motion.div
                key={idx}
                className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl group border border-gray-100 hover:border-blue-200"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Project Image Background */}
                <div
                  className="h-56 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 relative overflow-hidden"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  {/* Overlay Gradient for Better Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                  {/* Project Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-blue-700 shadow-md">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 text-left">
                  <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                  <motion.button
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg hover:shadow-xl text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project →
                  </motion.button>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    ))}
  </motion.div>
</div>

            
                      {/* Navigation Buttons */}
                      <div className="flex justify-center items-center mt-10 space-x-6">
                        <motion.button
                          onClick={prevSlide}

                          className="p-4 rounded-full bg-white shadow-xl hover:shadow-2xl text-blue-600 hover:bg-blue-50 transition-all duration-300 border border-gray-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiChevronLeft size={22} />
                        </motion.button>
            
                        {/* Slide Indicators */}
                        <div className="flex space-x-3">
                          {Array.from({ length: totalSlides }).map((_, index) => (
                            <motion.button
                              key={index}
                              onClick={() => handleManualNavigation(() => setCurrentSlide(index))}
                              className={`relative h-3 rounded-full transition-all duration-500 ${
                                currentSlide === index 
                                  ? 'bg-blue-600 w-10' 
                                  : 'bg-gray-300 hover:bg-gray-400 w-3'
                              }`}
                              whileHover={{ scale: 1.2 }}
                            >
                              {currentSlide === index && isAutoPlaying && (
                                <motion.div
                                  className="absolute inset-0 bg-blue-400 rounded-full opacity-60"
                                  initial={{ width: 0 }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 5, ease: "linear" }}
                                  key={`progress-${index}-${currentSlide}`}
                                />
                              )}
                            </motion.button>
                          ))}
                        </div>
            
                        <motion.button
                          onClick={nextSlide}

                          className="p-4 rounded-full bg-white shadow-xl hover:shadow-2xl text-blue-600 hover:bg-blue-50 transition-all duration-300 border border-gray-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiChevronRight size={22} />
                        </motion.button>
                      </div>
            
                      {/* Explore All Projects Link */}
                      <motion.div 
                        className="mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <motion.a 
                          href="/projects" 
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-all duration-300 hover:underline decoration-2 underline-offset-4"
                          whileHover={{ x: 5 }}
                        >
                          Explore all projects
                          <motion.span 
                            className="ml-1 text-xs"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.a>
                      </motion.div>
                    </div>
                  </motion.section>

      <ClientSays />
      <Footer />
    </>
  );
}
