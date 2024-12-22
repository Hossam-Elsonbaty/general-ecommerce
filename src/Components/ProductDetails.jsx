import React,{useState,useEffect,useContext} from 'react';
import { FaArrowRight } from 'react-icons/fa'; 
import SizeSelector from './SizeSelector';
import AddToCartContainer from './AddCartContainer';
import ExtrasSelector from './ExtrasSelector';
import extrasData from "../Data/dataExtras";
import ConsistentCombosData from '../Data/dataConsistentCombos';
import CartContext from '../Context/CartContext';
import ConsistentCombosSelector from './ConsistentCombosSelector';

const ProductDetails = ({ setShowProductDetails,product }) => {
  const [animate, setAnimate] = useState(false);
  const [selectedSize, setSelectedSize] = useState(Number(product.sizesAndPrices[0].id));
  const [selectedCombo, setSelectedCombo] = useState(Number(ConsistentCombosData[0].id));
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Trigger animation on mount
    setAnimate(true);
  }, []);

  useEffect(() => {
    // this code to update total price depending on selectedSize, selectedExtras for every change in selectedSize or selectedExtras
    const sizePrice = selectedSize ? product.sizesAndPrices.find(size => size.id === selectedSize)?.price : 0;
    const comboPrice = selectedCombo ? ConsistentCombosData.find(combo => combo.id === selectedCombo)?.price : 0;
    const extrasPrice = selectedExtras.reduce((total, extraId) => {
      const extra = extrasData.find(extra => extra.id === extraId);
      return total + (extra ? extra.price : 0);
    }, 0);
    setTotalPrice(sizePrice + extrasPrice+comboPrice);
  }, [selectedSize, selectedExtras,selectedCombo]);

  const handleClose = () => {
    // Remove the animation class before unmounting
    setAnimate(false);
    setShowProductDetails(false)
  };

  const handleAddToCart=() => {
    const sizeObject = product.sizesAndPrices.find(
      (size) => size.id === selectedSize
    ); // Find the selected size object
    const comboObject = ConsistentCombosData.find(
      (combo) => combo.id === selectedCombo
    ); // Find the selected combo object
    const extrasObjects = selectedExtras.map((extraId) => 
      extrasData.find((extra) => extra.id === extraId)
    ); // Map selectedExtras IDs to their respective objects

    const productToCart = {
      id: product.id,
      name: product.name,
      image:product.image,
      size: sizeObject, // Assign the full size object
      combo: comboObject, // Assign the full combo object
      extras: extrasObjects, // Assign the list of full extras objects
      price: totalPrice, // Use the computed total price
    };
    addToCart(productToCart);
    setShowProductDetails(false);
  }

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
              <SizeSelector 
                sizesAndPrices={product.sizesAndPrices}  
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize} 
              />
              <ConsistentCombosSelector 
                consistentCombos={ConsistentCombosData}  
                selectedCombo={selectedCombo}
                setSelectedCombo={setSelectedCombo} 
              />
              <ExtrasSelector
                extrasData={extrasData}
                selectedExtras={selectedExtras}
                setSelectedExtras={setSelectedExtras}
              />
            </div>
          </main>
          <div className="total-addtocart-container">
            <AddToCartContainer
              totalPrice={totalPrice}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </div>
    </>
  );
};

export default ProductDetails;