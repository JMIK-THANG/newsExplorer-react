import React from "react";
import "./About.css";
import author from "../../assets/author.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <img className="about__image" src={author} alt="jmik" />
        <div className="about__text">
          <h2 className="about__author">About the Author</h2>
          <p className="about__description">
  Hello! My name is Jmik Thang. I'm a Software Engineering student at 
  <span className="about__program">TripleTen</span>, and a sushi chef by profession. I bring the same precision, patience, and creativity from the kitchen into the world of full-stack web development.
<br />
  <span className="about__app">Welcome to my newsExplorer app</span>
</p>
        </div>
      </div>
    </section>
  );
};

export default About;
