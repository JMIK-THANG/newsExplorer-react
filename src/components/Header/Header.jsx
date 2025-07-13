import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({ handleLoginClick, isLoggedIn }) {
  return (
    <div className="header">
      <Navigation
        handleLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
      ></Navigation>
      <SearchForm />
    </div>
  );
}

export default Header;
