"use client";
import { useState } from "react";

export default function Internet({ onClose }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    }
  };

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-gray-200 border-2 border-gray-500 w-[500px] h-[400px] shadow-xl flex flex-col">
      {/* Title Bar */}
      <div className="bg-blue-700 text-white flex justify-between items-center px-3 py-1">
        <span className="font-bold text-sm">Internet Explorer</span>
        <button
          onClick={onClose}
          className="bg-red-600 px-2 text-white font-bold text-sm"
        >
          X
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 bg-white flex flex-col items-center justify-start">
        <h2 className="text-lg font-bold mb-4">Search the Web</h2>
        <form onSubmit={handleSearch} className="flex w-full max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border border-gray-400 px-2 py-1"
            placeholder="Type your search..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 border border-gray-600"
          >
            Go
          </button>
        </form>

        {/* External Links */}
        <div className="mt-6 space-y-2 text-blue-700 underline">
          <a href="https://github.com/yourusername" target="_blank">GitHub</a><br />
          <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a><br />
          <a href="https://yourwebsite.com" target="_blank">Portfolio</a>
        </div>
      </div>
    </div>
  );
}
