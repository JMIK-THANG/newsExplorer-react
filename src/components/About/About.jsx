import React from "react";
import "./About.css";
import aboutProfile from "../../assets/about-profile.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <img className="about__image" src={aboutProfile} alt="jmik" />
        <div className="about__info">
          <h2 className="about__info-title">About the author</h2>
          <p className="about__info-text">
            Hello! My name is Jmik Thang. I'm a Software Engineering student at
            TripleTen, and a sushi
            chef by profession. I bring the same precision, patience, and
            creativity from the kitchen into the world of full-stack web
            development.
          </p>
            <span className="about__hightlight">
              Welcome to my newsExplorer app
            </span>
        </div>
      </div>
    </section>
  );
};

export default About;
