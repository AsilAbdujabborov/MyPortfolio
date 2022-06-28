import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data=[
{
  avatar:Avt1,
  name:'Palonchuxin palonchi',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorem neque pariatur nisi, beatae similique vitae earum optio aliquid quasi voluptate ratione quae illo non expedita ipsum veniam. Minus, assumenda.'
},
{
  avatar:Avt2,
  name:'Palonchuxin palonchi2',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorem neque pariatur nisi, beatae similique vitae earum optio aliquid quasi voluptate ratione quae illo non expedita ipsum veniam. Minus, assumenda.'
},
{
  avatar:Avt3,
  name:'Palonchuxin palonchi3',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorem neque pariatur nisi, beatae similique vitae earum optio aliquid quasi voluptate ratione quae illo non expedita ipsum veniam. Minus, assumenda.'
},
{
  avatar:Avt4,
  name:'Palonchuxin palonchi4',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorem neque pariatur nisi, beatae similique vitae earum optio aliquid quasi voluptate ratione quae illo non expedita ipsum veniam. Minus, assumenda.'
},


]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
            <img src={avatar} alt="av1" />
            </div>
             <h5 className='client__name'>{name}</h5>
            <small className="client__review">
              {review}
            </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials