import React from 'react';
import { Carousel } from 'antd';
import product1 from '../Images/Done1.jpg';
import product2 from '../Images/Done2.jpg';
import product3 from '../Images/Done3.jpg';
import product4 from '../Images/Done4.jpg';
import IsDesktop from '../Context/IsDesktop';
import { useContext } from 'react';
export default function TopSale() {
  const {isDesktop} = useContext(IsDesktop)
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#e32626',
  };
  
  return (
    <section className='top-sale-container'>
      <h2>المنتجات الأكثر مبيعاً</h2>
      <Carousel  autoplay >
        <div>
          <div className='bestSeller-container'>
            <div className='col'>
              <img src={product1} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
            <div className='col'>
              <img src={product1} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
            <div className='col'>
              <img src={product1} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
            <div className='col'>
              <img src={product1} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
            <div className='col'>
              <img src={product2} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='bestSeller-container'>
            <div className='col'>
              <img src={product3} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
            <div className='col'>
              <img src={product3} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
            <div className='col'>
              <img src={product3} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
            <div className='col'>
              <img src={product4} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  )
}
