import React from 'react';
import Footer from '../Components/Footer';
import OneAddress from '../Components/OneAddress';
import AddressesData from '../Data/dataAddresses';
import { FaPlusCircle } from "react-icons/fa";

export default function UserAddresses( ) {


  return (
    <>
      <main className='main'>
        <div className='top section-top'>
          <div className="addresses-title-container">
            <h2 className='addresses-top-title'> عناوينك </h2>
            <button className='add-button'>
            اضف عنوان<FaPlusCircle/>
            </button>
          </div>
        </div>
        <div className="addresses-data">
        {AddressesData.map((address,index) => (
            <OneAddress key={address.id} address={address} index={index + 1}></OneAddress>
          ))}
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}
