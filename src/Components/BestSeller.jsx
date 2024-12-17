import React, { useState, useRef, useContext } from 'react';
import image1 from '../Images/steakhouse-burger12.jpg';
import image2 from '../Images/Crispy-fried-chicken-burgers_5.webp';
import CartContext from '../Context/CartContext';
import { CiShoppingCart, CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { LuTrash2 } from "react-icons/lu";

export const BestSeller = () => {
  const [isActive, setIsActive] = useState(false);
  const [product, setProduct] = useState()
  const { cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
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
  return (
    <section className='best-seller'>
      <h3>الأكثر مبيعا</h3>
      <div className="cell-container">
        <div className="cell">
          <img src={image2} alt="image" />
          <div className="cell-desc">
            <h4>تشكن فاير</h4>
            <span>الدجاج المقلي المغطي بصوص الفاير الحار و صوص الجبنه و فلفل الهاليبينو مع الخص و الطماطم و الخيار المخلل</span>
            <div className="price">
              <span>130 EGP</span>
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
            </div>
          </div>
        </div>
        <div className="cell">
          <img src={image1} alt="image" />
          <div className="cell-desc">
            <h4>تشكن فاير</h4>
            <span>الدجاج المقلي المغطي بصوص الفاير الحار و صوص الجبنه و فلفل الهاليبينو مع الخص و الطماطم و الخيار المخلل</span>
            <div className="price">
              <span>130 EGP</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className='best-seller'>
    //   <h3>الأكثر مبيعا</h3>
    //   <div className="cell-container">
    //     <div className="cell">
    //       <img src={image1} alt="steakhouse" />
    //       <span className='v-line'></span>
    //       <div className="cell-desc">
    //         <h4>تشكن فاير</h4>
    //         <div className="price">
    //           <h4>120 EGP</h4>
    //           <button className={`order-btn ${isActive ? 'active' : ''}`} >
    //           {!isActive ?
    //             <CiShoppingCart onClick={() => handleAddToCart(product)}/>
    //             :
    //             <div className='active-div'>
    //               <button className='plus' onClick={handleIncreaseQuantity}><CiCirclePlus /></button>
    //               <h1 className='qnt'>{cartItem?.quantity}</h1>
    //               <button className='trash' >
    //                 {cartItem?.quantity > 1
    //                   ?<CiCircleMinus onClick={handleDecreaseQuantity}/> 
    //                   :<LuTrash2 onClick={handleRemoveFromCart}/> }
    //               </button>
    //             </div>
    //           }
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="cell">
    //       <img src={image2} alt="steakhouse" />
    //       <span className='v-line'></span>
    //       <div className="cell-desc">
    //         <h4>تشكن فاير</h4>
    //         <div className="price">
    //           <h4>109 EGP</h4>
    //           <button className={`order-btn ${isActive ? 'active' : ''}`} >
    //           {!isActive ?
    //             <CiShoppingCart onClick={() => handleAddToCart(product)}/>
    //             :
    //             <div className='active-div'>
    //               <button className='plus' onClick={handleIncreaseQuantity}><CiCirclePlus /></button>
    //               <h1 className='qnt'>{cartItem?.quantity}</h1>
    //               <button className='trash' >
    //                 {cartItem?.quantity > 1
    //                   ?<CiCircleMinus onClick={handleDecreaseQuantity}/> 
    //                   :<LuTrash2 onClick={handleRemoveFromCart}/> }
    //               </button>
    //             </div>
    //           }
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="cell">
    //       <img src={image2} alt="steakhouse" />
    //       <span className='v-line'></span>
    //       <div className="cell-desc">
    //         <h4>تشكن فاير</h4>
    //         <div className="price">
    //           <h4>109 EGP</h4>
    //           {/* <button>add to cart</button> */}
    //           <button className={`order-btn ${isActive ? 'active' : ''}`} >
    //           {!isActive ?
    //             <CiShoppingCart onClick={() => handleAddToCart(product)}/>
    //             :
    //             <div className='active-div'>
    //               <button className='plus' onClick={handleIncreaseQuantity}><CiCirclePlus /></button>
    //               <h1 className='qnt'>{cartItem?.quantity}</h1>
    //               <button className='trash' >
    //                 {cartItem?.quantity > 1
    //                   ?<CiCircleMinus onClick={handleDecreaseQuantity}/> 
    //                   :<LuTrash2 onClick={handleRemoveFromCart}/> }
    //               </button>
    //             </div>
    //           }
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}
