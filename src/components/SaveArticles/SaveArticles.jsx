import React, { useContext } from "react";
import { CurrentUserContext } from "../Contexts/CurrentUserContexts";
import NewsCard from "../NewsCard/NewsCard";
import Navigation from "../Navigation/Navigation";
import news from "../../utils/news";
import "./SaveArticles.css";

const SaveArticles = ({ isLoggedIn, handleLogout }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
<hr className="horizontal"/>
      <div className="saved-articles">
        <h2 className="saved-articles__heading">Saved articles</h2>

        <h1 className="saved-articles__header">
          {currentUser?.name || "User"}, you have {news.length} saved articles
        </h1>

        <p className="saved-articles__keywords">
          By keywords:
          <span className="keyword-chip">Nature</span>
          <span className="keyword-chip">Yellowstone</span>
          <span className="keyword-chip">and 2 other</span>
        </p>

        <div className="news-card-container">
          {news.map((item, i) => (
            <NewsCard key={i} article={item}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default SaveArticles;
