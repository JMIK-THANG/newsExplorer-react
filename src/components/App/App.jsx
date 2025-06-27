import React, {useState} from "react";
import "./App.css";
import backgroundImg from "../../assets/background.svg";
import Header from "../../components/Header/Header";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";

const App = () => {
  const [activeModal, setActiveModal] = useState("");

  // const handleLoginClick = () => { 
  //   setActiveModal("log in")
  // }

  return (
    <div className="page">
      <div className="page__section">
        <div className="page__content">
          <Header />
          <About />
          <Footer />
          <LoginModal/>
        </div>
      </div>
    </div>
  );
};

export default App;
