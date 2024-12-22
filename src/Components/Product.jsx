import React, { useState, useRef, useEffect, useContext } from 'react';
import { CiShoppingCart, CiCirclePlus } from "react-icons/ci";
import { LuTrash2 } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { BsInfoCircle } from "react-icons/bs";
import CartContext from '../Context/CartContext';
import FormatCurrency from './FormatCurrency';
import FavoriteIcon from './FavoriteIcon';
import ProductDetails from './ProductDetails';
const Product = ({ product }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const popupRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const descriptionRef = useRef(null);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [productDetailsToBeDisplayed, setProductDetailsToBeDisplayed] = useState({});

  const handleProductImgClick=(product)=>{
    setShowProductDetails(true);
    setProductDetailsToBeDisplayed(product);
  }
  const toggleDescription = () => {
    setIsDescriptionVisible(prev => !prev);
  };
  const handleClickOutside = (event) => {
    if (
      descriptionRef.current &&
      !descriptionRef.current.contains(event.target) &&
      isOpen
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  useEffect(() => {
    // setIsActive(true);
    // setTimeout(() => {
    //   setIsActive(false);
    // }, 5000);
    const isProductInCart = cart.some(item => item.id === product.id);
    setIsActive(isProductInCart);
  }, [cart, product.id]);
  const handlePopup = (id) => {
    setIsOpen(prev => !prev);
    console.log(id);
  };
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const handleIncreaseQuantity = () => {
    increaseQuantity(product.id);
  };
  const handleDecreaseQuantity = () => {
    decreaseQuantity(product.id);
  };
  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };
  const cartItem = cart.find(item => item.id === product.id);
  return (<>
    {showProductDetails
      ?
      <ProductDetails product={productDetailsToBeDisplayed} setShowProductDetails={setShowProductDetails}/>
      :
    <div className='product' key={product.id}>
      <div className={`disc-popup-cont ${isOpen ? 'active' : ''}`}>
        <div ref={descriptionRef} className='disc-popup'>
          <button className='close' onClick={() => setIsOpen(false)}><IoMdClose /></button>
          <div className="pro-short-des-wraper">
            <p>
              <strong>بايوبولكس فيتامين ب المركب 30 قرص</strong><br/>بايوبولكس أقراص ب كومبلكس تحتوي هذه&nbsp;الأقراص&nbsp;على فيتامينات (B) المهمة لتكوين والحفاظ على خلايا الدم الحمراء الصحية. تساعد في إنتاج الهيموغلوبين&nbsp;
            </p>
            <p><strong><span style={{textDecoration: "underline"}}>دواعي الاستخدام</span></strong>:
            </p>
            <ul>
              <li>يحمي البشرة ويحافظ عليها&nbsp;</li>
              <li>ينتج خلايا الدم الحمراء</li>
              <li>يقوي الذاكرة وينشطها</li>
              <li>يعزز جهازك المناعي</li>
              <li>يزيد الحيوانات المنوية</li>
              <li>يقلل الإصابة في هشاشة العظام</li>
              <li>يقوي الاعصاب و يقلل اعتلال الاعصاب</li>
            </ul>
            <p><strong><span style={{textDecoration: "underline"}}>طريقة الاستخدام</span></strong>: قرص واحد يوميا بعد الوجبة&nbsp;
            </p>
          </div>
          <div className="pro-short-des-wraper">
            <p>
              <strong>بايوبولكس فيتامين ب المركب 30 قرص</strong><br/>بايوبولكس أقراص ب كومبلكس تحتوي هذه&nbsp;الأقراص&nbsp;على فيتامينات (B) المهمة لتكوين والحفاظ على خلايا الدم الحمراء الصحية. تساعد في إنتاج الهيموغلوبين&nbsp;
            </p>
            <p><strong><span style={{textDecoration: "underline"}}>دواعي الاستخدام</span></strong>:
            </p>
            <ul>
              <li>يحمي البشرة ويحافظ عليها&nbsp;</li>
              <li>ينتج خلايا الدم الحمراء</li>
              <li>يقوي الذاكرة وينشطها</li>
              <li>يعزز جهازك المناعي</li>
              <li>يزيد الحيوانات المنوية</li>
              <li>يقلل الإصابة في هشاشة العظام</li>
              <li>يقوي الاعصاب و يقلل اعتلال الاعصاب</li>
            </ul>
            <p><strong><span style={{textDecoration: "underline"}}>طريقة الاستخدام</span></strong>: قرص واحد يوميا بعد الوجبة&nbsp;
            </p>
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='img-container' >
          <FavoriteIcon product={product}/>
          <img src={product.image} className='product-img' alt="product" onClick={()=>handleProductImgClick(product)}/>
        </div>
        <div className='left-section'>
          <h6 className='product-name'>{product.name}</h6>
          <span className='product-price'>
            <span>{FormatCurrency(product.price)}</span>
            {/* <span>{product.price} <span className='currency'>د.ك</span></span> */}
            <span className='product-availability'>{product.availability}</span>
          </span>
          <div className='desc-order'>
            <button className={`order-btn ${isActive ? 'active' : ''}`} >
              {!isActive ?
                <CiShoppingCart onClick={() => handleAddToCart(product)}/>
                :
                <div className='active-div'>
                  <button className='plus' onClick={handleIncreaseQuantity}><CiCirclePlus /></button>
                  <h1 className='qnt'>{cartItem?.quantity}</h1>
                  <button className='trash' >
                    {cartItem?.quantity > 1
                      ?<CiCircleMinus onClick={handleDecreaseQuantity}/> 
                      :<LuTrash2 onClick={handleRemoveFromCart}/> }
                  </button>
                </div>
              }
            </button>
            <button className='description' ref={popupRef} onClick={() => handlePopup(product.id)}  >
              <BsInfoCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
            }</>
  );
};

export default Product;
