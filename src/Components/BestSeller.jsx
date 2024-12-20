import React, { useState, useRef, useContext } from 'react';
import image1 from '../Images/steakhouse-burger12.jpg';
import image2 from '../Images/Crispy-fried-chicken-burgers_5.webp';
import CartContext from '../Context/CartContext';
import FormatCurrency from './FormatCurrency';
import { IoMdClose } from "react-icons/io";
import { CiShoppingCart, CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { BsInfoCircle } from "react-icons/bs";
import FavoriteIcon from './FavoriteIcon';
import { LuTrash2 } from "react-icons/lu";
import IsDesktop from '../Context/IsDesktop'
export const BestSeller = () => {
  const [isActive, setIsActive] = useState(false);
  const [product, setProduct] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const descriptionRef = useRef(null);
  const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const { isDesktop } = useContext(IsDesktop);
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
  const handlePopup = (id) => {
    setIsOpen(prev => !prev);
    console.log(id);
  };
  let cartItem 
  // const cartItem = cart.find(item => item.id === product.id);
  return (
    <>
      {isDesktop?
        <div className='product'>
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
              <div class="pro-short-des-wraper">
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
            <div className='img-container'>
              <FavoriteIcon product={product}/>
              <img src={image2} className='product-img' alt="product" />
            </div>
            <div className='left-section'>
              <h6 className='product-name'>name</h6>
              <span className='product-price'>
                <span>{FormatCurrency(220)}</span>
                {/* <span>{product.price} <span className='currency'>د.ك</span></span> */}
                <span className='product-availability'>availability</span>
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
      :
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
      }
    </>
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
