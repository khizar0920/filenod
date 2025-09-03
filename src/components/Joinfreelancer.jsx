import React, { useState } from "react";

export default function JoinFreelancer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    industry: "",
    skills: "",
    experience: "",
    portfolio: "",
    bio: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Freelancer Form Submitted:", formData);
    alert("Freelancer profile submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Join as a Freelancer
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          {/* Phone & Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Phone *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Country *</label>
              <input
                type="text"
                name="country"
                placeholder="Enter your country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-gray-700 font-medium">Industry *</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            >
              <option value="">Select Industry</option>
              <option>Web Development</option>
              <option>Mobile Development</option>
              <option>Graphic Design</option>
              <option>Digital Marketing</option>
              <option>Content Writing</option>
              <option>Data Science</option>
            </select>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-gray-700 font-medium">Skills *</label>
            <input
              type="text"
              name="skills"
              placeholder="E.g. React, Node.js, Tailwind"
              value={formData.skills}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-700 font-medium">Experience (Years) *</label>
            <input
              type="number"
              name="experience"
              placeholder="Enter years of experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          {/* Portfolio */}
          <div>
            <label className="block text-gray-700 font-medium">Portfolio Link</label>
            <input
              type="url"
              name="portfolio"
              placeholder="https://yourportfolio.com"
              value={formData.portfolio}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-gray-700 font-medium">Short Bio *</label>
            <textarea
              name="bio"
              placeholder="Tell us about yourself"
              value={formData.bio}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Join as Freelancer
          </button>
        </form>
      </div>
    </div>
  );
}
