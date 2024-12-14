import React from 'react';
import { Carousel } from 'antd';
import brandsSectionData from '../Data/dataBrandsSections';

export default function HomeBrandsSection() {
  return (
    <section className='home-brands-section-container'>
      <h3>العلامات التجارية</h3>
      <div className="cards-section">
        <Carousel  autoplay >
          {brandsSectionData.map(imag => (
            <div className="card"><div><img src={imag} alt="" /></div></div>
          ))}          
        </Carousel>
      </div>
    </section>
  )
}