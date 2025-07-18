import { useContext } from "react";
import "./SaveArticles.css";
import menu from "../../assets/menu.svg";
import news from "../../utils/news";
import { CurrentUserContext } from "../Contexts/CurrentUserContexts";
import NewsCard from "../NewsCard/NewsCard";
import { Link } from "react-router-dom";

const SaveArticles = ({ handleLoginClick, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div>
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
      </div>

      <div className="saved-articles">
        <h2 className="saved-articles__heading">Saved articles</h2>
        <h1 className="saved-articles__header">
          {currentUser?.name || "Elise"}, you have {news.length} saved articles
        </h1>
        <p className="saved-articles__name">
          By keywords:
          <span className="keyword-chip">Nature</span>
          <span className="keyword-chip">Yellowstone</span>
          <span className="keyword-chip">and 2 other</span>
        </p>

        <div className="news-card-container">
          {news.map((item, i) => (
            <NewsCard key={i} article={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaveArticles;
