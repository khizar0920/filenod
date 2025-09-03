import React from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import Helmet from "../seo/HelmetConfig";
import aboutImg from "/services/f770b62bc8f42a0b66751fe636fc6eb0.jpg";
import { Link } from "react-router-dom";
const MotionLink = motion(Link);


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
=======
import { Helmet } from "react-helmet-async";
import aboutImg from "/services/f770b62bc8f42a0b66751fe636fc6eb0.jpg";
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d

export default function About() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>About Us | Filenod – Your Partner for Digital Growth</title>
        <meta
          name="description"
          content="Discover Filenod’s mission, vision, and team dedicated to delivering exceptional digital marketing, hosting, and client portal solutions."
        />
<<<<<<< HEAD
      </Helmet>

     {/* ✅ Hero Section */}
<section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24">
  <div className="container mx-auto px-6 text-center max-w-3xl">
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-5xl font-extrabold leading-tight"
    >
      Your Growth, Our Mission
    </motion.h1>

    <motion.p
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="mt-5 text-lg md:text-xl text-gray-100"
    >
      At Filenod, we combine innovation, expertise, and dedication to help
      businesses thrive in the digital world.
    </motion.p>

    {/* ✅ Fixed Link */}
    <MotionLink
      to="/signup"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
    >
      Work With Us →
    </MotionLink>
  </div>

</section>


      {/* ✅ Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
=======
        <meta name="keywords" content="About Filenod, Digital Marketing Experts, Hosting Solutions, Web Development Team" />
      </Helmet>

      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your Growth, Our Mission
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-100">
            At Filenod, we combine innovation, expertise, and dedication to help businesses thrive in the digital world.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
            Work With Us →
          </button>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
      </section>

      {/* ✅ Who We Are */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
            <h2 className="text-3xl font-bold text-gray-900">
              A Trusted Partner for Your Digital Journey
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Filenod is a full-service digital solutions company specializing in:
            </p>
            <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
              <li>Digital marketing campaigns that drive results</li>
              <li>SEO and web optimization for maximum visibility</li>
              <li>Secure hosting and domain services</li>
              <li>Custom-built client portal systems for B2B partnerships</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Founded with the belief that every business deserves to succeed online, we work closely with our clients to craft strategies that deliver measurable results.
            </p>
<<<<<<< HEAD
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={aboutImg}
              alt="About Filenod"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
=======
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={aboutImg} alt="About Filenod" className="w-full h-full object-cover" />
          </div>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
        </div>
      </section>

      {/* ✅ Our Mission */}
<<<<<<< HEAD
      <section className="py-20 bg-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
=======
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-2xl">
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          <h2 className="text-3xl font-bold text-gray-900">
            Helping Businesses Succeed, One Project at a Time
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to provide high-quality, result-driven, and reliable digital services that help our clients grow their revenue, strengthen their brand, and streamline their operations.
          </p>
<<<<<<< HEAD
        </motion.div>
      </section>

      {/* ✅ Our Values */}
<section className="py-24 bg-gray-50">
  <div className="container mx-auto px-6 text-center max-w-6xl">
    <motion.h2
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-extrabold text-gray-900"
    >
      Our Core Values That Drive Excellence
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-4 text-gray-600 text-lg"
    >
      At the heart of our work, these guiding principles shape every decision we make, ensuring we consistently deliver outstanding results and foster meaningful relationships.
    </motion.p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-14">
      {[
        {
          title: "Transparency",
          desc: "We prioritize honest communication and clear reporting. You'll always know where we stand, every step of the way."
        },
        {
          title: "Innovation",
          desc: "We embrace creativity and forward-thinking approaches to solve challenges and deliver smarter, more efficient solutions."
        },
        {
          title: "Commitment",
          desc: "Your success is our mission. We dedicate ourselves fully to achieving your goals and exceeding expectations."
        },
        {
          title: "Excellence",
          desc: "We aim for perfection in every task, ensuring high-quality results that stand out and drive lasting impact."
        },
        {
          title: "Collaboration",
          desc: "Teamwork fuels progress. We work closely with clients, partners, and colleagues to create shared success."
        },
        {
          title: "Integrity",
          desc: "We act with honesty, responsibility, and ethical principles, building trust with everyone we work with."
        },
        {
          title: "Adaptability",
          desc: "We stay agile and flexible, ready to adjust strategies and embrace change in an ever-evolving environment."
        },
        {
          title: "Sustainability",
          desc: "We are committed to responsible practices that positively impact society, the environment, and future generations."
        }
      ].map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 flex flex-col justify-center items-center transition-all duration-300 hover:bg-blue-50"
          style={{ aspectRatio: '1 / 1' }} // Makes card perfectly square
        >
          <h3 className="text-2xl font-semibold text-blue-600">{value.title}</h3>
          <p className="mt-4 text-gray-700 text-base">{value.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* ✅ Final CTA */}
      <section className="relative bg-blue-600 text-white py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let’s Build Something Great Together
          </h2>
          <p className="mt-4 text-white-100 text-lg">
            Whether you’re a small business, a growing brand, or a B2B partner — Filenod is ready to help you succeed online.
          </p>
           <MotionLink
      to="/signup"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
    >
            Get in Touch Today →
          </MotionLink>
        </motion.div>
      </section>
    </>
  );
}
=======
        </div>
      </section>

      {/* ✅ Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">The Core Principles That Guide Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {[
              { title: "Transparency", desc: "Clear communication and honest reporting." },
              { title: "Innovation", desc: "Always seeking smarter, better solutions." },
              { title: "Commitment", desc: "Your goals are our goals." },
              { title: "Excellence", desc: "Delivering high-quality results every time." },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-blue-600">{value.title}</h3>
                <p className="mt-3 text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Experts Who Care About Your Success</h2>
          <p className="mt-4 text-gray-600">
            Our diverse team includes marketing strategists, SEO specialists, developers, designers, and hosting engineers — all united by one goal: to help your business grow.
          </p>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            More Than a Service Provider — A Growth Partner
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We don’t just deliver a product; we become part of your team, offering ongoing support, insights, and solutions that evolve as your business grows.
          </p>
        </div>
      </section>

      {/* ✅ Final CTA */}
      <section className="relative bg-gray-300 text-black py-16">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let’s Build Something Great Together
          </h2>
          <p className="mt-4 text-black-100 text-lg">
            Whether you’re a small business, a growing brand, or a B2B partner — Filenod is ready to help you succeed online.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
          Get in Touch Today →
        </button>

        </div>
      </section>
    </>
  );
}
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
