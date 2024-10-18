/** @format */
import dark_arrow from '../../assets/dark-arrow.png'
import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
              <h1>We ensure better education for a better world.</h1>
              <p>
                  We are committed to providing quality education that equips students with the skills and knowledge needed to thrive in the 21st century.
                  We strive to create a diverse and inclusive learning environment that fosters a sense of belonging and empowerment for all students.
                  Our mission is to inspire and empower individuals to reach their full potential and contribute to a brighter, more equitable future.
                  Learn more about our commitment to education and our mission.
              </p>
              <button className="btn"> Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
