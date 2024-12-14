import { FaArrowDown, FaArrowUp } from 'react-icons/fa'; 
import React, { useState,useEffect } from 'react'
import { useProducts } from '../Context/ProductsContext';

export default function PriceFilter({FilterTitle}) {
  const { productsMinPrice,productsMaxPrice,minPriceFilter, maxPriceFilter,changeMinPriceFilter,changeMaxPriceFilter} = useProducts();
  const [minPrice, setMinPrice] = useState(productsMinPrice);
  const [maxPrice, setMaxPrice] = useState(productsMaxPrice);

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxPrice - 1);
    setMinPrice(value);
    changeMinPriceFilter(value);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minPrice + 1);
    setMaxPrice(value);
    changeMaxPriceFilter(value);
  };

  const [showFilters, setShowFilters] = useState(true);

  const toggleFilters = () => {
    setShowFilters(prevState => !prevState);
  };
  return (
  <div className="one-filter-span">
    <div className='filter-title-container'>
      <div className="filter-title">
        {FilterTitle} 
      </div>
      <div className="filter-open-close-container" onClick={toggleFilters}>
        {showFilters ? <FaArrowUp /> : <FaArrowDown /> }
      </div>
    </div>
    {showFilters && (
    <div className={`price-filter ${showFilters ? 'show' : ''}`}>
      <div className="price-range"> {minPriceFilter} EGP - {maxPriceFilter} EGP </div>
      <div className="price-bar">
        <input type="range" min={productsMinPrice} max={productsMaxPrice} value={minPriceFilter} onChange={handleMinChange} className="slider"/>
        <input type="range" min={productsMinPrice} max={productsMaxPrice} value={maxPriceFilter} onChange={handleMaxChange} className="slider"/>
      </div>
    </div>
    )}
  </div>
)
}