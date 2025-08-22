import React from "react";
import { Link } from "react-router-dom";

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
