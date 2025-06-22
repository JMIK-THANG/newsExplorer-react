import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header() {
  return (
    <div className="header">
     <Navigation></Navigation>
     <SearchForm/>
    </div>
  );
}

export default Header;