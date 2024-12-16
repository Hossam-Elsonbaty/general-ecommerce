import React from "react";
import { FaShoppingCart } from 'react-icons/fa'; 

const AddToCartContainer = ({ totalPrice, handleAddToCart }) => {

  return (
    <>
      <span className="total-span">
      {totalPrice} EP : الاجمالي
      </span>
      <div className="addtocart-button" onClick={handleAddToCart}>
        <FaShoppingCart /><span>اضف الى السلة</span>
      </div>
    </>
  );
};

export default AddToCartContainer;
