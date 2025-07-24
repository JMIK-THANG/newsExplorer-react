import React from "react";
import "./NewsGrid.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

const NewsGrid = ({ searchResults, onShowMore, isLoading, moreArticles }) => {
  return (
    <section className="news-grid">
      <h2 className="news-grid__title">Search Results</h2>
      <div className="news-grid__container">
        {searchResults.map((article) => (
          <li key={article.url} className="news-grid__item">
            <NewsCard article={article} />
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
          <button className="news-grid__show-more" onClick={onShowMore}>
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default NewsGrid;
