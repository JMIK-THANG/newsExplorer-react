import React from "react";
import "./App.css";
import backgroundImg from "../../assets/background.svg";
import Header from "../../components/Header/Header";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="page">
      <div className="page__section">
        <div className="page__content">
          <Header />
          <About />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
