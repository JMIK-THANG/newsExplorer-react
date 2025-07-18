import React, { useContext } from "react";
import "./Navigation.css";
import menu from "../../assets/menu.svg";
import Logout from "../../assets/logout.svg";
import { CurrentUserContext } from "../Contexts/CurrentUserContexts";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ handleLoginClick, isLoggedIn, handleLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  console.log(location);
  const isSaveArticles = location.pathname === "/saved-news";
  return (
    <div className={`navigation ${isSaveArticles ? "navigation_dark" : ""}`}>
      <h1
        className={`navigation__logo ${
          isSaveArticles ? "navigation__logo_dark" : ""
        }`}
      >
        NewsExplorer
      </h1>
      <button type="button" className="navigation__mobile">
        <img src={menu} alt="nav menu mobile" />
      </button>
      {isLoggedIn && <div>{currentUser.name}</div>}
      {!isLoggedIn && (
        <div className="navigation__menu">
          <Link to="/" className="navigation_link navigation_link-home">
            Home
          </Link>

          <button
            onClick={handleLoginClick}
            type="button"
            className="navigation_link navigation_link-signin"
          >
            Sign in
          </button>
        </div>
      )}
      {isLoggedIn && (
        <div className="navigation-logged">
          <div className="navigation-logged__menu">
            <Link
              to="/"
              className="navigation-logged__link navigation-logged__Link-home"
            >
              Home
            </Link>

            <Link to="/saved-news" className="navigation-logged__article-save">
              Save Articles
            </Link>
            <button
              onClick={() => {
                console.log("Logout button clicked");
                handleLogout();
              }}
              type="button"
              className="navigation-logged_button navigation-logged_link-logout"
            >
              Jmik
              <img src={Logout} alt="logout logo" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
