import React from 'react';
import { useProducts } from '../Context/ProductsContext';
export default function FiltersRevealButton() {
  const { getSubSectionProducts,getSearchProducts,clearProductsFilters,savedSearchParameter } = useProducts();
  const handleClick=()=>{
    clearProductsFilters();
    if(savedSearchParameter.length===0){// here we filter all products then display them 
      getSubSectionProducts();
    }else{// when savedSearchParameter variable isnt empty this means that we are in searchResults component which means that when filters changing we must filter then display search products not all products 
      getSearchProducts(savedSearchParameter);
    }
  }
  return (
    <div className="reavele-filters" onClick={()=>{handleClick()}}>
      <h3>ازالة جميع الفلاتر</h3>
    </div>
  )
}