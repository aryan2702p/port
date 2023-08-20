import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import { BsFillAwardFill } from 'react-icons/bs'
//import {FaUsers} from 'react-icons/fa'
import {VscProject} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={ME} alt="About Ima" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillAwardFill />
              <h5>Experience</h5>
              <small>2+ Years Work</small>
            </article>
            {/* <article className="about__card">
              <FaUsers />
              <h5>clients</h5>
              <small>10+ Clients</small>
            </article> */}
            <article className="about__card">
              <VscProject />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>Hey there! I'm Aryan Patel, a passionate and driven computer science student currently pursuing my degree at
             JIIT Noida. My journey into the world of coding began with curiosity and has now evolved into a true 
             love for turning complex problems into elegant solutions. Whether it's diving into algorithms or collaborating on 
             exciting projects, I thrive on the challenges that the field offers. With a deep appreciation for continuous learning
              and a strong foundation in computer science, I'm excited to contribute my skills and make a meaningful impact in
               the tech community.</p>
              <a href="#contact" className='btn btn'>Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default about
