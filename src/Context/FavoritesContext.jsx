import React, { createContext, useState, useEffect } from 'react';

const FavoritesContext = createContext()
const initialFavorites = localStorage.getItem("upping_favorites_items")
  ? JSON.parse(localStorage.getItem("upping_favorites_items"))  : []
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(initialFavorites);
  useEffect(() => {
    localStorage.setItem('upping_favorites_items', JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorites(product) {
    let newFavoritesArr;
  
    // Check if product is already in favorites
    const productIsFavoritedBefore = favorites.some((checkProduct) => checkProduct.id === product.id);
  
    if (productIsFavoritedBefore) {
      // Remove product if it's already in favorites
      newFavoritesArr = favorites.filter((checkProduct) => checkProduct.id !== product.id);
    } else {
      // Add product to favorites
      newFavoritesArr = [...favorites, product];
    }
  // here you should check if user logged in or not to push favorites array to db 
    // Update favorites state
    setFavorites(newFavoritesArr);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
  

