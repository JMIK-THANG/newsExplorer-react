import React from "react";
import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <ul className="footer__social">
        <li className="footer__social-item">
          <a href="/" className="footer__link">
            Home
          </a>
        </li>
        <li className="footer__social-item">
          <a href="https://tripleten.com" className="footer__link">
            TripleTen
          </a>
        </li>
        <li className="footer__social-item">
          <a href="https://github.com" className="footer__link">
            <img src={githubIcon} alt="GitHub Icon" className="footer__icon" />
          </a>
        </li>
        <li className="footer__social-item">
          <a
            href="https://www.facebook.com/thang.jmik.9"
            target="_black"
            className="footer__link"
          >
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              className="footer__icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
