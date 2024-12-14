import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ImgTitleCard({status}) {
  const navigate = useNavigate();
  return (
          <div className="card"  onClick={() => navigate(status.link)}>
            <div className="health-state-img-container">
              <img src={status.image} alt="" />
            </div>
            <h5> {status.name}</h5>
          </div>
  )
}