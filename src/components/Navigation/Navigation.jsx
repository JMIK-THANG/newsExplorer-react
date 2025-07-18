import React, { useContext} from "react";
import "./Navigation.css";
import menu from "../../assets/menu.svg";
import Logout from "../../assets/logout.svg"
import { CurrentUserContext } from "../Contexts/CurrentUserContexts";
import { CurrentLocationContext } from "../Contexts/CurrentLocationContexts";
import { Link } from "react-router-dom";
import news from "../../utils/news"
import NewsCard from "../NewsCard/NewsCard";
import NewsGrid from "../NewsGrid/NewsGrid";

const Navigation = ({ handleLoginClick, isLoggedIn, handleLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const currentLocation = useContext(CurrentLocationContext)
  return (
    <div className="navigation">
      <h1 className="navigation__logo">NewsExplorer</h1>
      <button type="button" className="navigation__mobile">
        <img src={menu} alt="nav menu mobile" />
      </button>
      {isLoggedIn && <div>{currentUser.name}</div>}
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
      {isLoggedIn && 
     
      <div className="navigation-logged">
            <div className="navigation-logged__menu">
              <Link>
                <p className="navigation-logged__link navigation-logged__Link-home">
                  Home
                </p>
              </Link>
              <Link to="/saved-news">
                <p className="navigation-logged__article-save">Save Articles</p>
              </Link>
              <button
                onClick={() => {
                  console.log("Logout button clicked");
                  handleLogout();
                }}
                type="button"
                className="navigation-logged__button navigation-logged__link-logout"
              >
                Jmik
                <img src={Logout} alt="logout logo" />
              </button>
            </div>
          </div>
      
      }
       {/* <div className="saved-articles">
        <h2 className="saved-articles__heading">Saved articles</h2>
        <h1 className="saved-articles__header">
          Elise, you have 5 saved articles
        </h1>
        <p className="saved-articles__name">By keywords: abc lsdfl</p>
        {news.map((item, id) => {
          return <NewsGrid key ={id} article={item} />;
        })}
      </div> */}
    </div>
  );
};

export default Navigation;
