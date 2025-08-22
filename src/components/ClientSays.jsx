import React from "react";
import client1 from "/clients/avatar1.jpeg";
import client2 from "/clients/avatar2.jpeg";
import client3 from "/clients/avatar3.png";
import { Star } from "lucide-react"; // For star ratings

export default function WhatOurClientsSay() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechWave Solutions",
      feedback:
        "Filenod built our company website and optimized it for SEO. We’ve seen a 200% increase in leads and the team was amazing to work with!",
      img: client1,
      rating: 5,
    },
    {
      name: "Dr. Emily Carter",
      position: "Founder, HealthCare Hub",
      feedback:
        "The mobile app Filenod created for our clinic transformed the patient experience. Highly professional, efficient, and innovative.",
      img: client2,
      rating: 4,
    },
    {
      name: "Michael Anderson",
      position: "Owner, DineFine Restaurant",
      feedback:
        "From design to launch, Filenod delivered beyond our expectations. Our restaurant booking system now runs flawlessly.",
      img: client3,
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          See what our happy clients say about Filenod’s services.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 p-6 text-left"
            >
              {/* Client Image */}
              <div className="flex items-center space-x-4">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-600"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500">{client.position}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                "{client.feedback}"
              </p>

              {/* Rating */}
              <div className="mt-4 flex items-center space-x-1">
                {[...Array(client.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
                {[...Array(5 - client.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gray-300"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
