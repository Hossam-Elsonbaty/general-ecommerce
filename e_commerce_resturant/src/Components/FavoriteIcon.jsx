import React, {  useContext } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import FavoritesContext from '../Context/FavoritesContext';

const FavoriteIcon = ({ product }) => {
  const { favorites, toggleFavorites } = useContext(FavoritesContext);


  const handleAddOrRemoveFavorites = (product) => {
    toggleFavorites(product);
  };

  return (
    <div className='favorite'>
      {(favorites.some(function(checkProduct){return checkProduct.id==product.id}))?<FaHeart className="filled-heart" onClick={()=>{handleAddOrRemoveFavorites(product)}} />: <CiHeart onClick={() => handleAddOrRemoveFavorites(product)}/>}
    </div>
  );
};

export default FavoriteIcon;
