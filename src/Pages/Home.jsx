import React from 'react';
import Swiper from '../Components/Offers';
import TopSale from '../Components/TopSale';
import Sections from '../Components/Sections';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <main className='main'>
      <Swiper></Swiper>
      <Sections></Sections>
      {/* <TopSale></TopSale> */}
      <Footer></Footer>
    </main>
  )
}
