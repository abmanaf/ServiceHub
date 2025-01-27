import React, { useState } from "react";
import "./searchProvider.css";

const SearchProvider = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="search-container">
      <h1 className="search-title">Find service provider</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-wrapper">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search.."
            className="search-input"
          />
          <button type="submit" className="search-button">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchProvider;
