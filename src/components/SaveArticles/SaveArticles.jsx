import React, { useContext } from "react";
import "./SaveArticles.css";
import menu from "../../assets/menu.svg";
import NavLoggedIn from "../Navigation/NavLoggedIn";
import news from "../../utils/news";
import { CurrentUserContext } from "../Contexts/CurrentUserContexts";
import NewsCard from "../NewsCard/NewsCard";

const SaveArticles = ({ handleLoginClick, isLoggedIn, handleLogout }) => {
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

      <div className="saved-articles">
        {news.map((item) => {
          return <NewsCard article={item} />;
        })}
        <h2 className="saved-articles__heading">Saved articles</h2>
        <h1 className="saved-articles__header">
          Elise, you have 5 saved articles
        </h1>
        <p className="saved-articles__name">By keywords: abc lsdfl</p>
      </div>
    </div>
  );
};

export default SaveArticles;
