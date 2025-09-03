import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Helmet from "@/seo/HelmetConfig";
import Header from "../Header";
import Footer from "../Footer";
import ClientSays from "../ClientSays";
import { FiTrendingUp, FiSearch, FiBarChart2, FiSettings, FiMapPin, FiLink, FiFileText, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// SEO Services
const services = [
  { title: "Keyword Research & Strategy", desc: "Identify high-value keywords that drive qualified traffic to your business.", icon: <FiSearch /> },
  { title: "On-Page Optimization", desc: "Perfect titles, meta tags, content structure, and internal linking strategy.", icon: <FiSettings /> },
  { title: "Technical SEO", desc: "Site speed optimization, mobile-friendliness, and clean code architecture.", icon: <FiBarChart2 /> },
  { title: "Local SEO", desc: "Google Business Profile optimization for maximum local visibility.", icon: <FiMapPin /> },
  { title: "Link Building", desc: "High-quality backlinks from authoritative sites in your industry.", icon: <FiLink /> },
  { title: "Content Marketing", desc: "Strategic blog posts, landing pages, and resource guides that rank.", icon: <FiFileText /> },
];

// SEO Projects
const projects = [
  { 
    title: "E-commerce SEO Success", 
    desc: "Increased organic traffic by 340% and revenue by 250% for an online retail store through strategic keyword targeting and technical optimization.",
    category: "E-commerce",
    metrics: "+340% Traffic"
  },
  { 
    title: "Local Business Domination", 
    desc: "Achieved #1 rankings for 15+ local keywords and increased foot traffic by 180% using advanced GMB strategies.",
    category: "Local SEO",
    metrics: "#1 Rankings"
  },
  { 
    title: "Content-Driven Growth", 
    desc: "Built 500K+ monthly organic visitors through strategic content marketing and long-tail keyword optimization.",
    category: "Content SEO",
    metrics: "500K+ Visitors"
  },
  { 
    title: "SaaS Lead Generation", 
    desc: "Generated 2,500+ qualified leads monthly through targeted SEO campaigns and conversion optimization.",
    category: "SaaS",
    metrics: "2,500+ Leads"
  },
  { 
    title: "Healthcare Authority", 
    desc: "Established domain authority and achieved top 3 rankings for competitive healthcare keywords.",
    category: "Healthcare",
    metrics: "Top 3 Rankings"
  },
  { 
    title: "Enterprise SEO Scale", 
    desc: "Managed SEO for 10,000+ pages, achieving 85% increase in organic visibility for multinational corp.",
    category: "Enterprise",
    metrics: "+85% Visibility"
  },
];

const SeoOptimization = () => {
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
        <title>SEO Services in Abbottabad | Filenod</title>
        <meta
          name="description"
          content="Boost your website rankings, traffic, and sales with Filenod's proven SEO strategies. Get a free SEO audit today."
        />
        <meta
          name="keywords"
          content="SEO Services in Abbottabad, Search Engine Optimization Company, Increase Website Traffic & Leads"
        />
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
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/5"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeUp}>
          SEO Services That Put Your Business on the Map
        </motion.h1>
        <motion.p className="text-lg max-w-2xl mx-auto mb-8" variants={fadeUp}>
          Drive organic traffic, improve rankings, and dominate search results with our proven SEO strategies that deliver measurable results.
        </motion.p>
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-white to-gray-100 text-blue-700 font-semibold rounded-full shadow-xl hover:scale-105 transform transition"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started Today →
        </motion.button>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.div className="max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our SEO Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Comprehensive SEO solutions designed to boost your search rankings and drive qualified traffic
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl group transition-all duration-500 border border-gray-100 hover:border-blue-200"
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
      </motion.section>

      {/* SEO Process Section */}
      <motion.section
        className="py-24 px-6 bg-white text-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
        
        <motion.div className="relative z-10 max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our SEO Process
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A proven 5-step methodology that delivers consistent, measurable SEO success
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 -translate-y-1/2 z-0 rounded-full"></div>
          
          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {[
              { step: "Audit & Analysis", desc: "Deep technical audit" },
              { step: "Strategy Development", desc: "Custom SEO roadmap" },
              { step: "Implementation", desc: "Execute optimization" },
              { step: "Monitoring & Reporting", desc: "Track performance" },
              { step: "Continuous Optimization", desc: "Ongoing improvements" },
            ].map((item, i) => (
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
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                  {item.step}
                </h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
                <div className="mt-4 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto group-hover:w-8 transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SEO Projects Slider */}
      <motion.section
        className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our SEO Success Stories
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Real results from real businesses. See how our SEO strategies deliver measurable growth.
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
                className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-blue-500' : 'bg-gray-400'}`}
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
                          className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl group border border-gray-100 hover:border-blue-200"
                          whileHover={{ y: -12, scale: 1.02 }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="h-56 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 group-hover:scale-105 transition-transform duration-700 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-blue-700 shadow-md">
                              {project.category}
                            </div>
                            
                            {/* Metrics Badge */}
                            <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                              {project.metrics}
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-500"></div>
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
              href="/seo-case-studies" 
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

      {/* Testimonials */}
      <ClientSays />

      {/* Final CTA */}
      <motion.section 
        className="container mx-auto px-6 mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 rounded-2xl text-center shadow-2xl" 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="max-w-2xl mx-auto"
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Google Rankings?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let our SEO experts analyze your website and create a custom strategy that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project →
            </motion.button>
            <motion.button 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
};

export default SeoOptimization;