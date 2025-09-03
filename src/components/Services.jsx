<<<<<<< HEAD
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Importing images
import webDevImg from "/services/web.webp";
import graphicImg from "/services/98dce83da57b0395e163467c9dae521b.jpg";
import appImg from "/services/08f0efebb1c51aada9430a089a2050cc.jpg";
import seoImg from "/services/seo.webp";
import cusImg from "/services/customSoftware.jpg";
import webhosting from "/services/hosting.webp";
import content from "/services/content.webp";
import social from "/services/social.webp";
import marketing from "/services/marketing.webp";
import domainhosting from "/services/domainhosting.webp";

export default function Services() {
  const services = [
    { title: "Website Development", slug: "web-development", desc: "Responsive, fast, and SEO-optimized websites built with the latest technologies.", price: "$499", img: webDevImg },
    { title: "SEO Optimization", slug: "seo-optimization", desc: "Improve rankings and get more traffic with our expert SEO strategies.", price: "$299", img: seoImg },
    { title: "Mobile App Development", slug: "Mobile-App", desc: "High-performance Android and iOS apps tailored to your business needs.", price: "$799", img: appImg },
    { title: "Custom Software", slug: "Custom-software", desc: "Develop robust custom software solutions for your business processes.", price: "$999", img: cusImg },
    { title: "Hosting Solutions", slug: "Hosting-solutions", desc: "Reliable and secure hosting services with maximum uptime.", price: "$149", img: webhosting },
    { title: "Graphic Design", slug: "Graphic-designing", desc: "Creative designs for your brand, from logos to marketing materials.", price: "$199", img: graphicImg },
    { title: "Content Writing", slug: "Content-writing", desc: "Engaging and SEO-friendly content that converts visitors into customers.", price: "$129", img: content },
    { title: "Social Media Management", slug: "Social-media-management", desc: "Manage and grow your social media presence effectively.", price: "$249", img: social },
    { title: "Digital Marketing & PPC", slug: "Digital-marketing", desc: "Boost your ROI with targeted ad campaigns and result-driven marketing.", price: "$399", img: marketing },
    { title: "Web Hosting & Domains", slug: "Web-hosting-domains", desc: "Affordable domain registration and powerful hosting plans.", price: "$99", img: domainhosting },
  ];

  // Parent container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Card entry animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Magnetic hover effect hook
  const useMagnetic = () => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 200, damping: 15 });
    const springY = useSpring(y, { stiffness: 200, damping: 15 });

    const rotateX = useTransform(springY, [-50, 50], [10, -10]);
    const rotateY = useTransform(springX, [-50, 50], [-10, 10]);

    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);
      x.set(offsetX);
      y.set(offsetY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto"
        >
          We deliver <span className="">cutting-edge</span> solutions to elevate your business.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          {services.map((service, index) => {
            const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useMagnetic();

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={cardVariants}
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-blue-600 transition-all duration-500 cursor-pointer"
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15, rotate: 1.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Floating Price Tag */}
                  <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute top-4 left-4 bg-blue-600 px-4 py-1 rounded-full shadow-lg"
                  >
                    <span className="text-white text-sm font-semibold">
                      From <span className="font-bold">{service.price}</span>
                    </span>
                  </motion.div>
                </div>

                {/* Service Details */}
                <div className="p-6 text-left">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition duration-300"
                  >
                    {service.title}
                  </Link>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-5 block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300"
                  >
                    Get Started →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
=======
import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import webDevImg from "/services/f770b62bc8f42a0b66751fe636fc6eb0.jpg";
import graphicImg from "/services/98dce83da57b0395e163467c9dae521b.jpg";
import appImg from "/services/08f0efebb1c51aada9430a089a2050cc.jpg";
import seoImg from "/services/seo.jpg";
import cusImg from "/services/cms.webp";

export default function Services({ id }) {
  const services = [
    {
      title: "Website Development",
      slug: "web-development",
      desc: "Responsive, fast, and SEO-optimized websites built with the latest technologies.",
      price: "$499",
      img: webDevImg,
    },
    {
      title: "SEO Optimization",
      slug: "seo-optimization",
      desc: "Improve rankings and get more traffic with our expert SEO strategies.",
      price: "$299",
      img: seoImg,
    },
    {
      title: "Mobile App Development",
      slug: "mobile-app-development",
      desc: "High-performance Android and iOS apps tailored to your business needs.",
      price: "$799",
      img: appImg,
    },
    {
      title: "Custom Software",
      slug: "custom-software",
      desc: "Develop robust custom software solutions for your business processes.",
      price: "$999",
      img: cusImg,
    },
    {
      title: "Hosting Solutions",
      slug: "hosting-solutions",
      desc: "Reliable and secure hosting services with maximum uptime.",
      price: "$149",
      img: webDevImg,
    },
    {
      title: "Graphic Design",
      slug: "graphic-design",
      desc: "Creative designs for your brand, from logos to marketing materials.",
      price: "$199",
      img: graphicImg,
    },
    {
      title: "Content Writing",
      slug: "content-writing",
      desc: "Engaging and SEO-friendly content that converts visitors into customers.",
      price: "$129",
      img: webDevImg,
    },
    {
      title: "Social Media Management",
      slug: "social-media-management",
      desc: "Manage and grow your social media presence effectively.",
      price: "$249",
      img: webDevImg,
    },
    {
      title: "Digital Marketing & PPC",
      slug: "digital-marketing-ppc",
      desc: "Boost your ROI with targeted ad campaigns and result-driven marketing.",
      price: "$399",
      img: webDevImg,
    },
    {
      title: "Web Hosting & Domains",
      slug: "web-hosting-domains",
      desc: "Affordable domain registration and powerful hosting plans.",
      price: "$99",
      img: webDevImg,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          We provide top-notch digital solutions to help your business grow and succeed.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-blue-600 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />

                {/* Price Tag */}
                <div className="absolute top-4 left-4 bg-blue-600 bg-opacity-90 px-4 py-1 rounded-full shadow-lg">
                  <span className="text-white text-sm font-semibold">
                    From <span className="font-bold">{service.price}</span>
                  </span>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Get Started Button */}
                <Link
                  to={`/service/${service.slug}`}
                  className="mt-5 block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
      </div>
    </section>
  );
}
