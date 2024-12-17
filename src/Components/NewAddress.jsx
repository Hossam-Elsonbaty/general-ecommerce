import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { FaCheckSquare } from "react-icons/fa";

const NewAddress = () => {
  // State to manage input values
  const [formData, setFormData] = useState({
    country: '',
    city: '',
    name: '',
    phone: '',
    address: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Handle input changes and update state
  const handleChange = (e, field) => {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Check if all fields are filled
  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');
    setIsFormValid(allFieldsFilled);
  }, [formData]);

  return (
    <div className='address-info'>
      <div className="address-title-container">
        <h2 className='top-title'> تسجيل عنوان جديد </h2>
        <button
          className='edits-save-button'
          disabled={!isFormValid} // Disable button if form is invalid
        >
          حفظ <FaCheckSquare />
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

export default NewAddress;
