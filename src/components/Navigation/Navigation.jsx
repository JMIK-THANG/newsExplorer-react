import React, { useContext } from "react";
import "./Navigation.css";
import menu from "../../assets/menu.svg";
import darkMenuIcon from "../../assets/menu-dark.svg";
import Logout from "../../assets/logout.svg";
import logoutDark from "../../assets/logout-dark.png";
import { CurrentUserContext } from "../Contexts/CurrentUserContexts";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ handleSigninClick, isLoggedIn, handleLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const isSaveArticles = location.pathname === "/saved-news";
  return (
    <div className="navigation">
      <h1
        className={`navigation__logo ${
          isSaveArticles ? "navigation__logo_dark" : ""
        }`}
      >
        NewsExplorer
      </h1>
      <button type="button" className="navigation__mobile">
        <img src={isSaveArticles ? darkMenuIcon : menu} alt="nav menu mobile" />
      </button>
      {isLoggedIn && <div>{currentUser.name}</div>}
      {!isLoggedIn && (
        <div className="navigation__menu">
          <Link to="/" className="navigation__link navigation__link-home">
            Home
          </Link>

          <button
            onClick={handleSigninClick}
            type="button"
            className="navigation__link navigation__link-signin"
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
              className={`navigation-logged__link navigation-logged__Link-home ${
                isSaveArticles ? "navigation-logged__link_dark" : ""
              }`}
            >
              Home
            </Link>

            <Link
              to="/saved-news"
              className={`navigation-logged__link navigation-logged__article-save ${
                isSaveArticles ? "navigation-logged__link_dark" : ""
              }`}
            >
              Saved Articles
            </Link>

            <button
              onClick={handleLogout}
              type="button"
              className={`navigation-logged__button navigation-logged_link-logout ${
                isSaveArticles ? "navigation-logged__button_dark" : ""
              }`}
            >
              {currentUser.name}
              <img
                src={isSaveArticles ? logoutDark : Logout}
                alt="logout logo"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
