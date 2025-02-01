import React, { useState, useEffect, useMemo } from "react";
import "./searchProvider.css";
import Button from "../Button";
import predefinedProviders from "./initialServiceProviders";

const SearchProvider = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProviders, setFilteredProviders] = useState([]);

  // Load service providers from local storage (for offline mode)
  const [localStorageProviders, setLocalStorageProviders] = useState([]);
  useEffect(() => {
    const getServiceProvider = localStorage.getItem("Service Provider");
    if (getServiceProvider) {
      setLocalStorageProviders(JSON.parse(getServiceProvider));
    }
  }, []);

  // Memoize the combined providers array
  const allProviders = useMemo(() => {
    return [...predefinedProviders, ...localStorageProviders];
  }, [localStorageProviders]); // Recalculate only when localStorageProviders changes

  // Update filteredProviders when allProviders changes
  useEffect(() => {
    setFilteredProviders(allProviders);
  }, [allProviders]); // Add allProviders as a dependency

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setFilteredProviders(allProviders);
    } else {
      const filtered = allProviders.filter((provider) =>
        provider.profession.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProviders(filtered);
    }
  };

  return (
    <div className="entire_search_container">
      <div className="search-container">
        <h1 className="search-title">Find Service Provider</h1>

        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-wrapper">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by profession..."
              className="search-input"
            />
            <Button type="submit" className="search-button">
              <i className="fa fa-search" aria-hidden="true"></i>
            </Button>
          </div>
        </form>
      </div>

      {filteredProviders.length > 0 ? (
        <div className="providers-list">
          <h2>Service Providers</h2>
          <div className="providers-container">
            {filteredProviders.map((provider, index) => (
              <div key={index} className="provider-item">
                {(provider.avatar || provider.src) && (
                  <img
                    src={provider.avatar || provider.src}
                    alt="Avatar"
                    className="provider-avatar"
                  />
                )}
                <span>{provider.name}</span>
                <span>{provider.profession}</span>
                <span>{provider.email}</span>
                <span>{provider.phone}</span>
                <Button className="book_provider_btn">Book</Button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="no-results">No matching service providers found.</p>
      )}
    </div>
  );
};

export default SearchProvider;