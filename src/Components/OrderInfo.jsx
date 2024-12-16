import React from 'react';
import DeliveryToAddress from './DeliveryToAddress';

const OrderInfo = () => {

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
    <DeliveryToAddress/>
  </div>
};
export default OrderInfo;