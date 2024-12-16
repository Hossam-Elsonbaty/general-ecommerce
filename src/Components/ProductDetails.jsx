import React,{useState,useEffect} from 'react';
import { FaArrowRight } from 'react-icons/fa'; 
import SizeSelector from './SizeSelector';
import AddToCartContainer from './AddCartContainer';
import ExtrasSelector from './ExtrasSelector';

const OrderDetails = ({ setShowProductDetails,product }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimate(true);
  }, []);

  const handleClose = () => {
    // Remove the animation class before unmounting
    setAnimate(false);
    setShowProductDetails(false)
  };

  return (

    <>
        <div className={`product-details-container ${animate ? 'slide-in' : 'slide-out'}`}>
          <main>
            <div className="product-details-first-section">
              <div className="return-arrow-container" onClick={() => {handleClose()}}>
                <FaArrowRight></FaArrowRight>
              </div>
              <div className="product-infos-container">
                <img src={product.image} alt="" />
                <span className='product-name'>
                  برجر بالمشروم
                </span>
                <p className='product-description'>
                  برجر بالمشروم برجر بالمشروم برجر بالمشروم برجر بالمشروم برجر بالمشروم برجر بالامشروم بارةبكم بالرحجرببشلملاومش 
                </p>
              </div>
            </div>
            <div className="product-choices-container">
              <SizeSelector sizesAndPrices={product.sizesAndPrices} />
              <ExtrasSelector/>
            </div>
          </main>
          <div className="total-addtocart-container">
            <AddToCartContainer/>
          </div>
        </div>
    </>
  );
};

export default OrderDetails;