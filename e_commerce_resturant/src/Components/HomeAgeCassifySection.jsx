import React from 'react';

export default function HomeAgeClassifySection() {
  return (
    <section className='age-classify-section-container'>
      <h3>الفئة العمرية </h3>
      <div className="cards-section">
        <div className="age-card"><h5>خدج</h5></div>
        <div className="age-card"><h5>رضع</h5></div>
        <div className="age-card"><h5>اطفال</h5></div>
        <div className="age-card"><h5>مراهقين</h5></div>
        <div className="age-card"><h5>بالغين</h5></div>
        <div className="age-card"><h5>كبار السن</h5></div>
      </div>
    </section>
  )
}