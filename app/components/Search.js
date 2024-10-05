"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(""); // New state for category
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim()) {
      // Construct URL with both query and category
      let searchUrl = `/search?query=${encodeURIComponent(query)}`;
      if (category) {
        searchUrl += `&category=${encodeURIComponent(category)}`;
      }
      router.push(searchUrl); // Push the constructed URL
    }
  };

  return (
    <form className="flex" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products..."
        className="w-full h-10 px-6 border-2 border-blue-600 border-r-0 rounded-l-full focus:outline-none"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)} // Update category state
        className="h-10 px-2 border-2 border-blue-600 border-l-0 bg-white focus:outline-none text-sm"
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home</option>
        <option value="books">Books</option>
      </select>

      <button
        type="submit"
        className="h-10 pl-3 pr-4 bg-blue-600 text-white rounded-r-full border-2 border-blue-600"
      >
        <FaSearch />
      </button>
    </form>
  );
};
