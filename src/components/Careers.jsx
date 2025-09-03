import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaClipboardCheck,
  FaUserShield,
  FaProjectDiagram,
  FaGlobe,
  FaClock,
  FaBriefcase,
  FaLock,
  FaRocket,
  FaHandshake,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function Careers() {
  const steps = [
    {
      title: "Sign Up",
      desc: "Create your free freelancer account on our portal.",
      icon: <FaUserPlus className="text-blue-600 text-4xl" />,
    },
    {
      title: "Complete Profile",
      desc: "Add your skills, experience, and portfolio for better visibility.",
      icon: <FaClipboardCheck className="text-blue-600 text-4xl" />,
    },
    {
      title: "Verify Identity",
      desc: "Ensure trust and credibility with verified details.",
      icon: <FaUserShield className="text-blue-600 text-4xl" />,
    },
    {
      title: "Get Projects",
      desc: "Bid on projects or accept invitations from clients.",
      icon: <FaProjectDiagram className="text-blue-600 text-4xl" />,
    },
  ];

  const benefits = [
    { title: "Global Client Network", icon: <FaGlobe /> },
    { title: "Flexible Work Hours", icon: <FaClock /> },
    { title: "Diverse Industries", icon: <FaBriefcase /> },
    { title: "Secure Payments", icon: <FaLock /> },
    { title: "Skill Growth", icon: <FaRocket /> },
    { title: "Long-Term Opportunities", icon: <FaHandshake /> },
  ];

  const team = [
    {
      name: "Azumyan U. Wu",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/150?img=32",
      bio: "Ex-IBM engineer, passionate about building future-ready tech.",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    {
      name: "Silverstone Gray",
      role: "Lead Designer",
      image: "https://i.pravatar.cc/150?img=15",
      bio: "Loves crafting beautiful, user-friendly experiences.",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    {
      name: "Alan P. Watts",
      role: "Head of Engineering",
      image: "https://i.pravatar.cc/150?img=12",
      bio: "Tech innovator, focused on high-performance solutions.",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    {
      name: "Qarack Babama",
      role: "Lead Finance",
      image: "https://i.pravatar.cc/150?img=17",
      bio: "Finance wizard ensuring optimized business scaling.",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    {
      name: "Saylor Twift",
      role: "Marketing Manager",
      image: "https://i.pravatar.cc/150?img=19",
      bio: "Ex-singer turned marketing genius, driving growth strategies.",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    {
      name: "Mai Senpai",
      role: "HR Specialist",
      image: "https://i.pravatar.cc/150?img=24",
      bio: "Passionate about managing people and company culture.",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-50">
      {/* HERO SECTION */}
<section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center overflow-hidden">
  {/* Background overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
    {/* Animated heading */}
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-5xl md:text-6xl font-extrabold tracking-tight"
    >
      Build Your Future With Filenod
    </motion.h1>

    {/* Subheading */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="mt-6 max-w-2xl text-lg md:text-xl text-blue-100"
    >
      Join us to create stunning digital experiences with cutting-edge
      technology and a creative approach.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="mt-8 flex flex-wrap justify-center gap-4"
    >
      {/* Get Started Button - Blue with White Hover */}
      <Link
            to="/signup" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-all duration-300">
        Get Started
          </Link>

      {/* Learn More Button - White with Blue Text */}
      <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300">
        Learn More
      </button>
    </motion.div>
  </div>

  {/* Decorative shapes */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-700 rounded-full blur-3xl opacity-40"></div>
</section>


      <div className="container mx-auto px-6 py-16">
        {/* REGISTRATION STEPS */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-gray-900 text-center">How to Get Started</h2>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
            Follow these simple steps to kickstart your freelance journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-5">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BENEFITS SECTION */}
        <div className="mt-20 p-10">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Why Work With Filenod?</h2>
          <p className="text-center text-gray-600 mt-2">Trusted by thousands of freelancers worldwide 🌍</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center bg-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-lg hover:bg-blue-50 transition"
              >
                <span className="text-blue-600 text-2xl mr-3">{benefit.icon}</span>
                <p className="text-gray-700 text-base font-medium">{benefit.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TEAM SECTION */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20 mt-2 mb-0">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900"
            >
              Meet the Minds Behind <span className="text-blue-600">Filenod</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A passionate group of innovators, creators, and problem-solvers dedicated to delivering world-class digital solutions.
            </motion.p>

            {/* Team Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 border border-gray-100"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full border-4 border-blue-100 shadow-md"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                    <p className="mt-3 text-gray-600 text-sm text-center">{member.bio}</p>
                    <div className="flex space-x-4 mt-4">
                      <a href={member.linkedin} className="text-blue-600 hover:text-blue-800">
                        <FaLinkedin size={20} />
                      </a>
                      <a href={member.twitter} className="text-blue-400 hover:text-blue-600">
                        <FaTwitter size={20} />
                      </a>
                      <a href={member.github} className="text-gray-700 hover:text-gray-900">
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

           
          </div>
        </section>

       
      </div>
       {/* FINAL CTA */}
        <div className="mt-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 text-center ">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Freelancer Community Today</h2>
          <p className="mt-3 text-blue-100 text-lg">
            Become part of a growing network of skilled professionals shaping the future of work.
          </p>
          <Link
            to="/signup"
            className="mt-6 inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:text-white transition"
          >
            Register Now →
          </Link>
        </div>
    </section>
  );
}
=======

export default function Careers() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Careers at Filenod – Join as a Freelancer & Grow With Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Work with Flexibility. Earn with Freedom.
          </p>
          <p className="mt-3 text-gray-500 text-base">
            At Filenod, we empower freelancers to work on their own terms. Whether
            you’re a designer, developer, marketer, content creator, or industry
            specialist, our platform connects you with endless opportunities to
            showcase your skills and earn from anywhere in the world.
          </p>
          <Link
            to="/signup"
            className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Register as a Freelancer →
          </Link>
        </div>

        {/* Freelancer Registration Steps */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Freelancer Registration – Step-by-Step Guide
          </h2>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
            Follow these simple steps to kickstart your freelance journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                title: "Sign Up",
                desc: "Create your free freelancer account on our portal.",
              },
              {
                title: "Complete Your Profile",
                desc: "Add your skills, experience, and portfolio for better visibility.",
              },
              {
                title: "Verify Your Identity",
                desc: "Ensure trust and credibility with verified details.",
              },
              {
                title: "Apply or Get Invited",
                desc: "Bid on projects or accept invitations from clients.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Benefits of Working with Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              "Global Client Network – Access projects from worldwide industries.",
              "Flexible Work Hours – Choose your own schedule.",
              "Diverse Industries – Work in your niche or explore new sectors.",
              "Secure Payments – Guaranteed payments for completed work.",
              "Skill Growth – Gain experience by working on innovative projects.",
              "Long-Term Opportunities – Build lasting relationships with top clients.",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition"
              >
                <span className="text-blue-600 font-bold text-lg mr-3">✓</span>
                <p className="text-gray-700 text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Industries You Can Work In
          </h2>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
            Our freelancers work across multiple industries, and we are always expanding.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              "Information Technology",
              "Healthcare",
              "Education & E-Learning",
              "E-commerce & Retail",
              "Manufacturing",
              "Marketing & Advertising",
              "Finance & Accounting",
            ].map((industry, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 font-medium px-5 py-2 rounded-full border border-blue-200 hover:bg-blue-600 hover:text-white transition"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Enrollment Process */}
        <div className="mt-16 bg-gray-100 rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Enrollment Process for Freelancers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 text-center">
            {[
              "Register online through our Freelancer Enrollment Form.",
              "Upload your resume/CV and portfolio.",
              "Get approval from our team within 48 hours.",
              "Start receiving project invitations.",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition border border-gray-200"
              >
                <h3 className="text-blue-600 font-bold text-xl">Step {index + 1}</h3>
                <p className="mt-3 text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-blue-600 text-white rounded-2xl shadow-lg p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            Join Our Freelancer Community Today
          </h2>
          <p className="mt-3 text-blue-100 text-lg">
            Become part of a growing network of skilled professionals who are shaping the future of work.
          </p>
          <Link
            to="/signup"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:text-white transition"
          >
            Register as a Freelancer →
          </Link>
        </div>
      </div>
    </section>
  );
}
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
