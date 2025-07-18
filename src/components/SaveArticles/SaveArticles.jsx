import React, { useContext } from "react";
import "./SaveArticles.css";
import menu from "../../assets/menu.svg";
import news from "../../utils/news";
import { CurrentUserContext } from "../Contexts/CurrentUserContexts";
import NewsCard from "../NewsCard/NewsCard";
import { Link } from "react-router-dom";

const SaveArticles = ({ handleLoginClick, isLoggedIn, handleLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="navigation">
      <h1 className="navigation__logo">NewsExplorer</h1>
      <button type="button" className="navigation__mobile">
        <img src={menu} alt="nav menu mobile" />
      </button>
      {!isLoggedIn && (
        <div className="navigation__menu">
          <Link>
            <p className="navigation__link navigation__link-home">Home</p>
          </Link>
          <button
            onClick={handleLoginClick}
            type="button"
            className="navigation__link navigation__link-signin"
          >
            Sign in
          </button>
        </div>
      )}

      <div className="saved-articles">
        <h2 className="saved-articles__heading">Saved articles</h2>
        <h1 className="saved-articles__header">
          Elise, you have 5 saved articles
        </h1>
        <p className="saved-articles__name">By keywords: abc lsdfl</p>
        {news.map((item) => {
          return <NewsCard article={item} />;
        })}
      </div>
   </div>
  );
};

export default SaveArticles;
