import React from "react";
import logout from "../../assets/logout.svg";
import "./NavLoggedIn.css";
import { Link } from "react-router-dom";

const NavLoggedIn = ({ handleLogout }) => {
  return (
    <div className="navigation-logged">
      <div className="navigation-logged__menu">
        <Link>
          <p className="navigation-logged__link navigation-logged__Link-home">
            Home
          </p>
        </Link>
        <Link to="/saved-news">
          <p className="navigation-logged__article-save">Save Articles</p>
        </Link>
        <button
          onClick={() => {
            console.log("Logout button clicked");
            handleLogout();
          }}
          type="button"
          className="navigation-logged__button navigation-logged__link-logout"
        >
          Jmik
          <img src={logout} alt="logout logo" />
        </button>
      </div>
    </div>
  );
};

export default NavLoggedIn;
