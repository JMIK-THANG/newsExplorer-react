import React from "react";
import "./Navigation.css";
import menu from "../../assets/menu.svg";

const Navigation = ({ handleLoginClick }) => {
  return (
    <div className="navigation">
      <h1 className="navigation__logo">NewsExplorer</h1>
      <button  type="button" className="navigation__mobile">
        <img src={menu} alt="nav menu mobile" />
      </button>
      <div className="navigation__menu">
        <p className="navigation__link navigation__Link-home">Home</p>
        <button
          onClick={handleLoginClick}
          type="button"
          className="navigation__link navigation__link-signin"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navigation;
