import React, { useContext } from "react";
import "./Navigation.css";
import menu from "../../assets/menu.svg";
import NavLoggedIn from "./NavLoggedIn";
import { CurrentUserContext } from "../Contexts/CurrentUserContexts";

const Navigation = ({ handleLoginClick, isLoggedIn, handleLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="navigation">
      <h1 className="navigation__logo">NewsExplorer</h1>
      <button type="button" className="navigation__mobile">
        <img src={menu} alt="nav menu mobile" />
      </button>
      {isLoggedIn && <div>{currentUser.name}</div>}
      {!isLoggedIn && (
        <div className="navigation__menu">
          <p className="navigation__link navigation__link-home">Home</p>
          <button
            onClick={handleLoginClick}
            type="button"
            className="navigation__link navigation__link-signin"
          >
            Sign in
          </button>
        </div>
      )}

      {isLoggedIn && <NavLoggedIn handleLogout={handleLogout} />}
    </div>
  );
};

export default Navigation;
