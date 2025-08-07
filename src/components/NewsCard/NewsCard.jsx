import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import deleteButtonDefault from "../../assets/delete-normal.png";
import deleteButtonHover from "../../assets/delete-hover.svg";
import bookmarknormal from "../../assets/bookmarknormal.svg";
import bookmarkhover from "../../assets/bookmarkhover.svg";
import { getToken } from "../../utils/token";
import { saveArticle, deleteArticle } from "../../utils/api";

const NewsCard = ({ article, isLoggedIn, searchQuery, onDeleteSuccess }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const isSaveArticles = location.pathname === "/saved-news";

  const handleSavedArticle = () => {
    const token = getToken();
    const articleData = {
      keyword: searchQuery,
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source?.name,
      link: article.url,
      image: article.urlToImage,
    };
    console.log("Sending article:", articleData);

    saveArticle(articleData, token)
      .then((articleData) => {
        console.log("saved articla:", articleData);
        setIsSaved(true);
      })
      .catch((err) => {
        console.error("Failed to save article", err);
      });
  };
  const handleDeleteArticle = () => {
    const token = getToken();
    console.log("Delete article ID:", article._id)
    deleteArticle(article._id, token)
      .then(() => {
        if (onDeleteSuccess) {
          onDeleteSuccess(article._id);
        }
      })
      .catch((err) => {
        console.error("Failed to delete article", err);
      });
  };
  return (
    <article className="news-card">
      <img
        src={article.urlToImage || article.image}
        alt={article.title}
        className="news-card__image"
      />
      <div className="news-card__content">
        <p className="news-card__date">
          {new Date(article.publishedAt || article.date).toDateString()}
        </p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">
          {article.description || article.text}
        </p>
        <p className="news-card__author">{article.author}</p>
        <button
          className="news-card__bookmark-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleSavedArticle}
        >
          <img
            className="news-card__bookmark"
            src={isHovered ? bookmarkhover : bookmarknormal}
            alt="bookmark"
          />
          {isHovered && (
            <span className="news-card__hover-message">
              {isLoggedIn
                ? "Click to save article"
                : "Sign in to save articles"}
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
              onClick={handleDeleteArticle}
            >
              <img
                className="news-card__bookmark"
                src={isHovered ? deleteButtonHover : deleteButtonDefault}
                alt="bookmark"
              />
              {isHovered && isLoggedIn && (
                <span className="news-card__hover-message">
                  {isLoggedIn
                ? "Remove saved artilce"
                : "Sign in to delete articles"}
                </span>
              )}
            </button>
          </>
        )}
      </div>
    </article>
  );
};

export default NewsCard;
