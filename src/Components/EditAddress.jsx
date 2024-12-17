import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { FaCheckSquare } from "react-icons/fa";

const EditAddress = ({ address, index }) => {
  // Local state to hold input values
  const [formData, setFormData] = useState({
    country: address.country,
    city: address.city,
    name: address.name,
    phone: address.phone,
    address: address.address,
  });

  const [isChanged, setIsChanged] = useState(false);

  // Update local state on input change
  const handleChange = (e, field) => {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Check if the form data has changed
  useEffect(() => {
    const dataChanged =
      formData.country !== address.country ||
      formData.city !== address.city ||
      formData.name !== address.name ||
      formData.phone !== address.phone ||
      formData.address !== address.address;

    setIsChanged(dataChanged);
  }, [formData, address]);

  return (
    <div className='address-info'>
      <div className="address-title-container">
        <h2 className='top-title'>تعديل عنوان {index} </h2>
        <button
          className='edits-save-button'
          disabled={!isChanged} // Disable button if no changes
        >
          حفظ التعديلات <FaCheckSquare />
        </button>
      </div>

      {/* Country */}
      <div className='col'>
        <Input
          placeholder="الدولة"
          value={formData.country}
          onChange={(e) => handleChange(e, "country")}
        />
      </div>

      {/* City */}
      <div className='col'>
        <Input
          placeholder="المدينة"
          value={formData.city}
          onChange={(e) => handleChange(e, "city")}
        />
      </div>

      {/* Name */}
      <div className='col'>
        <Input
          placeholder="الأسم"
          value={formData.name}
          onChange={(e) => handleChange(e, "name")}
        />
      </div>

      {/* Phone */}
      <div className='col'>
        <Input
          placeholder="رقم الجوال بالأنجليزية"
          value={formData.phone}
          onChange={(e) => handleChange(e, "phone")}
        />
      </div>

      {/* Address */}
      <div className='col'>
        <Input
          placeholder="العنوان"
          value={formData.address}
          onChange={(e) => handleChange(e, "address")}
        />
      </div>
    </div>
  );
};

export default EditAddress;
