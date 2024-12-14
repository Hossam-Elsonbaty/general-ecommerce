import React from 'react';
import healthStateData from '../Data/dataHealthState';
import ImgTitleCard from './ImgTitleCard';

export default function HomeHealthStateSection() {
  return (
    <section className='health-state-section-container'>
      <div className="title-and-cards-section">
        <h3>الحالة الصحية</h3>
        <div className="cards-section">
          {healthStateData.slice(0, 4).map(status => (
            <ImgTitleCard key={status.id} status={status} />
          ))}
        </div>
      </div>
      <div className="more-section">
        <h2>المزيد</h2>
      </div>
    </section>
  )
}