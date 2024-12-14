import React ,{ useState,useEffect } from 'react';
import { useProducts } from '../Context/ProductsContext';

export default function BrandFilter({Brand}) {
  const [filterChoosed, setFilterChoosed] = useState(false);
  const { brandsFilter,changeBrandsFilter } = useProducts();

  useEffect(() => {
    const isFilterChoosed=brandsFilter.includes(Brand);
    setFilterChoosed(isFilterChoosed);
  }, [brandsFilter]);

  const filterActive = () => {
    setFilterChoosed(true);
    const newbrandsFilter=[...brandsFilter]
    newbrandsFilter.push(`${Brand}`);
    changeBrandsFilter(newbrandsFilter);
  };
  const filterDisActive = () => {
    setFilterChoosed(false);
    const newbrandsFilter=[...brandsFilter]
    newbrandsFilter.splice(brandsFilter.indexOf(Brand), 1);
    changeBrandsFilter(newbrandsFilter);
  };
  return (
    <div 
      className={` ${filterChoosed?'filter-choosed':'filter-to-choose'}`}
      onClick={filterChoosed?filterDisActive:filterActive}>{Brand}
    </div>
  )
}