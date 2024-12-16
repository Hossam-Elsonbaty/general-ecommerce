import React, { useState } from "react";
import { FaShoppingCart } from 'react-icons/fa'; 

const AddToCartContainer = () => {

  return (
    <>
      <span className="total-span">
        999 EP : الاجمالي
      </span>
      <div className="addtocart-button">
        <FaShoppingCart /><span>اضف الى السلة</span>
      </div>
    </>
  );
};

export default AddToCartContainer;
