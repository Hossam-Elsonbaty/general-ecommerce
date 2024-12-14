import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function OrdersSearchBar({selectedYear,searchOrdersTerm,setSearchOrdersTerm}) {

  const handleInputChange = (event) => {
    setSearchOrdersTerm(event.target.value);
  };

  return (
    <div className="orders-search-bar">
      <input
        type="text"
        placeholder={`ابحث في طلبات ${selectedYear}`}
        value={searchOrdersTerm}
        onChange={handleInputChange}
      />
      <button><FaSearch /></button>
    </div>
  );
}