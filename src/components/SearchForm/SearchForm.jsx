import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchItem.trim()) {
      onSearch(searchItem.trim());
    }
  };

  return (
    <div className="search-form">
      <h1 className="search-form__heading">What's going on in the world?</h1>
      <p className="search-form__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-form__input"
          placeholder="Enter topic"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
