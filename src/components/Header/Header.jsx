import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({handleLoginClick}) {
  return (
    <div className="header">
     <Navigation handleLoginClick={handleLoginClick} ></Navigation>
     <SearchForm/>
    </div>
  );
}

export default Header;