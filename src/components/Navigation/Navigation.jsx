import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="navigation container">
      <h1 className="navigation__logo">NewsExplorer</h1>
      <div className="navigation__menu">
        <p className="navigation__home">Home</p>
        <button className="navigation__signin">Sign in</button>
      </div>
    </div>
  );
};

export default Navigation;
