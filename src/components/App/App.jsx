import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import backgroundImg from "../../assets/background.svg";
import Header from "../../components/Header/Header";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessRegisterModal from "../SucessRegisterModal/SuccessRegisterModal";
import { getToken, setToken, removeToken } from "../../utils/token";
import { singin, signup, checkToken } from "../../utils/api";

const App = () => {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleSigninClick = () => {
    setActiveModal("signin");
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

  return (
    <div className="page">
      <div className="page__section">
        <div className="page__content">
          <Header handleLoginClick={handleSigninClick}  isLoggedIn={isLoggedIn}/>
          <About />
          <Footer />
          <RegisterModal
            isOpen={activeModal === "signup"}
            // handleCloseClick={handleCloseClick}
            handleSigninClick={handleSigninClick}
            handleSuccessRegistration={handleSuccessRegistration}
          />
          <LoginModal
            isOpen={activeModal === "signin"}
            // handleCloseClick={closeActiveModal}
            handleSignupClick={handleSignupClick}
          />
          <SuccessRegisterModal
            isOpen={activeModal === "success"}
            handleSigninclick={handleSigninClick}
            handleCloseClick={handleCloseClick}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
