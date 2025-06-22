import React from "react";
import "./App.css";
import backgroundImg from "../../assets/background.svg";
import Header from "../../components/Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Navigation from "../Navigation/Navigation";

const App = () => {
  return (
    <div className="page">
      <div className="page__section">
        <div className="page__content">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default App;
