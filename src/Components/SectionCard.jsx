import React from 'react';
import { Link } from 'react-router-dom';
export default function SectionCard({section}) {
  return (
      <div className='section'>
        <Link to={section.link}>
          <img src={section.image} alt="" />
          <div className='section-name'>
            <h2>
            {section.name}
            </h2>
          </div>
        </Link>
      </div>
  )
}
