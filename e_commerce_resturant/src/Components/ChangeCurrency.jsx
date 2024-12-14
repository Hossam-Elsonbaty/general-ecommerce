import React, { useState } from 'react';
import flag1 from '../Images/egypt-flag.jpg';
import flag2 from '../Images/kuwait-flag.jpg';
import flag3 from '../Images/saudi-flag.jpg';
import flag4 from '../Images/america.png';
import flag5 from '../Images/Flag-European-Union.webp';
import { FaAngleDown } from 'react-icons/fa'; 

const currencies = [
  { code: "EP", label: "Egypt", flag: flag1 },
  { code: "DK", label: "Kuwait", flag: flag2 },
  { code: "RS", label: "Saudi Arabia", flag: flag3 },
  { code: "EU", label: "Euro", flag: flag5 },
  { code: "US", label: "US", flag: flag4 },
];

export default function ChangeCurrency() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [openDropDown, setOpenDropDown] = useState(false);

  const toggleDropDown=()=>{
    setOpenDropDown(!openDropDown);
  }

  return (
    <div className="currency-select-container">
      <div className="custom-dropdown">
        <button className="dropdown-btn" onClick={()=>{toggleDropDown()}}>
          <img src={selectedCurrency.flag} alt="" className="flag-icon"  />
          <FaAngleDown></FaAngleDown>
        </button>
        <div className={`dropdown-content ${openDropDown?"open-drop-down":""}`}>
          {currencies.map((currency) => (
            <div
              key={currency.code}
              className="dropdown-item"
              onClick={() => {setSelectedCurrency(currency);toggleDropDown()}}
            >
              <img src={currency.flag} alt={currency.label} className="flag-icon" />
              {currency.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
