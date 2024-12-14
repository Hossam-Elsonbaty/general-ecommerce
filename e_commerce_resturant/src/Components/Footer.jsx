import React from 'react'
import logo from '../Images/logo512.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='links'>
        <a href="#">الصفحة الرئيسية</a>
        <a href="#">شروط الاستخدام</a>
        <a href="#">سياسة الخصوصية</a>
        <a href="tel:0201118066382">إتصل بنا</a>
      </div>
      <div className='contact-us'>
        <div className='col'><FaFacebook /></div>
        <div className='col'><FaInstagram /></div>
        <div className='col'><FaWhatsapp /></div>
      </div>
      <div>صيدلية أبنج @2024 . جميع الحقوق محفوظة</div>
    </footer>
  )
}
