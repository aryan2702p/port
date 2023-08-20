import React from 'react'
import './testimonial.css'
import AVTR from '../../assets/testimonial.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Friends</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar"><img src={AVTR} alt="" />
          </div>
          <h5 className='client__name'>Shivansh Pandey</h5>
          <small className='client__review'>I've had the privilege of knowing You since the beginning of our computer science
           journey, and I'm constantly inspired by your dedication and passion for coding. From late-night debugging sessions to
            brainstorming wild project ideas, You are always up for the challenge. Your ability to break down complex concepts and
             make learning fun is a true gift. I can't wait to see the incredible things You'll achieve in the field</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar"><img src={AVTR} alt="" />
          </div>
          <h5 className='client__name'>Nitin Chaudhary</h5>
          <small className='client__review'>Studying computer science with You has been a blast. Your energy is infectious,
           and you bring an innovative approach to everything you do. I'll always remember our collaborative coding marathons 
           before exams, where you managed to turn stress into an exciting learning experience. With your determination and knack
            for problem-solving, there's no doubt You will leave a mark in the tech world.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar"><img src={AVTR} alt="" />
          </div>
          <h5 className='client__name'>Ankur Chaudhary</h5>
          <small className='client__review'>Your commitment to both your studies and friendships is truly remarkable. You've been my go-to person for clarifying coding concepts and working on side projects. Your ability to explain intricate algorithms in a simple manner has saved my grades
           more than once! I'm lucky to have You as a friend and know that your future in computer science will be nothing short of exceptional.</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar"><img src={AVTR} alt="" />
          </div>
          <h5 className='client__name'>Satyam Gupta</h5>
          <small className='client__review'>Whenever I think of enthusiasm for computer science, I think of You. Your unwavering passion has made every project we tackle together an exciting adventure. From hackathons to late-night coding challenges, your creativity and determination
           shine through. I'm certain that your boundless energy and dedication will propel you to incredible heights in your career</small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default testimonial
