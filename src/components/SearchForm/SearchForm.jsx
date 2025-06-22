import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = () => {
  const [searchItem, setSearchItem] = useState("");

  function newsTopic(e) {}
  return (
    <div className="searchForm">
      <h1 className="searchForm__heading">What's going on in the world?</h1>
      <p className="searchForm__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="searchForm__container">
        <input
          type="text"
          className="searchForm__input"
          placeholder="Enter topic"
        />
        <button className="searchForm__button">Search</button>
      </div>
    </div>
  );
};

export default SearchForm;