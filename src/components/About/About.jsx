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
  <br /><br />
  Through TripleTen's intensive curriculum, I've gained hands-on experience with modern technologies like 
  <span className="about__tech">React</span>, 
  <span className="about__tech">Node.js</span>, 
  <span className="about__tech">Express</span>, and 
  <span className="about__tech">MongoDB</span>. I’ve built end-to-end applications, learned how to work with APIs, manage front-end and back-end integration, and write clean, maintainable code.
  <br /><br />
  <p>Welcome to my newsExplorer app</p>
</p>
        </div>
      </div>
    </section>
  );
};

export default About;
