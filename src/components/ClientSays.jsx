import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Local client images
import client1 from "/clients/avatar1.jpeg";
import client2 from "/clients/avatar2.jpeg";
import client3 from "/clients/avatar3.png";
import client4 from "/clients/avatar1.jpeg";
import client5 from "/clients/avatar2.jpeg";
import client6 from "/clients/avatar3.png";

const clients = [client1, client2, client3, client4, client5, client6];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechWave Solutions",
    feedback:
      "Filenod built our company website and optimized it for SEO. We've seen a 200% increase in leads and the team was amazing to work with!",
    img: clients[0],
    rating: 5,
  },
  {
    name: "Dr. Emily Carter",
    position: "Founder, HealthCare Hub",
    feedback:
      "The mobile app Filenod created for our clinic transformed the patient experience. Highly professional, efficient, and innovative.",
    img: clients[1],
    rating: 4,
  },
  {
    name: "Michael Anderson",
    position: "Owner, DineFine Restaurant",
    feedback:
      "From design to launch, Filenod delivered beyond our expectations. Our restaurant booking system now runs flawlessly.",
    img: clients[2],
    rating: 5,
  },
  {
    name: "Olivia Brown",
    position: "Marketing Head, Bright Media",
    feedback:
      "Filenod revamped our marketing website with stunning visuals and SEO optimization. Truly impressed!",
    img: clients[0],
    rating: 5,
  },
  {
    name: "James Wilson",
    position: "CTO, TechSphere",
    feedback:
      "The Filenod team built our internal dashboard quickly and efficiently. Outstanding work and support!",
    img: clients[1],
    rating: 4,
  },
  {
    name: "Sophia Lee",
    position: "Founder, Wellness Co",
    feedback:
      "Our wellness app was delivered on time with excellent UX/UI design. The team exceeded our expectations.",
    img: clients[5],
    rating: 5,
  },
];

export default function ClientSays() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: false, // ✅ Disabled for better mobile view
    responsive: [
      {
        breakpoint: 1280, // XL screens
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // Large tablets & laptops
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Tablets & small devices
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480, // Small mobile screens
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Our Happy Clients
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Hear from clients who've experienced remarkable transformations with{" "}
          <span className="font-semibold text-blue-600">Filenod</span>.
        </p>

        {/* Slider */}
        <div className="mt-10 sm:mt-12 max-w-6xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="px-2 sm:px-3">
                <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-200 hover:border-blue-500 transition duration-300">
                  {/* Feedback */}
                  <p className="text-gray-700 italic text-sm sm:text-base mb-4">
                    "{t.feedback}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow"
                    />
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        {t.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">{t.position}</p>
                    </div>
                  </div>

                  {/* Star Ratings */}
                  <div className="mt-4 flex justify-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                    {[...Array(5 - t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

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
