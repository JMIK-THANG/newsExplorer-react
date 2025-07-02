import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = () => {
  const [searchItem, setSearchItem] = useState("");

  function newsTopic(e) {}
  return (
    <div className="search-form">
      <h1 className="search-form__heading">What's going on in <br />the world?</h1>
      <p className="search-form__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search-form__form">
        <input
          type="text"
          className="search-form__input"
          placeholder="Enter topic"
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
