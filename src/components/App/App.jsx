import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessRegisterModal from "../SucessRegisterModal/SuccessRegisterModal";
import { signin, signup, deleteArticle, checkToken } from "../../utils/api";
import { setToken, getToken, removeToken } from "../../utils/token";

import Footer from "../Footer/Footer";
import SaveArticles from "../SaveArticles/SaveArticles";
import Main from "../Main/Main";
import { CurrentUserContext } from "../Contexts/CurrentUserContexts";

const App = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };
  const onSignup = (data) => {
    setIsLoading(true);
    return signup(data)
      .then((currentUser) => {
        return signin({ email: data.email, password: data.password }).then(
          (data) => {
            return checkToken(data.token).then((user) => {
              setCurrentUser(user);
              closeActiveModal();
            });
          }
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };
  const handleSignup = ({ name, email, password, confirmPassword }) => {
    console.log(email, password);
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    signup({ name, password, email })
      .then(() => {
        closeActiveModal();
      })
      .catch((err) => setError(err.message || "Registration failed"));
  };
  const handleSignin = ({ email, password }) => {
    if (!email || !password) {
      setError("email and password are required.");
      return;
    }
    return signin({ email, password }).then((data) => {
      if (data.token) {
        setToken(data.token);
        checkToken(data.token)
          .then((data) => {
            setIsLoggedIn(true);
            setCurrentUser(data);
            closeActiveModal();
          })
          .catch((err) => {
            console.error("Error fectching user info:", err);
            setIsLoggedIn(false);
            setError("Session expired.  Please log in again.");
          });
      }
    });
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
      <div className="page">
        <main className="page__main">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                  handleSigninClick={handleSigninClick}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <SaveArticles
                  handleCloseClick={handleCloseClick}
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                />
              }
            />
          </Routes>
        </main>

        <section>
          <RegisterModal
            isOpen={activeModal === "signup"}
            handleCloseClick={handleCloseClick}
            handleSigninClick={handleSigninClick}
            handleSuccessRegistration={handleSuccessRegistration}
            handleSignup={handleSignup}
            onSignup={onSignup}
          />
          <LoginModal
            isOpen={activeModal === "signin"}
            handleCloseClick={closeActiveModal}
            handleSignupClick={handleSignupClick}
            handleSignin={handleSignin}
          />
          <SuccessRegisterModal
            isOpen={activeModal === "success"}
            handleSigninClick={handleSigninClick}
            handleCloseClick={handleCloseClick}
            handleSignup={handleSignup}
          />
        </section>

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
