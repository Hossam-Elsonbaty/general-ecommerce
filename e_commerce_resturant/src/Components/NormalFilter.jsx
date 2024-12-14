import React ,{ useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'; 
import { useProducts } from '../Context/ProductsContext';
import BrandFilter from './BrandFilter';

export default function NormalFilter({FilterTitle}) {
  const [showFilters, setShowFilters] = useState(true);
  const { productsBrands } = useProducts();

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
        <div className={`the-filters ${showFilters ? 'show' : ''}`}>
          {productsBrands.map(brand => (
            <BrandFilter Brand={brand} key={brand}></BrandFilter>
            ))}
        </div>
      )}
    </div>
  )
}