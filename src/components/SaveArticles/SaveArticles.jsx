import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../Contexts/CurrentUserContexts";
import NewsCard from "../NewsCard/NewsCard";
import Navigation from "../Navigation/Navigation";
import "./SaveArticles.css";
import { getUserArticles } from "../../utils/api";
import { getToken } from "../../utils/token";

const SaveArticles = ({ isLoggedIn, handleLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const [userArticles, setUserArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    getUserArticles(token)
      .then((data) => {
        setUserArticles(data);
      })
      .catch((err) => {
        console.error("Failed to fetch saved articles: ", err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleDeleteSuccess = (id) => {
    setUserArticles((prev) => prev.filter((article) => article._id !== id));
  };
  return (
    <>
      <header className="saved-news-header">
        <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      </header>
      <main className="saved-articles">
        <h2 className="saved-articles__heading">Saved articles</h2>

        <h1 className="saved-articles__header">
          {currentUser?.name || "User"}, you have {userArticles.length} saved
          articles
        </h1>

        <p className="saved-articles__keywords">
          By keywords:
          <span className="keyword-chip">fjalsdf{userArticles.title}</span>
        </p>
        <section className="saved-articles__cards">
          <div className="news-card-container">
            {userArticles.map((article, i) => (
              <NewsCard
                key={article._id}
                article={article}
                isLoggedIn={isLoggedIn}
                onDeleteSuccess={handleDeleteSuccess}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default SaveArticles;
