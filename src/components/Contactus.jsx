import React from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const contactInfo = [
    { title: "Phone", value: "+1 234 567 89", icon: <Phone size={32} className="text-blue-600" /> },
    { title: "Email", value: "info@filenod.com", icon: <Mail size={32} className="text-blue-600" /> },
    { title: "Address", value: "Abbottabad, Pakistan", icon: <MapPin size={32} className="text-blue-600" /> },
    { title: "Business Hours", value: "Mon–Fri: 9 AM – 6 PM", icon: <Clock size={32} className="text-blue-600" /> },
  ];

  return (
    <div className="bg-gray-50">
      {/* ✅ Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="container mx-auto px-6 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Let’s Talk About Your Next Big Project 🚀
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-blue-100">
            Whether you're ready to start or just exploring, we’re here to help you grow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition"
          >
            Send Us a Message →
          </motion.button>
        </motion.div>
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
      </section>

      {/* ✅ Contact Information */}
      <section className="py-16 container mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 text-center"
        >
          Quick Ways to Get in Touch
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 text-center transition"
            >
              <div className="flex justify-center items-center mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-blue-600">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.value}</p>
            </motion.div>
          ))}
=======

export default function Contact() {
  return (
    <div className="bg-gray-50">
      {/* ✅ Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Let’s Talk About Your Next Big Project</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Whether you’re ready to start or just exploring options, our team is here to help you grow.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
            Send Us a Message →
          </button>
        </div>
      </section>

      {/* ✅ Contact Information */}
      <section className="py-16 container mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Quick Ways to Get in Touch</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Phone</h3>
            <p className="mt-2">+1 234 567 89</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Email</h3>
            <p className="mt-2">info@filenod.com</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Address</h3>
            <p className="mt-2">Abbottabad, Pakistan</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Business Hours</h3>
            <p className="mt-2">Mon–Fri: 9 AM – 6 PM</p>
          </div>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
        </div>
      </section>

      {/* ✅ Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
<<<<<<< HEAD
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 text-center"
          >
            Send Us a Message
          </motion.h2>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-2xl mx-auto bg-gray-50 shadow-lg p-8 rounded-2xl space-y-6"
          >
            {[ 
              { label: "Full Name *", type: "text", placeholder: "Your Name" },
              { label: "Email Address *", type: "email", placeholder: "you@example.com" },
              { label: "Phone Number", type: "tel", placeholder: "+1 234 567 89" },
              { label: "Company Name", type: "text", placeholder: "Your Company" },
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.label.includes("*")}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>
            ))}

            {/* Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Service Interested In
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition">
=======
          <h2 className="text-3xl font-bold text-gray-900 text-center">Send Us a Message</h2>
          <form className="mt-10 max-w-2xl mx-auto bg-gray-50 shadow-lg p-8 rounded-xl space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name *</label>
              <input type="text" placeholder="Your Name" required className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email Address *</label>
              <input type="email" placeholder="you@example.com" required className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input type="tel" placeholder="+1 234 567 89" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Company Name</label>
              <input type="text" placeholder="Your Company" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Service Interested In</label>
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600">
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
                <option>SEO</option>
                <option>Hosting</option>
                <option>Digital Marketing</option>
                <option>Portal Development</option>
                <option>Other</option>
              </select>
            </div>
<<<<<<< HEAD

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                placeholder="Your message..."
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Get in Touch →
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* ✅ Google Map */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center"
          >
            Visit Us in Abbottabad
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            className="mt-6 h-72 w-full rounded-2xl shadow-xl overflow-hidden"
          >
            <iframe
              title="Filenod Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.0636065165663!2d73.23401657404857!3d34.195851210136645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de31646e658223%3A0xeed0b43437fccc62!2sFilenod%20-%20IT%20Services%20Provider%20Company!5e0!3m2!1sen!2s!4v1756806516746!5m2!1sen!2s"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>

            
          </motion.div>
        </div>
      </section>

      {/* ✅ Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          Ready to Start Growing Your Business?
        </motion.h2>
        <p className="mt-3 text-blue-100 max-w-xl mx-auto">
          Let’s make your online presence stronger than ever.
        </p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition"
        >
          Schedule a Free Consultation →
        </motion.button>
=======
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea placeholder="Your message..." rows="4" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Get in Touch →
            </button>
          </form>
        </div>
      </section>

      {/* ✅ Why Contact Us */}
      <section className="py-16 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Work with a Team That Cares About Your Results</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          When you contact Filenod, you get more than a reply — you get a partner who listens, understands your goals, and crafts solutions that fit.
        </p>
      </section>

      {/* ✅ Google Map */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Visit Us in Abbottabad</h2>
          <div className="mt-6 h-72 w-full rounded-xl shadow-lg overflow-hidden">
            <iframe
              title="Filenod Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.197798809568!2d73.2404!3d34.1688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e09afcf84b9efb%3A0x301c403ec2d5d1b!2sAbbottabad"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ✅ Final CTA Banner */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Start Growing Your Business?</h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Let’s make your online presence stronger than ever.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Schedule a Free Consultation →
        </button>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
      </section>
    </div>
  );
}
