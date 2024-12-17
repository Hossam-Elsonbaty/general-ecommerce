import React,{useState} from 'react';
import Footer from '../Components/Footer';
import OneAddress from '../Components/OneAddress';
import AddressesData from '../Data/dataAddresses';
import { FaPlusCircle } from "react-icons/fa";
import { Modal } from 'antd';
import NewAddress from '../Components/NewAddress';

export default function UserAddresses( ) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <main className='main'>
        <div className='top section-top'>
          <div className="addresses-title-container">
            <h2 className='addresses-top-title'> عناوينك </h2>
            <button className='add-button' onClick={openModal}>
            اضف عنوان<FaPlusCircle/>
            </button>
          </div>
        </div>
        <div className="addresses-data">
        {AddressesData.map((address,index) => (
            <OneAddress key={address.id} address={address} index={index + 1}></OneAddress>
          ))}
        </div>
        <Modal
        open={isModalVisible}
        onCancel={closeModal}
        footer={null}
        >
        <NewAddress />
        </Modal>
        <Footer></Footer>
      </main>
    </>
  )
}
