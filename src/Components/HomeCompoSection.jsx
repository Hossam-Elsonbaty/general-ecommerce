import React from 'react';
import image from '../Images/8fd5bcd7a6bc75e157cb9120df1d6828.webp'
export const HomeCompoSection = () => {
  return (
    <section className='compo-section'>
      <h3>أقوي العروض</h3>
      <div className="image-cont">
        <img src={image} alt="compo image" />
        <img src={image} alt="compo image" />
        <img src={image} alt="compo image" />
        <img src={image} alt="compo image" />
      </div>
    </section>
  )
}
