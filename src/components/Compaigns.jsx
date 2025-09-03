import React from "react";
import { Link } from "react-router-dom";

export default function Campaigns() {
  return (
    <div className="bg-gray-50">
      {/* ✅ Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Campaigns – Drive Results with Targeted Marketing
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            At <span className="font-semibold">Filenod</span>, we create and manage
            high-impact campaigns that help businesses connect with the right
            audience, at the right time, with the right message.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-white text-blue-600 px-8 py-3 rounded-lg shadow-md font-semibold hover:bg-blue-700 hover:text-white transition"
          >
            Request a Free Proposal →
          </Link>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our Campaign Services?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We focus on creating personalized campaigns designed to drive
            measurable growth and maximize ROI.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Custom Strategies", desc: "Every campaign is tailored to your goals, audience, and industry." },
              { title: "Multi-Channel Reach", desc: "From social media to email, PPC to SEO, we ensure maximum visibility." },
              { title: "Performance Tracking", desc: "Get real-time insights and performance reports." },
              { title: "ROI Focused", desc: "We design campaigns to deliver the best return on your investment." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-200 hover:border-blue-600 transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Our Campaign Process */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Campaign Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A structured process designed to deliver measurable, result-driven campaigns.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Understanding Your Goals", desc: "We start with a detailed consultation to define objectives." },
              { step: "2", title: "Market Research", desc: "Analyze competitors and audience behavior." },
              { step: "3", title: "Creative Development", desc: "Craft compelling visuals, ad copies, and messaging." },
              { step: "4", title: "Multi-Platform Execution", desc: "Launch across the most effective channels." },
              { step: "5", title: "Performance Optimization", desc: "Continuous testing and refinement for best results." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow border border-gray-200 hover:border-blue-600 transition"
              >
                <span className="text-blue-600 font-bold text-3xl">{item.step}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Types of Campaigns */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Types of Campaigns We Offer
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We design campaigns that cater to your business needs and audience.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Brand Awareness Campaigns",
              "Lead Generation Campaigns",
              "Product Launch Campaigns",
              "Seasonal & Event Campaigns",
              "Retargeting Campaigns",
              "PPC & SEO Marketing Campaigns",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:border-blue-600 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Success Stories */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Success Stories
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            “Our sales doubled in just three months thanks to their expertly managed ad campaign!”
          </p>
          <Link
            to="/portfolio"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Campaign Portfolio →
          </Link>
        </div>
      </section>

      {/* ✅ Final CTA Banner */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Launch Your High-Performing Campaign?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Let us help you boost your business visibility and maximize your ROI.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-white text-blue-600 px-8 py-3 rounded-lg shadow-md font-semibold hover:bg-blue-700 hover:text-white transition"
          >
            Get Started Today →
          </Link>
        </div>
      </section>
    </div>
  );
}
