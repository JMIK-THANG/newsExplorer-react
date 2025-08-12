import React from "react";
import "./NewsGrid.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

const NewsGrid = ({ searchQuery, searchResults, onShowMore, isLoading,isLoggedIn, moreArticles, handleSigninClick }) => {
  return (
    <section className="news-grid">
      <h2 className="news-grid__title">Search Results</h2>
      <div className="news-grid__container">
        {searchResults.map((article) => (
          <li key={article.url} className="news-grid__item">
            <NewsCard article={article} isLoggedIn={isLoggedIn} searchQuery={searchQuery} handleSigninClick={handleSigninClick} />
          </li>
        ))}

        {isLoading && (
          <div className="news-preloader-wrapper">
            <Preloader />
          </div>
        )}
      </div>
      {moreArticles && !isLoading && (
        <div className="show-more-container">
          <button onClick={onShowMore} className="news-grid__show-more">
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default NewsGrid;
