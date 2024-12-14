import React from 'react';
import visa from "../Images/Visa_Inc.-Logo.wine.svg";
import master from "../Images/Mastercard-Logo.wine.svg";
import applePay from "../Images/Apple_Pay-Logo.wine.svg";
import googlePay from "../Images/Google_Pay-Logo.wine.svg";
const PaymentMethods = () => {
  return <div className='payment-methods'>
    <div className="element">
      <div className="col">الدفع عند الإستلام</div>
    </div>
    <div className="element">
      <div className="col"><img className='svg' src={visa} alt="" /></div>
      <div className="col"><img className='svg' src={master} alt="" /></div>
    </div>
    <div className="element">
      <div className="col apple"><img className='svg' src={applePay} alt="" /></div>
      <div className="col google"><img className='svg' src={googlePay} alt="" /></div>
    </div>
    <div className="element">
      <div className="col">الدفع بواسطة KNet</div>
    </div>
  </div>;
};
export default PaymentMethods;