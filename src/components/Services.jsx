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
      </div>
    </section>
  );
}
