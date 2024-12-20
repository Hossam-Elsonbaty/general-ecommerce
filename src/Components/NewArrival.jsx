import React, { useRef, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import IsDesktop from '../Context/IsDesktop';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image from '../Images/salamon.jpg'
import image2 from '../Images/Smash-Burger.webp'
import { Grid, Autoplay, Pagination, Navigation } from 'swiper/modules';
export const NewArrival = () => {
  const {isDesktop} = useContext(IsDesktop);
  return (
    <section className='new-arrival'>
      <h3>وصل حديثا</h3>
      <Swiper
        slidesPerView={isDesktop?3:1}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
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
        <SwiperSlide>
          <div className='img-cont'>
            <img src={image} alt="swiper-image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
