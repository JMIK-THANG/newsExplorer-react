import React, { useState } from "react";
import "./App.css";
import backgroundImg from "../../assets/background.svg";
import Header from "../../components/Header/Header";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessRegisterModal from "../SucessRegisterModal/SuccessRegisterModal";

const App = () => {
  const [activeModal, setActiveModal] = useState("");

  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleSigninClick = () => {
    setActiveModal("signin");
  };
  const handleSignupClick = () => {
    setActiveModal("register");
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
          <Header handleLoginClick={handleSigninClick} />
          <About />
          <Footer />
          <RegisterModal
            isOpen={activeModal === "register"}
            handleCloseClick={handleCloseClick}
            handleSigninClick={handleSigninClick}
            handleSuccessRegistration={handleSuccessRegistration}
          />
          <LoginModal
            isOpen={activeModal === "signin"}
            handleCloseClick={closeActiveModal}
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
