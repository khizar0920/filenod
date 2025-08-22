import React, { useState } from "react";
import Helmet from "../seo/HelmetConfig";

const templatesData = [
  {
    id: 1,
    title: "Corporate Website Template",
    industry: "Business",
    category: "Website",
    type: "Landing Page",
    thumbnail: "/images/templates/corporate.jpg",
    description: "Professional corporate template suitable for businesses and agencies.",
    featured: true,
    link: "/template/1",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    industry: "Retail",
    category: "Dashboard",
    type: "Admin Panel",
    thumbnail: "/images/templates/ecommerce.jpg",
    description: "Modern e-commerce dashboard for managing products and orders.",
    featured: true,
    link: "/template/2",
  },
  {
    id: 3,
    title: "Portfolio Showcase",
    industry: "Creative",
    category: "Website",
    type: "Portfolio",
    thumbnail: "/images/templates/portfolio.jpg",
    description: "Stylish portfolio template to showcase creative work and projects.",
    featured: false,
    link: "/template/3",
  },
  // Add more templates here...
];

const TemplateCard = ({ template }) => (
  <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
    <img
      src={template.thumbnail}
      alt={template.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{template.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{template.industry}</p>
      <p className="text-gray-700 mb-4">{template.description}</p>
      <a
        href={template.link}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        View Template
      </a>
    </div>
  </div>
);

const TemplateGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const filteredTemplates = templatesData.filter(
    (t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterIndustry === "" || t.industry === filterIndustry) &&
      (filterCategory === "" || t.category === filterCategory)
  );

  const featuredTemplates = templatesData.filter((t) => t.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Template Gallery | Filenod – Project Templates & Business Solutions</title>
        <meta
          name="description"
          content="Explore Filenod's template gallery. Browse project templates, industry-specific templates, and business solution examples ready to use."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Our Template Gallery
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Browse ready-to-use templates designed for various industries and purposes.
        </p>

        {/* Search / Filter */}
        <div className="flex flex-col md:flex-row justify-center gap-3 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search templates..."
            className="p-3 rounded-md w-full md:w-1/3 text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filterIndustry}
            onChange={(e) => setFilterIndustry(e.target.value)}
            className="p-3 rounded-md w-full md:w-1/4 text-gray-700"
          >
            <option value="">All Industries</option>
            <option value="Business">Business</option>
            <option value="Creative">Creative</option>
            <option value="Retail">Retail</option>
          </select>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-3 rounded-md w-full md:w-1/4 text-gray-700"
          >
            <option value="">All Categories</option>
            <option value="Website">Website</option>
            <option value="Dashboard">Dashboard</option>
            <option value="Portfolio">Portfolio</option>
          </select>
        </div>
      </section>

      {/* Featured Templates Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Templates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredTemplates.map((template) => (
            <div key={template.id} className="relative">
              <span className="absolute top-2 left-2 bg-yellow-400 text-gray-900 px-2 py-1 text-xs font-bold rounded">
                Featured
              </span>
              <TemplateCard template={template} />
            </div>
          ))}
        </div>
      </section>

      {/* All Templates Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">All Templates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Request a Custom Template</h2>
        <p className="mb-6">
          Don’t see what you need? Our team can create a custom template tailored for your business.
        </p>
        <a
          href="/request-template"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
        >
          Request a Custom Template
        </a>
      </section>
    </div>
  );
};

export default TemplateGallery;
