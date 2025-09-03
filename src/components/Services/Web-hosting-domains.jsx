import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Helmet from "@/seo/HelmetConfig";
import Header from "../Header";
import Footer from "../Footer";
import ClientSays from "../ClientSays";
import {
  FiMonitor,
  FiDatabase,
  FiLayers,
  FiRefreshCw,
  FiShoppingCart,
  FiCode,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiThumbsUp,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  {
    title: "Web Hosting",
    desc: "Fast, secure, and reliable hosting solutions optimized for performance.",
    icon: <FiMonitor />,
  },
  {
    title: "Domain Registration",
    desc: "Get your perfect domain name with instant registration and easy management.",
    icon: <FiDatabase />,
  },
  {
    title: "Cloud Hosting",
    desc: "Scalable cloud hosting services to keep your business running 24/7.",
    icon: <FiLayers />,
  },
  {
    title: "E-commerce Hosting",
    desc: "High-speed hosting solutions tailored for online stores and marketplaces.",
    icon: <FiShoppingCart />,
  },
  {
    title: "Managed Hosting",
    desc: "We handle updates, security, and performance tuning — so you can focus on business.",
    icon: <FiRefreshCw />,
  },
  {
    title: "Custom Solutions",
    desc: "Tailor-made hosting plans built to fit your specific needs and requirements.",
    icon: <FiCode />,
  },
];

const hostingFeatures = [
  "99.9% uptime guarantee",
  "SSL certificates included",
  "Daily backups & restoration",
  "24/7 technical support",
  "Scalable resources as you grow",
];

const whyChooseFilenod = [
  {
    title: "Blazing-Fast Performance",
    desc: "Our optimized servers deliver lightning-fast speeds for peak performance.",
    icon: <FiCheckCircle />,
  },
  {
    title: "24/7 Expert Support",
    desc: "Our technical team is available round-the-clock to assist you whenever you need.",
    icon: <FiThumbsUp />,
  },
  {
    title: "Enterprise-Grade Security",
    desc: "We protect your data with advanced firewalls, DDoS protection, and SSL security.",
    icon: <FiDatabase />,
  },
];

const projects = [
  {
    title: "Corporate Website Hosting",
    desc: "High-speed hosting with SSL for a financial firm.",
    category: "Corporate",
  },
  {
    title: "E-commerce Hosting",
    desc: "Secure, scalable hosting solution for an online store.",
    category: "E-Commerce",
  },
  {
    title: "Cloud Migration",
    desc: "Migrated enterprise workloads to high-performance cloud servers.",
    category: "Cloud",
  },
  {
    title: "SaaS Hosting Platform",
    desc: "Optimized hosting infrastructure for a SaaS product.",
    category: "SaaS",
  },
  {
    title: "Healthcare Portal Hosting",
    desc: "HIPAA-compliant secure hosting for medical applications.",
    category: "Healthcare",
  },
  {
    title: "Education Portal Hosting",
    desc: "Fast, scalable hosting for an online learning platform.",
    category: "Education",
  },
];

export default function WebHostingAndDomain() {
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
      <Header />
      <Helmet>
        <title>Web Hosting & Domain Services | Filenod Hosting Experts</title>
        <meta
          name="description"
          content="Fast, secure, and reliable web hosting with domain registration — powered by Filenod. Perfect for businesses, agencies, and B2B partners."
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
             <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeUp}>
          Reliable Hosting & Hassle-Free Domains
        </motion.h1>
        <motion.p className="text-lg max-w-2xl mx-auto mb-8" variants={fadeUp}>
          Fast, secure, and scalable hosting solutions with seamless domain management.
        </motion.p>
             <motion.button
               className="px-8 py-3 bg-gradient-to-r from-white to-gray-100 text-blue-700 font-semibold rounded-full shadow-xl hover:scale-105 transform transition"
               whileHover={{ scale: 1.08 }}
             >
               Get Started Today →
             </motion.button>
           </motion.section>

      {/* Services Section */}
      <motion.section className="py-24 px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <motion.div className="max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Hosting & Domain Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Enterprise-grade hosting solutions designed for speed, security, and reliability.
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Hosting Features */}
      <motion.section className="py-24 bg-gray-50 px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Everything You Need for Peace of Mind</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          We ensure your hosting experience is seamless, secure, and fully optimized.
        </p>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {hostingFeatures.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FiCheckCircle className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700 font-medium text-base">{feature}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Filenod */}
      <motion.section className="py-24 px-6 bg-white text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Filenod?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          We provide a perfect balance of performance, security, and support to help your business grow.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whyChooseFilenod.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white text-3xl mx-auto mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
                <div className="overflow-hidden ">
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
                                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-blue-700 shadow-md">
                                    {project.category}
                                  </div>
                                  {/* Decorative elements */}
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