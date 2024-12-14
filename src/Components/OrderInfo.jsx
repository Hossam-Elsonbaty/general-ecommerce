import React,{useState} from 'react';
import { Select} from 'antd';
import { Input } from 'antd';
import { Checkbox } from 'antd';
const { TextArea } = Input;
const OrderInfo = () => {
  const [countryOptions, setCountryOptions] = useState([
    {value: 'jack',label: 'Jack',},
    {value: 'lucy',label: 'Lucy',},
    {value: 'Yiminghe',label: 'yiminghe',},
    {value: 'disabled',label: 'Disabled',disabled: true,}
  ]);
  const handleCountryChange = (value)=>{
    console.log(value);
  }
  const onCheckboxChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return<div className="order-info">
    <div className="discount-element">
      <div className='col'>
        <input type="text" name="" id="" placeholder='كود الخصم' />
        <button>
          تحصيل
        </button>
      </div>
      <div className='col'>
        <span>
          إجمالي الخصم:
        </span>
        <span>
          <span className='price'>1.5</span> د.ك
        </span>
      </div>
    </div>
    <div className="element">
      <div className='col'>
        <div className='products-val'>
          <h3>قيمة المنتجات </h3>
          <span>(2)</span>
        </div>
        <span>
          <span className='price'>1.5</span> 
        </span>
      </div>
      <div className='col'>
        <h3>الخصم</h3>
        <span>
          <span className='price'>0.00</span> 
        </span>
      </div>
      <div className='col'>
        <h3>تكاليف الشحن</h3>
        <span>
          <span className='price'>1</span> 
        </span>
      </div>
      <div className='col'>
        <h3>المجموع النهائي</h3>
        <span>
          <span className='price'>2.5</span> د.ك
        </span>
      </div>
    </div>
    <div className='delivery-info'>
      <div className='col'>
        <Select
          placeholder="الدولة"
          className='select'
          onChange={handleCountryChange}
          options={countryOptions}
        />
      </div>
      <div className='col'>
        <Select
          placeholder="المدينة"
          className='select'
          onChange={handleCountryChange}
          options={countryOptions}
        />
      </div>
      <div className='col'>
        <Input placeholder="الأسم " />
      </div>
      <div className='col'>
        <Input placeholder="رقم الجوال بالأنجليزية" />
      </div>
      <div className='col'>
        <Input placeholder="العنوان" />
      </div>
      <div className='col'>
        <TextArea rows={4} placeholder="ملاحظات" maxLength={6} />
      </div>
      <div className='col'>
        <Checkbox onChange={onCheckboxChange}>أوافق علي شروط الإستخدام</Checkbox>
      </div>
    </div>
  </div>
};
export default OrderInfo;