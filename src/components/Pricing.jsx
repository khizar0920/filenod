import React from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
=======
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d

export default function Pricingcom() {
  const plans = [
    {
      name: "Starter",
      price: "$199 / month",
      description: "Perfect for small businesses starting their digital journey.",
      features: [
        "Basic SEO Optimization",
        "5 Pages Website",
        "1 GB Hosting",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$499 / month",
      description: "Best for growing businesses looking to scale online.",
      features: [
        "Advanced SEO Optimization",
        "15 Pages Website",
        "5 GB Hosting",
        "Priority Support",
        "Monthly Performance Reports",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "Tailored solutions for enterprises and large-scale projects.",
      features: [
        "Complete Digital Marketing",
        "Unlimited Pages Website",
        "Dedicated Hosting",
        "24/7 VIP Support",
        "Dedicated Account Manager",
      ],
      popular: false,
    },
  ];

<<<<<<< HEAD
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* ✅ Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="container mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Transparent Pricing, Maximum Value
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Choose a plan that suits your business needs — no hidden charges, no surprises.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition"
            >
              Get Started →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition"
            >
              Request Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ✅ Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Our Pricing Plans
          </motion.h2>
=======
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Transparent Pricing, Maximum Value
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a plan that suits your business needs — no hidden charges, no surprises.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-600 hover:text-white transition">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Pricing Plans
          </h2>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          <p className="mt-4 text-gray-600 text-lg">
            Simple, transparent, and designed to grow with your business.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
<<<<<<< HEAD
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative rounded-2xl p-8 shadow-lg transition-all backdrop-blur-md bg-white/80 hover:shadow-2xl hover:-translate-y-2 border ${
                  plan.popular
                    ? "border-blue-600 ring-2 ring-blue-500"
                    : "border-gray-200"
                }`}
              >
                {/* Badge */}
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                    ⭐ Most Popular
                  </span>
                )}

                {/* Title & Price */}
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-blue-600 text-3xl font-extrabold mt-3">{plan.price}</p>
                <p className="mt-2 text-gray-600">{plan.description}</p>

                {/* Features */}
                <ul className="mt-6 space-y-3 text-left">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle className="text-blue-600 w-5 h-5" />
                      {feature}
=======
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 border ${
                  plan.popular
                    ? "border-blue-600 shadow-2xl"
                    : "border-gray-200"
                } transition transform hover:-translate-y-2 hover:shadow-2xl duration-300`}
              >
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-blue-600 text-3xl font-bold mt-4">
                  {plan.price}
                </p>
                <p className="mt-2 text-gray-600">{plan.description}</p>

                <ul className="mt-6 space-y-3 text-gray-700 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      ✅ {feature}
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
                    </li>
                  ))}
                </ul>

<<<<<<< HEAD
                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 w-full px-6 py-3 rounded-lg font-semibold shadow-md transition ${
=======
                <button
                  className={`mt-6 w-full px-6 py-3 rounded-lg font-semibold shadow transition ${
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white"
                  }`}
                >
<<<<<<< HEAD
                  Choose Plan →
                </motion.button>
              </motion.div>
=======
                  Choose Plan
                </button>
              </div>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ✅ Why Choose Us */}
<section className="bg-gradient-to-b from-white to-gray-50 py-20">
  <div className="container mx-auto px-6 text-center">
    {/* Title */}
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
    >
      Why Choose <span className="text-blue-600">Filenod?</span>
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
    >
      At Filenod, we don’t just deliver services — we empower your business with 
      cutting-edge technology, high performance, and unmatched customer support.
    </motion.p>

    {/* Benefits Grid */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "No Hidden Costs",
          desc: "Transparent pricing with no surprises — you pay only for what you use.",
          icon: "💰",
        },
        {
          title: "Flexible Plans",
          desc: "Choose from multiple pricing models designed to suit businesses of all sizes.",
          icon: "📦",
        },
        {
          title: "24/7 Support",
          desc: "Our dedicated support team is always available to resolve your queries.",
          icon: "⚡",
        },
        {
          title: "High Performance",
          desc: "Optimized solutions for speed, security, and scalability — guaranteed.",
          icon: "🚀",
        },
      ].map((benefit, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex justify-center items-center text-5xl mb-4">
            {benefit.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {benefit.title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {benefit.desc}
          </p>
        </motion.div>
      ))}
    </div>

   
  </div>
</section>

      {/* ✅ Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Ready to Grow Your Business?
          </motion.h2>
          <p className="mt-3 text-lg max-w-2xl mx-auto text-blue-100">
            Choose the perfect plan today and scale with confidence.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </motion.button>
=======
      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Filenod?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We’re more than just a service provider — we’re your digital growth partner.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["No Hidden Costs", "Flexible Plans", "24/7 Support", "High Performance"].map(
              (benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                  <p className="text-blue-600 font-semibold">{benefit}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-3 text-lg max-w-2xl mx-auto">
            Choose the perfect plan today and scale with confidence.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border border-white font-semibold rounded-lg shadow hover:bg-white hover:text-blue-600 transition">
              Contact Us
            </button>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          </div>
        </div>
      </section>
    </>
  );
}
