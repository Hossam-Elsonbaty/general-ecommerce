import React,{useState} from 'react';
import Order from './Order';
import OrderDetails from './OrderDetails';


const OrdersList = ({ orders }) => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [orderDetailsToBeDisplayed, setOrderDetailsToBeDisplayed] = useState({});
  const [clickedOrder, setClickedOrder] = useState(null);

  const handleOrderClick=(order)=>{
    setShowOrderDetails(true);
    setOrderDetailsToBeDisplayed(order);
    setClickedOrder(order.orderNo);
  }
  return (
  <>
    {showOrderDetails
        ?
        <OrderDetails order={orderDetailsToBeDisplayed} setShowOrderDetails={setShowOrderDetails}/>
        :
        <div className="orders-container">
          {orders.map(order => (
            <div key={order.id} onClick={()=>{handleOrderClick(order)}}><Order order={order} clickedOrder={clickedOrder}></Order></div>
          ))}
        </div>
    }
  </>
  );
};

export default OrdersList;