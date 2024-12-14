import React, { useContext, useEffect } from 'react';
import { CiTrash } from "react-icons/ci";
import CartContext from '../Context/CartContext';
import FormatCurrency from './FormatCurrency';
const CartItems = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  return (
    <div className='cart-items'>
      {cart.map((product, index) => (
        <div className='item' key={index}>
          <img src={product.image} alt='product' />
          <div className="details">
            <span className='item-name'>{product.name}</span>
            <div className='quantity-price'>
              <span className='item-price'><span>{FormatCurrency(product.price)}</span></span>
              <div className='item-quantity'>
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                <span className='quantity-number'>{product.quantity}</span>
                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
            </div>
          </div>
          <button className='trash' onClick={() => removeFromCart(product.id)}><CiTrash /></button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;


