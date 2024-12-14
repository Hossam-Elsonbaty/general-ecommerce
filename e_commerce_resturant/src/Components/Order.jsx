import React from 'react';

const Order = ({ order,clickedOrder }) => {
  
  const lastOrderClicked=()=>{
    return order.orderNo==clickedOrder?true:false;
  }

  

  return (
    <>
      <div className={`order-master-container ${lastOrderClicked()?"last-clicked-order":"not-clicked-order"}`} >
        <div className="order-master-left-span">
          <div className="order-master-left-up-span">
            <h4>{order.orderNo} :رقم الطلب </h4>
            <div className="order-master-datetime-span">{order.orderPlaced}</div>
          </div>
          <span className="order-master-state-span"> الحالة:  <div className={`${order.state=="تم التسليم"?"recieved-state":"delivery-state"}`}>{order.state}</div></span>
        </div>
        <div className="order-master-images-span">
          {order.products.slice(0, 3).map((product, index) => (
            <img key={index} src={product.image} alt={`Product ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;