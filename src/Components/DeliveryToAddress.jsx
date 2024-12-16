import React, { useState } from 'react';
import { Select, Input, Checkbox } from 'antd';
import AddressesData from '../Data/dataAddresses';

const { TextArea } = Input;

const DeliveryToAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });

  // Convert AddressesData to options for the Select component
  const addressOptions = AddressesData.map((address) => ({
    value: address.id,
    label: `${address.name} - ${address.address}`,
  }));

  // Handle Select Change - Update state with chosen address
  const handleAddressChange = (addressId) => {
    const chosenAddress = AddressesData.find((address) => address.id === addressId);
    if (chosenAddress) {
      setSelectedAddress({
        name: chosenAddress.name,
        phone: chosenAddress.phone,
        address: chosenAddress.address,
        city: chosenAddress.city,
        country: chosenAddress.country,
        postalCode: chosenAddress.postalCode,
      });
    }
  };

  // Handle Input Changes Manually if User Edits the Values
  const handleInputChange = (e, field) => {
    setSelectedAddress((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <div className='delivery-info'>
      {/* Select Address */}
      <div className='col'>
        <Select
          placeholder="اختر عنوان سابق"
          className='select'
          options={addressOptions}
          onChange={handleAddressChange}
        />
      </div>

      {/* Country */}
      <div className='col'>
        <Input
          placeholder="الدولة"
          value={selectedAddress.country}
          onChange={(e) => handleInputChange(e, 'country')}
        />
      </div>

      {/* City */}
      <div className='col'>
        <Input
          placeholder="المدينة"
          value={selectedAddress.city}
          onChange={(e) => handleInputChange(e, 'city')}
        />
      </div>

      {/* Name */}
      <div className='col'>
        <Input
          placeholder="الأسم"
          value={selectedAddress.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />
      </div>

      {/* Phone */}
      <div className='col'>
        <Input
          placeholder="رقم الجوال بالأنجليزية"
          value={selectedAddress.phone}
          onChange={(e) => handleInputChange(e, 'phone')}
        />
      </div>

      {/* Address */}
      <div className='col'>
        <Input
          placeholder="العنوان"
          value={selectedAddress.address}
          onChange={(e) => handleInputChange(e, 'address')}
        />
      </div>

      {/* Notes */}
      <div className='col'>
        <TextArea
          rows={4}
          placeholder="ملاحظات"
          maxLength={200}
          onChange={(e) => handleInputChange(e, 'notes')}
        />
      </div>

      {/* Terms Checkbox */}
      <div className='col'>
        <Checkbox onChange={(e) => console.log(`checked = ${e.target.checked}`)}>
          أوافق علي شروط الإستخدام
        </Checkbox>
      </div>
    </div>
  );
};

export default DeliveryToAddress;
