import React, {useContext, useState, useEffect} from 'react';
import { CiHeart, CiUser, CiHome, CiShoppingCart } from "react-icons/ci";
import { NavLink, useLocation } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import FormatCurrency from './FormatCurrency';
import IsDesktop from '../Context/IsDesktop';
export default function FixedFooter() {
  const { getCartItemCount } = useContext(CartContext);
  const { isDesktop } = useContext(IsDesktop);
  const CartItemCount = getCartItemCount();
  const location = useLocation();
  console.log(CartItemCount);
  return (
    <div className={isDesktop?'desktop-footer' : 'fixed-footer'} >
      <NavLink to="/" activeClassName="active" className='col' exact>
        <CiHome/>
        <span className='label '>الرئيسية</span>
      </NavLink>
      <NavLink to="/my-profile" activeClassName="active" className='col'>
        <CiUser/>        
        <span className='label'>الحساب</span>
      </NavLink>
      {/* <NavLink to="tel:0201118066382" activeClassName="active" className='col'>
        <CiPhone/>        
        <span className='label'>إتصال</span>
      </NavLink> */}
      <NavLink to="/my-cart" activeClassName="active" className='col'>
        <CiShoppingCart/>
        <div className='cart-items-number'>
          <span>{CartItemCount}</span>
        </div>        
        <span className='label'>العربة</span>
      </NavLink>
      <NavLink to="/my-favorite" activeClassName="active" className='col'>
        <CiHeart/>        
        <span className='label'>المفضلة</span>
      </NavLink>
    </div>
  )
}
