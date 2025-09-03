<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
const MotionLink = motion(Link);
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaSearch,
  FaPalette,
} from "react-icons/fa";

export default function Hero() {
  const smoothX = useSpring(0, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(0, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      smoothX.set(x);
      smoothY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [smoothX, smoothY]);

  const services = [
    "Website Development",
    "SEO Optimization",
    "Mobile App Development",
    "Custom Software",
    "Hosting Solutions",
    "Graphic Design",
    "Content Writing",
    "Social Media Management",
    "Digital Marketing & PPC",
    "Web Hosting & Domains",
  ];

  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentService((p) => (p + 1) % services.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  const icons = [
    { Icon: FaLaptopCode, color: "text-blue-600", size: "text-4xl md:text-5xl", top: "10%", left: "12%" },
    { Icon: FaMobileAlt, color: "text-blue-600", size: "text-4xl md:text-5xl", top: "28%", left: "70%" },
    { Icon: FaCloud, color: "text-blue-600", size: "text-4xl md:text-5xl", top: "65%", left: "15%" },
    { Icon: FaSearch, color: "text-blue-600", size: "text-4xl md:text-5xl", top: "72%", left: "78%" },
    { Icon: FaPalette, color: "text-blue-600", size: "text-4xl md:text-5xl", top: "15%", left: "85%" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      {/* Glowing background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-40"></div>

      {/* Floating icons */}
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} ${item.size} hidden sm:block`}
          style={{ top: item.top, left: item.left, x: smoothX, y: smoothY }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 8 + i * 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <item.Icon className="drop-shadow-xl opacity-20 hover:opacity-40 transition-all duration-500" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10">
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            We Are{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Filenod
            </span>
            <br />
            <span className="text-gray-800">Empowering Your Digital Growth</span>
          </motion.h1>

          {/* Services Ticker */}
          <div className="relative h-10 sm:h-12 md:h-14 mt-3 w-full max-w-xl mx-auto overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentService}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 drop-shadow-sm">
                  {services[currentService]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl px-3"
          >
            <strong>Filenod</strong> is a full-service digital agency helping startups,
            brands, and enterprises scale with innovative technology and creative solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <MotionLink
              to="/start-project"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-lg shadow-xl hover:shadow-2xl transition"
            >
              Start Your Project
            </MotionLink>
            <MotionLink
              to="/signup"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 sm:px-7 py-2.5 sm:py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white shadow-lg transition"
            >
              Join as Freelancer
            </MotionLink>
          </motion.div>
=======
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20" id="home">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Empowering Businesses with World-Class <br />
          <span className="text-blue-600">IT Solutions</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          From startups to enterprises, Filenod builds high-performance websites, apps, and software that drive growth and success.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#start-project" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Start a Project</a>
          <a href="#freelancer" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">Join as Freelancer</a>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
        </div>
      </div>
    </section>
  );
}
