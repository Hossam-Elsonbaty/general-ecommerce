import React,{useState, useEffect, useRef, useContext } from 'react';
import logo from '../Images/logo.jpg';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { LuHeart, LuUser } from "react-icons/lu";
import { FaSearch } from 'react-icons/fa';
import IsDesktop from "../Context/IsDesktop"
import CartContext from "../Context/CartContext"
import SearchBar from "./SearchBar";
import ChangeLanguage from './ChangeLanguage';
import ChangeCurrency from './ChangeCurrency';
export default function Navbar() {
  const { getCartItemCount } = useContext(CartContext);
  const { isDesktop } = useContext(IsDesktop);
  const CartItemCount = getCartItemCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navBarsRef = useRef(null);
  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      navBarsRef.current &&
      !navBarsRef.current.contains(event.target) &&
      isMenuOpen
    ) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  const menuItems = [
    {
      name: 'قسم العروض',
    },
    {
      name: ' قسم عروض الباكيجات',
    },
    {
      name: ' قسم العطور',
    },
    {
      name: 'قسم المكملات الغذائية',
      children: [
        {
          name: 'مكملات الفيتامينات ',
          children: [
            { name: 'المكملات الرياضية ' },
            { name: 'مكملات الشعر' },
          ],
        },
        {
          name: 'مكملات الاعشاب  ',
        },
      ],
    },
    {
      name: 'قسم الرعاية الصيدلانية  ',
      children: [
        {
          name: 'قسم البنادول  ',
        },
        {
          name: ' قسم البرد والأنفلونزا  ',
        },
      ],
    },
    {
      name: 'قسم العناية بالأطفال  ',
      children: [
        {
          name: 'صيدلية الطفل  ',
        },
        {
          name: ' قسم الجلدية للأطفال  ',
        },
      ],
    },
    {
      name: 'قسم العناية بالامهات  ',
      children: [
        {
          name: 'صيدلية الطفل  ',
        },
        {
          name: ' قسم الجلدية للأطفال  ',
        },
      ],
    },
    {
      name: 'قسم العناية بالبشرة  ',
      children: [
        {
          name: 'صيدلية الطفل  ',
        },
        {
          name: ' قسم الجلدية للأطفال  ',
        },
      ],
    },
    {
      name: 'قسم العناية بالشعر  ',
      children: [
        {
          name: 'صيدلية الطفل  ',
        },
        {
          name: ' قسم الجلدية للأطفال  ',
        },
      ],
    },
  ];
  return (
    <header className='nav-header'>
      <nav className="second-navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="err"/>
            </Link>
          </div>
          {/* <ChangeLanguage></ChangeLanguage> */}
          {/* <ChangeCurrency></ChangeCurrency> */}
          <div className="nav-bars" ref={navBarsRef} onClick={toggleMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>
        <div ref={menuRef} >
          <Menu items={menuItems} isOpen={isMenuOpen} />
        </div>
      </nav>
      <nav className="first-navbar">
        <div className="navbar-container">
          {isDesktop 
          ?
          <div className="nav-desktop">
            <SearchBar></SearchBar>
            <div className='icons-container'>
              <Link to="my-profile"><LuUser className="icon" /></Link>
              <Link to="my-favorite"><LuHeart className="icon" /></Link>
              <Link to="my-cart">
                <span className='cart-items-number'>{CartItemCount}</span>
                <FiShoppingBag className="icon" />
              </Link>
            </div>
          </div> 
          :
            <SearchBar></SearchBar>
          }
        </div>
      </nav>
    </header>
  )
}
