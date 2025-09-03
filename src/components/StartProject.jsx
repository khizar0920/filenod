import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function StartProject() {
  const [files, setFiles] = useState([]);
  const [links, setLinks] = useState([""]);

  const handleFileChange = (e) => {
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
  };

  const addLinkField = () => {
    setLinks([...links, ""]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Start a Project</h1>

        {/* Progress Steps */}
        <div className="flex items-center mb-10">
          {["Service Details", "Project Info", "Files & References", "Review"].map((step, i) => (
            <div key={i} className="flex items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
                  i === 0
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {i + 1}
              </div>
              <p
                className={`ml-3 mr-6 text-sm font-medium ${
                  i === 0 ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Type */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Service Type
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Web Design</option>
              <option>App Development</option>
              <option>SEO Optimization</option>
              <option>Content Writing</option>
              <option>Graphic Design</option>
            </select>
          </div>

          {/* Project Title */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Project Title
            </label>
            <input
              type="text"
              placeholder="Enter a descriptive title for your project"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Describe your project requirements in detail"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Budget (Min)
            </label>
            <input
              type="number"
              placeholder="Min $"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Budget (Max)
            </label>
            <input
              type="number"
              placeholder="Max $"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Deadline */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Deadline
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* File Upload */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Upload Files
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
              <FaCloudUploadAlt className="text-3xl text-gray-400 mb-2" />
              <p className="text-gray-500">Drag files here or click to browse</p>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="fileUpload"
              />
            </div>
            <ul className="mt-3 text-gray-600 text-sm">
              {files.map((file, i) => (
                <li key={i}>📄 {file.name}</li>
              ))}
            </ul>
          </div>

          {/* Reference Links */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Reference Links
            </label>
            {links.map((link, index) => (
              <input
                key={index}
                type="url"
                placeholder="https://example.com"
                value={link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            ))}
            <button
              type="button"
              onClick={addLinkField}
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              + Add another link
            </button>
          </div>

          {/* Submit */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
