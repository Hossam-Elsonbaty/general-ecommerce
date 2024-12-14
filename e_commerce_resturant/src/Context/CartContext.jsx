import React, { createContext, useState, useEffect } from 'react';
import Cart from '../Pages/Cart';
const CartContext = createContext();
const initialCartItems = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))  : []
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCartItems);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };
  const increaseQuantity = (productId) => {
    setCart((prevCart) => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (productId) => {
    setCart((prevCart) => 
      prevCart.map(item => 
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getCartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

//   const handleCart = (id) => {
//     console.log(id);
//     setIsActive(prev => !prev);
//     setTimeout(() => {
//       setIsActive(false) 
//     }, 1500);
//     if (localStorage.getItem("cart")){
//       let cart = JSON.parse(localStorage.getItem("cart"));
//       let index = cart.findIndex(item => item.productId === id)
//       if (index !== -1){
//         console.log("yes");
//         cart[index].quantity += 1;
//       } else {
//         console.log("no");
//         cart.push({productId: id, quantity:1});
//       }
//       localStorage.setItem("cart",JSON.stringify(cart));
//     } else{
//       let cart = [];
//       cart.push({productId: id, quantity:1});
//       localStorage.setItem("cart",JSON.stringify(cart));
//     }
//   }
