import React from 'react'
import { IoIosFitness } from "react-icons/io";
import { CiCoffeeCup } from "react-icons/ci";
import { Link } from 'react-router-dom';
import puzzle from "../Images/puzzle-svgrepo-com (2).svg"
const Card = ({ text, color, icon }) => {
  return (
    <Link to="/section" className="card-link">
      <div className="card" style={{backgroundColor:color}}>
        <img src={puzzle} className='card-icon' alt="" />
        {icon}
        <span className="card-text">{text}</span>
      </div>
    </Link>
  );
};

export default Card;
