import React, { useState, useContext, useMemo } from 'react';
import { Button, message, Steps } from 'antd';
import { AiOutlineUnorderedList, AiOutlineFileDone, AiOutlineCreditCard } from "react-icons/ai";
import CartItems from '../Components/CartItems';
import OrderInfo from '../Components/OrderInfo';
import PaymentMethods from '../Components/PaymentMethods';
import CartContext from '../Context/CartContext';
import FormatCurrency from '../Components/FormatCurrency';
import { TbShoppingCartSearch } from "react-icons/tb";
const Cart = () => {
  const { cart } = useContext(CartContext);
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: 'العربة',
      icon: <AiOutlineUnorderedList />,
      content: cart.length === 0 
      ? <div className='empty-cart'>
          <TbShoppingCartSearch/>
          <span>عربة التسوق فارغة</span>
        </div> 
      :<CartItems />,
    },
    {
      title: 'العنوان',
      icon: <AiOutlineFileDone />,
      content: <OrderInfo />,
    },
    {
      title: 'طرق الدفع',
      icon: <AiOutlineCreditCard />,
      content: <PaymentMethods />,
    },
  ];
  // Calculate the total price
  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));
  return (
    <main className='main my-cart-main' style={{ overflowY: "hidden" }}>
      <div className='top cart-top'>
        <h2 className='top-title'>عربة التسوق</h2>
        <div className="steps-container">
          <Steps current={current} items={items} direction="horizontal" responsive={false} />
        </div>
      </div>
      <div className="cart-content">
        <div className='fixed-bottom'>
          <div className='col'>
            {current < steps.length - 1 && (
              <div className='continue'>
                <Button type="primary" onClick={() => next()}>
                  متابعة الشراء
                </Button>
                <div className='total-price'>
                  <span className='price'>{FormatCurrency(totalPrice.toFixed(2))}</span>
                </div>
              </div>
            )}
            {current === steps.length - 1 && (
              <div className='continue'>
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
                <div className='total-price'>
                  <span className='item-price'><span className='price'>{totalPrice.toFixed(2)}</span> د.ك</span>
                </div>
              </div>
            )}
            {current > 0 && (
              <Button
                style={{
                  margin: '0 12px 0 0',
                }}
                onClick={() => prev()}
              >
                العوده
              </Button>
            )}
          </div>
        </div>
        <div className='content'>{steps[current].content}</div>
      </div>
    </main>
  );
};

export default Cart;
