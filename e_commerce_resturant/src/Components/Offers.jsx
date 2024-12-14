import React from 'react';
import { Carousel } from 'antd';
export default function Swiper (){
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius:'12px'
  };
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '200px', // Adjust height as needed
  };
  return(
    <Carousel arrows autoplay infinite autoplaySpeed={5000} fade>
      <div style={containerStyle}>
        <img
          style={imgStyle}
          src="https://a.lifecarepharmacykw.com/assets/f/slide/638496245504996557.jpg?638505013598455216"
          alt="offer image"
        />
      </div>
      <div style={containerStyle}>
        <img
          style={imgStyle}
          src="https://a.lifecarepharmacykw.com/assets/f/slide/638496245833904324.jpg?638505013598455216"
          alt="offer image"
        />
      </div>
      <div style={containerStyle}>
        <img
          style={imgStyle}
          src="https://a.lifecarepharmacykw.com/assets/f/slide/638496246039530768.jpg?638505013598455216"
          alt="offer image"
        />
      </div>
      <div style={containerStyle}>
        <img
          style={imgStyle}
          src="https://a.lifecarepharmacykw.com/assets/f/slide/638496245359058580.jpg?638505013598455216"
          alt="offer image"
        />
      </div>
    </Carousel>
    )
}
// const carousel = () => (
// );
