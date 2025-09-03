import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Helmet from "@/seo/HelmetConfig";
import Header from "../Header";
import Footer from "../Footer";
import ClientSays from "../ClientSays";

import { 
  FaCogs, FaCloud, FaProjectDiagram, FaCode, FaDatabase, FaChartLine, FaShieldAlt 
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Services
const services = [
  { title: "Enterprise Applications", desc: "ERP, CRM, and resource planning built to your business rules.", icon: <FaCogs /> },
  { title: "SaaS Platforms", desc: "Multi-tenant products with billing, roles, and user management.", icon: <FaCloud /> },
  { title: "Workflow Automation", desc: "Replace manual tasks with reliable, auditable automation.", icon: <FaProjectDiagram /> },
  { title: "APIs & Integrations", desc: "Connect ERPs, CRMs, gateways, and third-party platforms.", icon: <FaCode /> },
  { title: "Data & BI Systems", desc: "Pipelines, warehousing, dashboards, and actionable analytics.", icon: <FaDatabase /> },
  { title: "Modernization & Migrations", desc: "Move legacy apps to modern, cloud-ready architectures.", icon: <FaChartLine /> },
  { title: "Maintenance & Support", desc: "SLA-backed support, monitoring, and continuous improvements.", icon: <FaShieldAlt /> },
];

// Development Steps
const steps = [
  "Discovery & Strategy",
  "UX/UI & Prototyping",
  "Agile Development",
  "Testing, Security & Launch",
];

// Projects
const projects = [
  { title: "Logistics ERP", desc: "Custom ERP with live tracking, invoicing, and partner portals.", category: "ERP" },
  { title: "SaaS Analytics", desc: "Multi-tenant analytics suite with role-based dashboards.", category: "SaaS" },
  { title: "Healthcare Platform", desc: "HIPAA-ready appointment, records, and e-prescription system.", category: "Healthcare" },
  { title: "FinTech Integrator", desc: "Unified API layer for payments, KYC, and risk scoring.", category: "FinTech" },
  { title: "Field Ops App", desc: "Offline-first workforce management with geo-fencing.", category: "Field Ops" },
  { title: "Retail Automation", desc: "Automated procurement, pricing, and inventory sync.", category: "Retail" },
];

const CustomSoftwareDevelopment = () => {
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
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % totalSlides), 5000);
    return () => clearInterval(interval);
  }, [totalSlides, isAutoPlaying]);

  return (
    <>
      <Header />
      <Helmet>
        <title>Custom Software Development in [Region] | Filenod</title>
        <meta name="description" content="Filenod designs and builds scalable, secure custom software—SaaS, ERPs, APIs, and automation." />
        <meta name="keywords" content="Custom Software Development, SaaS Development, Enterprise Applications, APIs, Workflow Automation" />
      </Helmet>

      {/* Hero Section */}
      <motion.section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-28 px-6 text-center overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <motion.div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/10 animate-pulse" animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 animate-pulse" animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeUp}>
          Custom Software That Scales With Your Business
        </motion.h1>
        <motion.p className="text-lg max-w-2xl mx-auto mb-8" variants={fadeUp}>
          From discovery to launch, we build secure, high-performance systems that fit your processes, integrate your stack, and deliver measurable ROI.
        </motion.p>
        <motion.button className="px-8 py-3 bg-gradient-to-r from-white to-gray-100 text-blue-700 font-semibold rounded-full shadow-xl hover:scale-105 transform transition" whileHover={{ scale: 1.08 }}>
          Get Started Today →
        </motion.button>
      </motion.section>

      {/* Services Section */}
      <motion.section className="py-24 px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Custom Software Services</h2>
          <p className="text-lg text-gray-600 leading-relaxed">We offer enterprise-grade software tailored to your needs</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div key={idx} className="bg-white p-8 rounded-3xl shadow-lg group border border-gray-100 hover:border-blue-200" variants={fadeUp} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <motion.div
                              className="flex items-center justify-center mb-6 w-16 h-16 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full text-white text-3xl mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg"
                              whileHover={{ rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              {service.icon}
                            </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto group-hover:w-12 transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section className="py-24 px-6 bg-white text-center relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
        <motion.div className="relative z-10 max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Software Development Process</h2>
          <p className="text-lg text-gray-600 leading-relaxed">A proven methodology to deliver high-quality software</p>
        </motion.div>
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 -translate-y-1/2 z-0 rounded-full"></div>
          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div key={i} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 group" whileHover={{ y: -12, scale: 1.02 }} variants={fadeUp}>
                <motion.div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300" whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>{i + 1}</motion.div>
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">{step}</h3>
                <div className="mt-4 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto group-hover:w-8 transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Slider */}
      <motion.section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Custom Software Projects</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Explore our enterprise-grade software portfolio</p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="overflow-hidden">
            <motion.div className="flex" animate={{ x: `-${currentSlide * 100}%` }} transition={{ type: "spring", stiffness: 400, damping: 40, mass: 1 }}>
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8 p-8">
                    {projects.slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide).map((project, idx) => (
                      <motion.div key={idx} className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl group border border-gray-100 hover:border-blue-200" whileHover={{ y: -12, scale: 1.02 }} transition={{ duration: 0.4 }}>
                        <div className="h-56 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 group-hover:scale-105 transition-transform duration-700 relative overflow-hidden">
                          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-blue-700 shadow-md">{project.category}</div>
                        </div>
                        <div className="p-6 text-left">
                          <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                          <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">{project.desc}</p>
                          <motion.button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg hover:shadow-xl text-sm" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>View Project →</motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center items-center mt-10 space-x-6">
            <motion.button onClick={() => handleManualNavigation(prevSlide)} className="p-4 rounded-full bg-white shadow-xl hover:shadow-2xl text-blue-600 hover:bg-blue-50 transition-all duration-300 border border-gray-200" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FiChevronLeft size={22} /></motion.button>
            <div className="flex space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button key={index} onClick={() => handleManualNavigation(() => setCurrentSlide(index))} className={`relative h-3 rounded-full transition-all duration-500 ${currentSlide === index ? 'bg-blue-600 w-10' : 'bg-gray-300 hover:bg-gray-400 w-3'}`} whileHover={{ scale: 1.2 }} />
              ))}
            </div>
            <motion.button onClick={() => handleManualNavigation(nextSlide)} className="p-4 rounded-full bg-white shadow-xl hover:shadow-2xl text-blue-600 hover:bg-blue-50 transition-all duration-300 border border-gray-200" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FiChevronRight size={22} /></motion.button>
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

      {/* Testimonials */}
      <ClientSays />

      {/* Final CTA */}
      <motion.section className="container mx-auto px-6 mt-12 bg-blue-600 text-white py-10 rounded-lg text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold mb-2">Your Software Journey Starts Here</h2>
        <p className="text-base mb-5">Let’s build a robust platform your users will love—and your team will trust.</p>
        <button className="bg-white text-blue-600 px-5 py-2.5 rounded-md font-medium hover:bg-blue-700 hover:text-white transition">Start Your Project →</button>
      </motion.section>

      <Footer />
    </>
  );
};

export default CustomSoftwareDevelopment;
