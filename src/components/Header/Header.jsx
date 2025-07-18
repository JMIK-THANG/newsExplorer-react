import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({ onSearch }) {
  return (
    <div className="header">
      <SearchForm onSearch={onSearch} />
    </div>
  );
}

export default Header;
