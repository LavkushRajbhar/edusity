/** @format */

import React, { useRef } from "react";
import "./Testimonials.css";
import next_btn from "../../assets/next-icon.png";
import back_btn from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {
    
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className="testimonials">
      <img src={next_btn} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_btn} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Wlliam Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree in Education was a decision that
                would shape the course of my life. The program offered a unique
                blend of theory and practical skills, fostering a strong
                foundation in critical thinking and problem-solving. I am
                grateful for the opportunity to have had the chance to learn
                from such a talented and dedicated team.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Dwayne Johnson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                I am overhelmed by the opportunity to learn from such a talented
                and dedicated team. I am grateful for the opportunity to have
                had the chance to learn from such a talented and dedicated team.
                I chose to pursue my degree in Education because I wanted to
                make a difference in the world.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Dakota Johnson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Edusity is game-changer for me because I wanted to make a
                difference in the world. The program offered a unique blend of
                theory and practical skills, fostering a strong foundation in
                critical thinking and problem-solving.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Cillian Murfy</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Edusity is the best place to learn about your future. I chose to
                pursue my degree in Education because I wanted to make a
                difference in the world. The program offered a unique blend of
                theory and practical skills, fostering a strong foundation in
                critical thinking and problem-solving. I am grateful for the
                opportunity to have had the chance to learn from such a talented
                and dedicated team.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
