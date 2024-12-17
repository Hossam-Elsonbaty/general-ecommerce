import React from 'react';
import {  Input } from 'antd';
import { FaTrash,FaPen } from "react-icons/fa";

const OneAddress = ({address,index}) => {

  return (
    <div className='address-info'>
      <div className="address-title-container">
        <h2 className='top-title'> عنوان {index} </h2>
        <button className='edit-button'>
        تعديل<FaPen/>
        </button>
        <button className='delete-button'>
        مسح<FaTrash/>
        </button>
      </div>
      {/* Country */}
      <div className='col'>
        <Input
          placeholder="الدولة"
          value={address.country}
          disabled
          
        />
      </div>

      {/* City */}
      <div className='col'>
        <Input
          placeholder="المدينة"
          value={address.city}
          disabled
        />
      </div>

      {/* Name */}
      <div className='col'>
        <Input
          placeholder="الأسم"
          value={address.name}
          disabled
        />
      </div>

      {/* Phone */}
      <div className='col'>
        <Input
          placeholder="رقم الجوال بالأنجليزية"
          value={address.phone}
          disabled
        />
      </div>

      {/* Address */}
      <div className='col'>
        <Input
          placeholder="العنوان"
          value={address.address}
          disabled
        />
      </div>
    </div>
  );
};

export default OneAddress;
