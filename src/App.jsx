import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiOutlineDoubleLeft } from "react-icons/ai";
import {AiOutlineDoubleRight } from "react-icons/ai";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image from './assets/frau.jpg'
import slide_image2 from './assets/mann.jpg'
import slide_image3 from './assets/frau1.jpg'
import slide_image4 from './assets/frau2.jpg'
import slide_image5 from './assets/bg1.jpg'
function App() {

  return (

    <>
      <div className='Container'>
        <h1 className="heading">Cards..</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={
            {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,

            }
          }
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.right',
            prevEl: '.left',
            clickable: true,
          }}

          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper-container'
        >
          <SwiperSlide>
            <img src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image5} alt="slide_image" />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
                <AiOutlineDoubleLeft className='left' />
            </div>
          </div>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
                <AiOutlineDoubleRight className='right' />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  )
}

export default App
