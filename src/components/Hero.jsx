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
        </div>
      </div>
    </section>
  );
}
