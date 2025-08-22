import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const featuredArticles = [
    {
      title: "10 Proven SEO Strategies for 2025",
      description:
        "Discover the latest SEO techniques that will dominate search rankings and help you grow your online presence in 2025.",
      image: "/blog/seo-strategies-2025.jpg",
      link: "/blog/seo-strategies-2025",
    },
    {
      title: "How to Choose the Right Hosting Plan for Your Business",
      description:
        "Learn how to select the perfect hosting plan based on speed, scalability, and security for your growing business.",
      image: "/blog/hosting-plan.jpg",
      link: "/blog/choose-hosting",
    },
    {
      title: "Why Every B2B Business Needs a Client Portal",
      description:
        "Understand the benefits of having a client portal to streamline operations, improve customer satisfaction, and increase efficiency.",
      image: "/blog/client-portal.jpg",
      link: "/blog/client-portal",
    },
  ];

  const categories = [
    { title: "SEO & Search Marketing", desc: "Guides, tips, and algorithm updates" },
    { title: "Web Hosting & Security", desc: "Hosting reviews and cybersecurity insights" },
    { title: "B2B & Client Portals", desc: "Efficient client management strategies" },
    { title: "Digital Marketing", desc: "Social media, PPC, and branding tips" },
    { title: "Case Studies", desc: "Real-world success stories from Filenod clients" },
  ];

  const blogPosts = [
    {
      title: "Top 5 Digital Marketing Trends to Watch in 2025",
      description:
        "From AI-powered content strategies to next-gen analytics, discover the biggest trends shaping digital marketing.",
      image: "/blog/digital-trends.jpg",
      link: "/blog/digital-trends-2025",
    },
    {
      title: "Boost Your Website Speed with These Hosting Hacks",
      description:
        "Slow websites lose customers. Here’s how to optimize your hosting for maximum speed and performance.",
      image: "/blog/speed-optimization.jpg",
      link: "/blog/website-speed",
    },
    {
      title: "The Future of SEO: Voice Search & AI Integration",
      description:
        "Voice search and AI are reshaping SEO. Learn how to adapt your strategy to stay competitive.",
      image: "/blog/voice-ai-seo.jpg",
      link: "/blog/voice-ai-seo",
    },
  ];

  const scrollToSubscribe = () => {
    document.getElementById("subscribe")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Insights, Tips, and Strategies for Digital Growth
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay ahead with the latest trends in SEO, hosting, and business technology — written by our in-house experts.
          </p>
          <button
            onClick={scrollToSubscribe}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Subscribe for Updates →
          </button>
        </div>

        {/* Featured Articles */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {featuredArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{article.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm">{article.description}</p>
                  <Link
                    to={article.link}
                    className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Explore Topics You Care About</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-blue-600">{category.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm">{post.description}</p>
                  <Link
                    to={post.link}
                    className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div
          id="subscribe"
          className="mt-20 bg-blue-600 rounded-2xl shadow-lg p-8 md:p-10 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white">Get the Latest Straight to Your Inbox</h2>
          <p className="mt-3 text-blue-100">
            Subscribe to receive expert tips, SEO strategies, and hosting insights.
          </p>

          <form
  className="mt-6 md:grid md:grid-cols-[1fr_1fr_auto] gap-4 flex flex-col"
  onSubmit={(e) => e.preventDefault()}
  noValidate
>
  {/* Honeypot (optional anti-bot) */}
  <input
    type="text"
    name="company"
    className="hidden"
    tabIndex={-1}
    autoComplete="off"
  />

  {/* Name Input */}
  <div className="text-left">
    <label htmlFor="subscriber-name" className="sr-only">
      Your Name
    </label>
    <input
      id="subscriber-name"
      name="name"
      type="text"
      placeholder="Your Name"
      autoComplete="name"
      required
      className="w-full h-12 px-4 rounded-lg 
                 bg-white text-gray-800 
                 border border-gray-300 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 placeholder-gray-500 shadow-sm"
    />
  </div>

  {/* Email Input */}
  <div className="text-left">
    <label htmlFor="subscriber-email" className="sr-only">
      Your Email
    </label>
    <input
      id="subscriber-email"
      name="email"
      type="email"
      placeholder="Your Email"
      autoComplete="email"
      required
      className="w-full h-12 px-4 rounded-lg 
                 bg-white text-gray-800 
                 border border-gray-300 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 placeholder-gray-500 shadow-sm"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="h-12 px-6 rounded-lg font-semibold 
               bg-white text-blue-600 
               hover:bg-blue-700 hover:text-white 
               border border-white shadow-md 
               transition"
    aria-label="Subscribe Now"
  >
    Subscribe Now
  </button>
</form>


          <p className="mt-3 text-xs text-blue-100">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-gray-100 rounded-2xl shadow-lg p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Have a Topic You Want Us to Cover?</h2>
          <p className="mt-3 text-gray-600 text-lg">
            We love answering questions from our readers — tell us what you want to learn about next.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Suggest a Topic →
          </Link>
        </div>
      </div>
    </section>
  );
}
