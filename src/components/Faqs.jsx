import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../seo/HelmetConfig";

const faqsData = [
  {
    section: "General Information About Filenod",
    faqs: [
      {
        question: "What services does Filenod offer?",
        answer:
          "We specialize in digital marketing, SEO, web hosting, domain registration, and custom client portal systems for both B2C and B2B clients.",
      },
      {
        question: "Where are you located?",
        answer: "Our main office is in [Region], but we work with clients worldwide.",
      },
      {
        question: "Do you work with small businesses and startups?",
        answer:
          "Yes! Our services are scalable, making them perfect for small businesses, startups, and enterprises alike.",
      },
    ],
  },
  {
    section: "SEO & Marketing Services",
    faqs: [
      {
        question: "How long does it take to see SEO results?",
        answer:
          "Most clients see noticeable improvements within 3–6 months, depending on competition and current website performance.",
      },
      {
        question: "Do you offer ongoing SEO maintenance?",
        answer:
          "Absolutely. We provide continuous optimization, keyword updates, and performance monitoring to maintain and improve your rankings.",
      },
    ],
  },
  {
    section: "Web Hosting and Domain Services",
    faqs: [
      {
        question: "What makes your hosting different from others?",
        answer:
          "Our hosting is fast, secure, and includes daily backups, SSL certificates, and 24/7 expert support — all tailored to your business needs.",
      },
      {
        question: "Can I transfer my existing domain to Filenod?",
        answer: "Yes, we handle domain transfers with zero downtime.",
      },
    ],
  },
  {
    section: "Client Portals and Partner Solutions",
    faqs: [
      {
        question: "How does the client portal work?",
        answer:
          "Clients can log in to view project progress, order history, and invoices. B2B partners can also manage their own clients through a multi-tier system.",
      },
      {
        question: "Can I white-label Filenod services for my clients?",
        answer: "Yes, we offer white-label solutions for agencies and resellers.",
      },
    ],
  },
  {
    section: "Billing and Support",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept major credit cards, bank transfers, and PayPal.",
      },
      {
        question: "How can I get technical support?",
        answer:
          "Support is available via phone, email, and our ticketing system in the client portal — 24/7 for hosting-related issues.",
      },
    ],
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-200 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center font-medium text-gray-800 hover:text-blue-600 transition"
      >
        <span>{question}</span>
        <span>{open ? "-" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>FAQs | Filenod – Your Questions About Digital Services Answered</title>
        <meta
          name="description"
          content="Find answers to the most common questions about Filenod’s digital marketing, SEO, hosting, and client portal services."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Got Questions? We’ve Got Answers.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Explore our most frequently asked questions to understand our services, process, and how we help businesses grow.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Contact Us for More Info →
        </a>
      </section>

      {/* FAQ Sections */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        {faqsData.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{section.section}</h2>
            <div className="space-y-4">
              {section.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        ))}

        {/* Final CTA Banner */}
        <section className="bg-blue-600 text-white text-center py-12 rounded-md">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6">We’re happy to help — just reach out and we’ll get you the answers you need.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Contact Us Now →
          </a>
        </section>
      </div>
    </div>
  );
};

export default FAQs;
