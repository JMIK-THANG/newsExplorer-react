import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({ handleLoginClick, isLoggedIn, onSearch, handleLogout }) {
  return (
    <div className="header">
      <Navigation
        handleLogout={handleLogout}
        handleLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
      ></Navigation>
      <SearchForm onSearch={onSearch} />
    </div>
  );
}

export default Header;
