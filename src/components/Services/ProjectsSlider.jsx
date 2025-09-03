import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProjectsSlider() {
  // ✅ Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // ✅ Sample Projects Data
  const projects = [
    {
      title: "E-commerce Website",
      desc: "A scalable and secure online store built with Next.js & Stripe.",
      category: "E-commerce",
    },
    {
      title: "Business Landing Page",
      desc: "Modern, SEO-friendly, and responsive landing page design.",
      category: "Landing Page",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio to showcase creative work and services.",
      category: "Portfolio",
    },
    {
      title: "Real Estate Platform",
      desc: "Advanced property listing platform with filters and maps.",
      category: "Real Estate",
    },
    {
      title: "SaaS Dashboard",
      desc: "Powerful analytics dashboard with authentication & APIs.",
      category: "SaaS",
    },
    {
      title: "Blog Website",
      desc: "Content-rich blogging platform optimized for performance.",
      category: "Blog",
    },
  ];

  // ✅ Slider Logic
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleManualNavigation = (callback) => {
    setIsAutoPlaying(false);
    callback();
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // ✅ Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return (
    <motion.section
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.div className="max-w-3xl mx-auto mb-16" variants={fadeUp}>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our Web Development Projects
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore our portfolio of successful web development projects
        </p>

      </motion.div>

      {/* Slider Container */}
      <div
        className="relative max-w-7xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Auto-play Indicator */}
        <motion.div
          className="absolute top-0 right-4 z-20 bg-white/90 backdrop-blur-md text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center space-x-2">
            <motion.div
              className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? "bg-green-500" : "bg-gray-400"
              }`}
              animate={isAutoPlaying ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-xs">
              {isAutoPlaying ? "Auto-play" : "Paused"}
            </span>
          </div>
        </motion.div>

        {/* Slider */}
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
                    .slice(
                      slideIndex * projectsPerSlide,
                      (slideIndex + 1) * projectsPerSlide
                    )
                    .map((project, idx) => (
                      <motion.div
                        key={idx}
                        className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl group border border-gray-100 hover:border-blue-200"
                        whileHover={{ y: -12, scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Image Placeholder */}
                        <div className="h-56 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 group-hover:scale-105 transition-transform duration-700 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
                          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-blue-700 shadow-md">
                            {project.category}
                          </div>
                        </div>

                        {/* Card Content */}
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
                onClick={() =>
                  handleManualNavigation(() => setCurrentSlide(index))
                }
                className={`relative h-3 rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? "bg-blue-600 w-10"
                    : "bg-gray-300 hover:bg-gray-400 w-3"
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
  );
}
