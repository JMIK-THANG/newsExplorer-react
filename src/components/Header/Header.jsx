import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({ handleLoginClick, isLoggedIn, onSearch}) {
  return (
    <div className="header">
      <Navigation
        handleLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
      ></Navigation>
      <SearchForm onSearch={onSearch}/>
    </div>
  );
}

export default Header;
