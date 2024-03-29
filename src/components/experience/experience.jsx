import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'


const experience = () => {
  return (
    <section id="experience">
      <h5>Skills </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div><h4>HTML</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div><h4>CSS</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div><h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div><h4>React</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div><h4>MaterialUI</h4>
              <small className="text-light">Beginner</small></div>
            </article>
          </div>
        </div>



        <div className="experience__frontend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
             <div> <h4>NodeJs</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
             <div> <h4>ExpressJs</h4>
              <small className="text-light">Beginner</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div><h4>PHP</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
             <div> <h4>MYSQL</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
             <div> <h4>MongoDB</h4>
              <small className="text-light">Beginner</small></div>
            </article>
          </div>

        </div>

        <div className="experience__frontend">
          <h3>DSA</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
             <div> <h4>C</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
             <div> <h4>C++</h4>
              <small className="text-light">Experienced</small></div>
            </article>
           
          </div>

        </div>

        <div className="experience__frontend">
          <h3>Machine Learning</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
             <div> <h4>Python</h4>
              <small className="text-light">Beginner</small></div>
            </article>
           
           
          </div>

        </div>

        
      </div>
    </section>
  )
}

export default experience
