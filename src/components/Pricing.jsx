import React from "react";

export default function Pricingcom() {
  const plans = [
    {
      name: "Starter",
      price: "$199 / month",
      description: "Perfect for small businesses starting their digital journey.",
      features: [
        "Basic SEO Optimization",
        "5 Pages Website",
        "1 GB Hosting",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$499 / month",
      description: "Best for growing businesses looking to scale online.",
      features: [
        "Advanced SEO Optimization",
        "15 Pages Website",
        "5 GB Hosting",
        "Priority Support",
        "Monthly Performance Reports",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "Tailored solutions for enterprises and large-scale projects.",
      features: [
        "Complete Digital Marketing",
        "Unlimited Pages Website",
        "Dedicated Hosting",
        "24/7 VIP Support",
        "Dedicated Account Manager",
      ],
      popular: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Transparent Pricing, Maximum Value
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a plan that suits your business needs — no hidden charges, no surprises.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-600 hover:text-white transition">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Pricing Plans
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Simple, transparent, and designed to grow with your business.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 border ${
                  plan.popular
                    ? "border-blue-600 shadow-2xl"
                    : "border-gray-200"
                } transition transform hover:-translate-y-2 hover:shadow-2xl duration-300`}
              >
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-blue-600 text-3xl font-bold mt-4">
                  {plan.price}
                </p>
                <p className="mt-2 text-gray-600">{plan.description}</p>

                <ul className="mt-6 space-y-3 text-gray-700 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-6 w-full px-6 py-3 rounded-lg font-semibold shadow transition ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Filenod?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We’re more than just a service provider — we’re your digital growth partner.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["No Hidden Costs", "Flexible Plans", "24/7 Support", "High Performance"].map(
              (benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                  <p className="text-blue-600 font-semibold">{benefit}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-3 text-lg max-w-2xl mx-auto">
            Choose the perfect plan today and scale with confidence.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border border-white font-semibold rounded-lg shadow hover:bg-white hover:text-blue-600 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
