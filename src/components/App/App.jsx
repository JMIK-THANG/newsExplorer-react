import React, { useState, useEffect, useContext, Navigate } from "react";
import "./App.css";
import backgroundImg from "../../assets/background.svg";
import notfoundImg from "../../assets/notfound.svg";
import Header from "../../components/Header/Header";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import NewsGrid from "../NewsGrid/NewsGrid";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessRegisterModal from "../SucessRegisterModal/SuccessRegisterModal";
import { fetchNews } from "../../utils/api";
import Footer from "../Footer/Footer";
import { authorize, checkToken } from "../../utils/Auth";
import { CurrentUserContext } from "../Contexts/CurrentUserContexts";
import { Route, Routes } from "react-router-dom";
import SaveArticles from "../SaveArticles/SaveArticles";
const App = () => {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = ({ email, password }) => {
    authorize(email, password).then((data) => {
      checkToken(data.token).then((data) => {
        setCurrentUser(data.data);
        setIsLoggedIn(true);
        handleCloseClick();
      });
    });
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setSearchQuery(query);
    setIsLoading(true);
    setCurrentPage(1);
    try {
      const { articles, totalResults } = await fetchNews(query, 3, 1);
      setSearchResults(articles);
      setTotalResults(totalResults);
      setError(null);
    } catch (err) {
      setError("Error fetching news. Please try again.");
      setSearchResults([]);
      setTotalResults(0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = async () => {
    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const { articles } = await fetchNews(searchQuery, 3, nextPage);
      setSearchResults((prev) => [...prev, ...articles]);
      setCurrentPage(nextPage);
      setError(null);
    } catch (err) {
      setError("Error loading more articles. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const moreArticles = searchResults.length < totalResults;

  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleSigninClick = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      setActiveModal("signin");
    }
  };
  const handleSignupClick = () => {
    setActiveModal("signup");
  };
  const handleSuccessRegistration = () => {
    setActiveModal("success");
  };
  const handleCloseClick = () => {
    setActiveModal("");
  };
  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    const handleOverlayClick = (e) => {
      if (e.target.classList.contains("modal_opened")) {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [activeModal]);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__section">
          <div className="page__content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header
                      handleLoginClick={handleSigninClick}
                      isLoggedIn={isLoggedIn}
                      onSearch={handleSearch}
                      handleLogout={handleLogout}
                    />
                    {isLoading && <Preloader />}
                    {!isLoading && error && <div>{error}</div>}
                    {!isLoading && searchResults.length > 0 && (
                      <NewsGrid
                        searchResults={searchResults}
                        onShowMore={handleShowMore}
                        moreArticles={moreArticles}
                      />
                    )}
                    {!isLoading &&
                      searchResults.length === 0 &&
                      searchQuery && (
                        <div className="no-results">
                          <img src={notfoundImg} alt="not found image" />
                          <h1>Nothing found</h1>
                          <p>
                            Sorry but nothing matched your search item"
                            {searchQuery}"
                          </p>
                        </div>
                      )}
                    <About />
                  </>
                }
              ></Route>
              <Route
                path="/saved-news"
                element={
                  <SaveArticles
                    handleLoginClick={handleCloseClick}
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                  />
                }
              ></Route>
            </Routes>
            <RegisterModal
              isOpen={activeModal === "signup"}
              handleCloseClick={handleCloseClick}
              handleSigninClick={handleSigninClick}
              handleSuccessRegistration={handleSuccessRegistration}
            />
            <LoginModal
              isOpen={activeModal === "signin"}
              handleCloseClick={closeActiveModal}
              handleSignupClick={handleSignupClick}
              handleLogin={handleLogin}
            />
            <SuccessRegisterModal
              isOpen={activeModal === "success"}
              handleSigninclick={handleSigninClick}
              handleCloseClick={handleCloseClick}
            />
            <Footer />
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
