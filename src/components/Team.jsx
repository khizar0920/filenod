import React from "react";
import { Link } from "react-router-dom";
import avatar from "/clients/avatar2.jpeg";
import avatar2 from "/clients/avatar1.jpeg";

export default function Team() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Developer",
      image: avatar,
      strengths: "Full-stack developer with 8+ years experience in scalable web apps",
      bio: "Loves minimalist design and coffee-fueled coding sessions.",
    },
    {
      name: "Sarah Khan",
      role: "UI/UX Designer",
      image: avatar2,
      strengths: "Expert in user-centered designs and creating intuitive interfaces",
      bio: "Passionate about design psychology and enhancing user experience.",
    },
    {
      name: "Michael Lee",
      role: "SEO Specialist",
      image: avatar,
      strengths: "Drives high-ranking SEO campaigns and analytics-driven growth",
      bio: "Always exploring new Google algorithm updates with strong coffee!",
    },
    {
      name: "Emily Watson",
      role: "Project Manager",
      image: avatar2,
      strengths: "Strategic planner managing agile teams for smooth project deliveries",
      bio: "Believes in communication-first leadership and building client trust.",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet the Minds Behind Filenod
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Brilliant thinkers, creative designers, and technical experts working together to build your digital success.
          </p>
        </div>

        {/* Why Our Team Stands Out */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Our Strength? Expertise + Heart</h2>
          <p className="mt-4 text-gray-600">
            Filenod’s dedicated team combines technical finesse with real-world business insight.
            From crafting custom software and optimized websites to delivering strategic SEO and seamless hosting,
            our people are at the core of what makes Filenod extraordinary.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Meet the Team</h2>
          <p className="text-center text-gray-600 mt-2">Get to know the experts behind our success.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition border border-gray-100 text-center"
              >
                <img
                  src={member.image}
                  alt={`Filenod ${member.role} – ${member.name}`}
                  className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-500"
                />
                <h3 className="mt-5 text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="mt-3 text-gray-600 text-sm">{member.strengths}</p>
                <p className="mt-2 text-gray-500 italic">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Culture & Values */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">What Drives Us Every Day</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { title: "Innovation", desc: "Always ahead of the digital curve" },
              { title: "Integrity", desc: "Transparent and client-focused communication" },
              { title: "Excellence", desc: "Delivering polished, future-ready solutions" },
              { title: "Collaboration", desc: "Leveraging the power of collective expertise" },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-blue-600">{value.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Process */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">The Tools & Process That Fuel Our Work</h2>
          <p className="mt-4 text-gray-600">
            At Filenod, we use best-in-class tools like <span className="font-semibold">Laravel</span>, 
            <span className="font-semibold"> Next.js</span>, <span className="font-semibold"> TailwindCSS</span>, 
            <span className="font-semibold"> SEMrush</span>, and <span className="font-semibold">Figma</span> 
            to ensure smooth delivery—from conceptualization to deployment.
          </p>
        </div>

        {/* Client Testimonials */}
        <div className="mt-16 bg-gray-100 rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 text-center">See the Impact of Our Expertise</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center items-center">
            {[
              {
                quote:
                  "Our team’s collaboration with Sarah on the app launch increased our user sign-ups by 45% in just two months.",
                client: "TechVision Ltd.",
              },
              {
                quote:
                  "Working with Filenod’s SEO team transformed our visibility—we’re ranking #1 for multiple competitive keywords.",
                client: "GrowthMark Agency",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition border border-gray-200 max-w-md"
              >
                <p className="text-gray-700 italic">“{testimonial.quote}”</p>
                <p className="mt-4 text-blue-600 font-semibold">— {testimonial.client}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-blue-600 text-white rounded-2xl shadow-lg p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to Work with Filenod?</h2>
          <p className="mt-3 text-blue-100 text-lg">
            Whether it’s a quick question or a long-term digital strategy — our team is ready to help.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:text-white transition"
          >
            Let’s Talk →
          </Link>
        </div>
      </div>
    </section>
  );
}
