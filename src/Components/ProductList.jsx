import React from 'react';
import Product from './Product';



const ProductList = ({ products }) => {

  return (
<>

  <div className="products-container">
    {products.map(product => (
      <div key={product.id} ><Product key={product.id} product={product}/></div>
    ))}
  </div>
</>
  );
};

export default ProductList;
