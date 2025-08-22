import React from "react";
import { Helmet } from "react-helmet-async";
import aboutImg from "/services/f770b62bc8f42a0b66751fe636fc6eb0.jpg";

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
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={aboutImg} alt="About Filenod" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ✅ Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Helping Businesses Succeed, One Project at a Time
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to provide high-quality, result-driven, and reliable digital services that help our clients grow their revenue, strengthen their brand, and streamline their operations.
          </p>
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
