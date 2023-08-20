import React from 'react'
import IMG from '../../assets/portfolio.jpeg'
import Bank from '../../assets/bank.jpeg'
import DSW from '../../assets/dsw.jpg';
import CPU from '../../assets/download.jpeg'
import ChatApp from '../../assets/chatapp.jpeg'
import Algo from '../../assets/algo.jpg'
import './portfolio.css'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={DSW} alt="" /></div>
            <h3>B.TECH Learning Website</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={CPU} alt="" /></div>
            <h3>CPU Scheduling Algorithms using C++</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={Bank} alt="" /></div>
            <h3>Bank Managment System (OOPs C++)</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={ChatApp} alt="" /></div>
            <h3>Real Time Chat Application using ExpressJs & socket.io</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>Visit</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={Algo} alt="" /></div>
            <h3>Algo-Visualizer using Raylib</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={IMG} alt="" /></div>
            <h3>Movie Recommender Model (Python-streamlit)</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>Visit</a>
         </div>
        </article>
        
      </div>

    </section>
  )
}

export default portfolio
