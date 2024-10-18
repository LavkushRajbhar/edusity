import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
      <div className='about'>
          <div className="about-left">
              <img src={about_img} alt="" className='about-img' />
              <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
          </div>
          <div className="about-right">
              <h3>ABOUT UNIVERSITY</h3>
              <h2>Nurturing Tomorrow's Leaders Today</h2>
              <p>
                  We believe in the power of education to empower individuals to achieve their full potential. Our mission is to provide a comprehensive and accessible education that equips students with the skills and knowledge they need to thrive in today's fast-paced world.
              </p>
              <p>
                  Our university is committed to fostering a diverse and inclusive environment that values diversity, equality, and inclusion. We strive to create an educational experience that promotes a sense of belonging and empowerment for all students.
              </p>
              <p>
                  For more information about our university, please visit our website or contact us at <a href="mailto:university@example.com">university@example.com</a>.
              </p>
          </div>
          
    </div>
  )
}

export default About