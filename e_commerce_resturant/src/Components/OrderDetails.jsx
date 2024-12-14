import React,{useState,useEffect} from 'react';
import { FaArrowRight,FaTruck,FaClipboardCheck } from 'react-icons/fa'; 

const OrderDetails = ({ setShowOrderDetails,order }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimate(true);
  }, []);

  const handleClose = () => {
    // Remove the animation class before unmounting
    setAnimate(false);
    setShowOrderDetails(false)
  };

  return (
    <div className={`order-details-container ${animate ? 'slide-in' : 'slide-out'}`}>
      <div className="order-details-first-section">
        <div className="return-arrow-container" onClick={() => {handleClose()}}>
          <FaArrowRight></FaArrowRight>
        </div>
        <div className="state-container">
          <h2 className="state-declare-text">  {order.stateDeclareText}</h2>
            {order.state=="تم التسليم"?<FaClipboardCheck></FaClipboardCheck>:<FaTruck></FaTruck>}
        </div>
        <div className="order-placed-container">
          <span className='declare-text'>تم تأكيد الطلب في</span>
          <span className='date-time'>{order.orderPlaced}</span>
        </div>
        <p className="delivery-to-info">
          {order.deliveryAddress}
        </p>
      </div>
      <div className="order-details-lower-section">
        {order.products.map((product) => (
          <div className="product" key={product.id}>
            <div className="img-name-infos">
              <img className="prd-img" src={product.image} alt="" />
              <div className="prd-name-infos">
                <span className='prd-name'> {product.name}</span>
                <p className='prd-infos'>    {product.volume}</p>
                <p className='prd-infos'>  {product.quantity} </p>
              </div>
            </div>
            <div className="prd-price"> {product.price} $</div>
          </div>
        ))}
        <div className="general-info">
          <span className='title'>التوصيل</span>
          <span className='value'>{order.deliveryTax} $</span>
        </div>
        <div className="general-info">
          <span className='title'>الاجمالي</span>
          <span className='value'>{order.total}$</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;