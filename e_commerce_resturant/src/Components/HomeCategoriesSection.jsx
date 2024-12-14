import React from 'react';
import ImgTitleCard from './ImgTitleCard';
import sectionData from '../Data/dataSections';

export default function HomeCategoriesSection() {
  return (
    <section className='categories-section-container'>
      <div className="title-and-cards-section">
        <h3> الاقسام</h3>
        <div className="cards-section">
          {sectionData.map(section => (
            <ImgTitleCard key={section.id} status={section} />
          ))}
        </div>
      </div>
    </section>
  )
}