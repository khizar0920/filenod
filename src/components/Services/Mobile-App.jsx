import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Helmet from "@/seo/HelmetConfig";
import Header from "../Header";
import Footer from "../Footer";
import ClientSays from "../ClientSays";
import {
  FiSmartphone,
  FiCode,
  FiSettings,
  FiCloud,
  FiActivity,
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  { title: "Custom App Design & Development", desc: "Tailored mobile apps designed to match your business goals and user needs.", icon: <FiSmartphone /> },
  { title: "iOS App Development", desc: "High-performance, native apps optimized for Apple devices and App Store success.", icon: <FiCode /> },
  { title: "Android App Development", desc: "Seamless, scalable apps built for the diverse Android ecosystem.", icon: <FiSettings /> },
  { title: "Cross-Platform Apps", desc: "One codebase, multiple platforms — efficient development with React Native & Flutter.", icon: <FiCloud /> },
  { title: "UI/UX Design", desc: "Engaging, user-friendly interfaces that drive downloads and retention.", icon: <FiActivity /> },
  { title: "App Maintenance & Support", desc: "Ongoing updates, bug fixes, and performance optimization to keep apps running smoothly.", icon: <FiRefreshCw /> },
];

const projects = [
  { title: "Food Delivery Platform", desc: "Complete food delivery ecosystem with real-time tracking, payment integration, and driver management system achieving 500K+ downloads.", category: "Food & Delivery", metrics: "500K+ Downloads" },
  { title: "Fitness & Wellness Tracker", desc: "Comprehensive fitness app with workout tracking, nutrition planning, and wearable integration serving 250K+ active users.", category: "Health & Fitness", metrics: "250K+ Users" },
  { title: "E-Learning Mobile Platform", desc: "Interactive educational app with video streaming, quizzes, and certification system used by 100K+ students globally.", category: "Education", metrics: "100K+ Students" },
  { title: "Telemedicine App", desc: "HIPAA-compliant healthcare app with video consultations, appointment booking, and prescription management.", category: "Healthcare", metrics: "HIPAA Compliant" },
  { title: "Personal Finance Manager", desc: "Secure fintech app with budget tracking, expense management, and investment portfolio analysis with bank-level security.", category: "Fintech", metrics: "Bank-Level Security" },
  { title: "Social Network App", desc: "Scalable social platform with real-time messaging, content sharing, and community features handling millions of interactions.", category: "Social", metrics: "Million+ Interactions" },
];

const MobileAppDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handleManualNavigation = (callback) => {
    setIsAutoPlaying(false);
    callback();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  return (
    <>
      <Header />
      <Helmet>
        <title>Mobile App Development Services | Filenod</title>
        <meta name="description" content="Filenod builds high-performance mobile apps for iOS and Android. Custom, scalable, and user-friendly app development services." />
        <meta name="keywords" content="Mobile App Development, iOS App Development, Android App Development, Cross-Platform Apps, React Native, Flutter" />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="relative bg-blue-600 text-white py-28 px-6 text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/10 animate-pulse" animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 animate-pulse" animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/5" animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeUp}>
          Mobile App Development That Scales Your Business
        </motion.h1>
        <motion.p className="text-lg max-w-2xl mx-auto mb-8" variants={fadeUp}>
          From concept to App Store success, we create mobile apps that engage users and drive business growth across all platforms.
        </motion.p>
        <motion.button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-xl hover:scale-105 transform transition" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.98 }}>
          Start Your App Project →
        </motion.button>
      </motion.section>

      {/* Services Section */}
      <motion.section className="py-24 px-6 bg-blue-50 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <motion.div className="max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mobile App Development Services</h2>
          <p className="text-lg text-gray-600 leading-relaxed">End-to-end mobile app development services that bring your ideas to life on every platform</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl group transition-all duration-500 border border-gray-100 hover:border-blue-300"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                              className="flex items-center justify-center mb-6 w-16 h-16 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full text-white text-3xl mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg"
                              whileHover={{ rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              {service.icon}
                            </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              <div className="mt-6 w-0 h-1 bg-blue-600 mx-auto group-hover:w-12 transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* The rest of the sections with all purple/gradient replaced by blue */}
      {/* Development Process Section */}
      <motion.section className="py-24 px-6 bg-white text-center relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <div className="absolute inset-0 bg-blue-50/50"></div>
        <motion.div className="relative z-10 max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mobile App Development Process</h2>
          <p className="text-lg text-gray-600 leading-relaxed">A proven methodology that ensures your app launches successfully and scales with your business</p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-blue-200 -translate-y-1/2 z-0 rounded-full"></div>
          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {["Discovery & Planning", "UI/UX Design", "Development & Testing", "Launch & Support"].map((step, i) => (
              <motion.div key={i} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-300 group" whileHover={{ y: -12, scale: 1.02 }} variants={fadeUp}>
                <motion.div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">{i + 1}</motion.div>
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors mb-2">{step}</h3>
                <div className="mt-4 w-0 h-1 bg-blue-600 mx-auto group-hover:w-8 transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
            {/* Mobile App Projects Slider */}
      <motion.section
        className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Mobile App Success Stories
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover mobile apps we've built that achieved millions of downloads and transformed businesses
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
                className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-blue-600' : 'bg-gray-400'}`}
                animate={isAutoPlaying ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-xs">{isAutoPlaying ? 'Auto-play' : 'Paused'}</span>
            </div>
          </motion.div>

          {/* Slider Container */}
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-white">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 40,
                mass: 1
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
                          className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl group border border-gray-100 hover:border-purple-200"
                          whileHover={{ y: -12, scale: 1.02 }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="h-56 bg-gradient-to-br from-blue-600 via-blue-600 to-pink-100 group-hover:scale-105 transition-transform duration-700 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-500/10"></div>
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-purple-700 shadow-md">
                              {project.category}
                            </div>
                            
                            {/* Metrics Badge */}
                            <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                              {project.metrics}
                            </div>
                            
                            {/* Mobile App Icon Mockup */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                              <FiSmartphone className="text-purple-600 text-2xl" />
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-blue-500/30 rounded-lg backdrop-blur-sm group-hover:rotate-45 transition-transform duration-500"></div>
                          </div>
                          
                          <div className="p-6 text-left">
                            <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
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
              onClick={() => handleManualNavigation(prevSlide)}
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
              onClick={() => handleManualNavigation(nextSlide)}
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
              href="/mobile-apps" 
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

      {/* You can continue the same for project sliders, final CTA, and buttons replacing purple/gradient with blue */}
      <ClientSays />
      <Footer />
    </>
  );
};

export default MobileAppDevelopment;
