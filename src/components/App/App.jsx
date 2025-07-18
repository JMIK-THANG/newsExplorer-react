import React, { useState, useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import "./App.css";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessRegisterModal from "../SucessRegisterModal/SuccessRegisterModal";
import { authorize, checkToken } from "../../utils/Auth";

import Footer from "../Footer/Footer";
import SaveArticles from "../SaveArticles/SaveArticles";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";

import { CurrentUserContext } from "../Contexts/CurrentUserContexts";
import { CurrentLocationContext } from "../Contexts/CurrentLocationContexts";

const App = () => {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentLocation, setCurrentLocation] = useState("/");

  const location = useLocation();
  console.log("location", location);

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
      <CurrentLocationContext.Provider value={currentLocation}>
        <div className="page">
          <div className="page__section">
            <div className="page__content">
              <Navigation
                handleLogout={handleLogout}
                // handleLoginClick={handleLoginClick} // you can enable if needed
                isLoggedIn={isLoggedIn}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                  }
                />
                <Route
                  path="/saved-news"
                  element={
                    <SaveArticles
                      handleLoginClick={handleCloseClick}
                      isLoggedIn={isLoggedIn}
                      handleLogout={handleLogout}
                    />
                  }
                />
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
      </CurrentLocationContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
