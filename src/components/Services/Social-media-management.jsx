import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Helmet from "@/seo/HelmetConfig";
import Header from "../Header";
import Footer from "../Footer";
import ClientSays from "../ClientSays";

import {
  FiUsers,
  FiCamera,
  FiTarget,
  FiBell,
  FiBarChart2,
  FiLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  { title: "Social Media Strategy", desc: "Tailored plans for Facebook, Instagram, LinkedIn, Twitter, and more.", icon: <FiTarget /> },
  { title: "Content Creation", desc: "Custom graphics, videos and post copy that resonates with your audience.", icon: <FiCamera /> },
  { title: "Account Management", desc: "Daily monitoring, community engagement and reputation management.", icon: <FiBell /> },
  { title: "Social Advertising", desc: "Paid campaigns that reach the right people and drive conversions.", icon: <FiUsers /> },
  { title: "Analytics & Reporting", desc: "Track performance and optimize using clear, actionable reports.", icon: <FiBarChart2 /> },
  { title: "Influencer Collaborations", desc: "Partner with the right creators to amplify your message.", icon: <FiLink /> },
];

// Social media projects / case studies
const projects = [
  {
    title: "Brand Awareness Campaign",
    desc: "Multi-platform campaign that increased brand recall with short-form video and hero creatives.",
    category: "Awareness",
  },
  {
    title: "Lead Gen Ads",
    desc: "Targeted ad strategy generating high-quality leads for a B2B client on LinkedIn and Facebook.",
    category: "Performance",
  },
  {
    title: "Community Growth",
    desc: "Organic growth plan that tripled follower counts and increased engagement rates.",
    category: "Organic",
  },
  {
    title: "Product Launch",
    desc: "Coordinated launch across Instagram, Twitter, and email with influencer amplification.",
    category: "Launch",
  },
  {
    title: "Content Revamp",
    desc: "Visual refresh and new content calendar that improved shareability and saves.",
    category: "Creative",
  },
  {
    title: "Social Listening & Response",
    desc: "Realtime monitoring and community response program that improved NPS and sentiment.",
    category: "Support",
  },
];

const SocialMediaManagement = () => {
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
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides, isAutoPlaying]);

  return (
    <>
      <Header />
      <Helmet>
        <title>Social Media Management in Filenod | Filenod Marketing Experts</title>
        <meta name="description" content="Filenod helps businesses grow through strategic social media management, content creation, and audience engagement." />
        <meta name="keywords" content="Social Media Management in [Region]" />
      </Helmet>

      {/* Hero Section */}
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
          Social Media That Sells, Not Just Scrolls
        </motion.h1>
        <motion.p className="text-lg max-w-2xl mx-auto mb-8" variants={fadeUp}>
          We manage your social platforms to increase followers, boost engagement, and generate real business results.
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
          <h2 className="text-4xl font-bold text-gray-800 mb-6">From Content to Campaigns — We Handle It All</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Strategic social media management, creative production, ad campaigns and community growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-lg group duration-500 border border-gray-100 hover:border-blue-200"
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

              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>

              <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto group-hover:w-12 transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:scale-105"
            whileHover={{ scale: 1.03 }}
          >
            Let’s Boost Your Social Presence →
          </motion.button>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="py-24 px-6 bg-white text-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>

        <motion.div className="relative z-10 max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">How We Grow Your Social Media Presence</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A clear, repeatable process that turns followers into customers.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 -translate-y-1/2 z-0 rounded-full"></div>

          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {[
              "Audit & Research",
              "Content Calendar",
              "Creative Production",
              "Publish, Engage & Analyze",
            ].map((step, i) => (
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

      {/* Project Slider */}
      <motion.section
        className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Social Media Projects</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore case studies and campaigns that delivered measurable results.
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
                className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-500" : "bg-gray-400"}`}
                animate={isAutoPlaying ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-xs">{isAutoPlaying ? "Auto-play" : "Paused"}</span>
            </div>
          </motion.div>

          {/* Slider Container */}
          <div className="overflow-hidden ">
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
                          <div className="h-56 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 group-hover:scale-105 transition-transform duration-700 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-blue-700 shadow-md">
                              {project.category}
                            </div>
                            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-500"></div>
                          </div>
                          <div className="p-6 text-left">
                            <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">{project.desc}</p>
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
                    currentSlide === index ? "bg-blue-600 w-10" : "bg-gray-300 hover:bg-gray-400 w-3"
                  }`}
                  whileHover={{ scale: 1.2 }}
                >
                  {currentSlide === index && isAutoPlaying && (
                    <motion.div
                      className="absolute inset-0 bg-blue-400 rounded-full opacity-60"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
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
          <motion.div className="mt-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <motion.a
              href="/projects"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-all duration-300 hover:underline decoration-2 underline-offset-4"
              whileHover={{ x: 5 }}
            >
              Explore all projects
              <motion.span className="ml-1 text-xs" animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <ClientSays />

      {/* Final CTA */}
      <motion.section
        className="container mx-auto px-6 mt-12 bg-blue-600 text-white py-10 rounded-lg text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Strategy Meets Creativity</h2>
        <p className="text-base mb-5">We don’t just post for the sake of posting — we create content that builds your community and drives conversions.</p>
        <button className="bg-white text-blue-600 px-5 py-2.5 rounded-md font-medium hover:bg-blue-700 hover:text-white transition">
          Start Your Project →
        </button>
      </motion.section>

      <Footer />
    </>
  );
};

export default SocialMediaManagement;
