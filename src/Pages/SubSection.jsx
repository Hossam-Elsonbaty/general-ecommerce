import React from 'react';
import SubSectionCard from '../Components/SubSectionCard';
import { CiCoffeeCup } from "react-icons/ci";
import { CiCoffeeBean } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiBandage } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import Footer from '../Components/Footer';
export default function SubSection() {
  return (
    <>
      <main className='main'>
        <div className='top'>
          <h2 className='top-title'>الأقسام الفرعية</h2>
        </div>
        <div className='content'>
          <SubSectionCard icon={<CiCoffeeCup />} text="الرياضة واللياقة" color="#fa5d00"></SubSectionCard>
          <SubSectionCard icon={<CiDumbbell/>} text="الرياضة واللياقة" color="#0ba3b0"></SubSectionCard>
          <SubSectionCard icon={<CiCoffeeBean />} text="الرياضة واللياقة" color="#f14881"></SubSectionCard>
          <SubSectionCard icon={<CiBandage />} text="الرياضة واللياقة" color="#625ba9"></SubSectionCard>
          <SubSectionCard icon={<CiFries  />} text="الرياضة واللياقة" color="#0ba3b0"></SubSectionCard>
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}
