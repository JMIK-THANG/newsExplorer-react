import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import deleteButtonDefault from "../../assets/delete-normal.png";
import deleteButtonHover from "../../assets/delete-hover.svg";
import bookmarknormal from "../../assets/bookmarknormal.svg";
import bookmarkhover from "../../assets/bookmarkhover.svg";

const NewsCard = ({ article }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isSaveArticles = location.pathname === "/saved-news";
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
        <button
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
              Sign in to save
            </span>
          )}
        </button>
        {isSaveArticles && (
          <>
            <p className="news-card__keyword">{article.keyword}</p>
            <button
              className="news-card__bookmark-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                className="news-card__bookmark"
                src={isHovered ? deleteButtonHover : deleteButtonDefault}
                alt="bookmark"
              />
              {isHovered && (
                <span className="news-card__hover-message">
                  Remove from saved
                </span>
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
