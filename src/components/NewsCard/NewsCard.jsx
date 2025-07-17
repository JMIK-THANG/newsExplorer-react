import React, { useState } from "react";
import "./NewsCard.css";
import bookmarknormal from "../../assets/bookmarknormal.svg";
import bookmarkhover from "../../assets/bookmarkhover.svg";
const NewsCard = ({ article }) => {
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="news-card">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-card__image"
      />
      <div className="news-card__content">
        <p className="news-card__date">
          {new Date(article.publishedAt).toDateString()}
        </p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <p className="news-card__author">{article.author}</p>
        <div
          className="news-card__bookmark-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="news-card__bookmark"
            src={isHovered ? bookmarkhover : bookmarknormal}
            alt="bookmark"
          />
          {isHovered && (
            <span className="news-card__hover-message">
              Sign in to save articles
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
