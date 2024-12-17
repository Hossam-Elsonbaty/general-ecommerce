import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image from '../Images/salamon.jpg'
import image2 from '../Images/Smash-Burger.webp'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export const NewArrival = () => {
  return (
    <section className='new-arrival'>
      <h3>وصل حديثا</h3>
      <Swiper
        spaceBetween={50}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='img-cont'>
            <img src={image} alt="swiper-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='img-cont'>
            <img src={image} alt="swiper-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='img-cont'>
            <img src={image} alt="swiper-image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
