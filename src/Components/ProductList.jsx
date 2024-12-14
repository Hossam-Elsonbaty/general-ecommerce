import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className='products-container'>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
