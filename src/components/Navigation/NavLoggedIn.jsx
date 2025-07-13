
import React from "react";
import logout from "../../assets/logout.svg";
import "./NavLoggedIn.css";

const NavLoggedIn = () => {
  return (
    <div className="navigation-logged">
      <div className="navigation-logged__menu">
        <p className="navigation-logged__link navigation-logged__Link-home">Home</p>
        <p className="navigation-logged__article-save">Save Articles</p>
        <button
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
