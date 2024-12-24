import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'; 
import AddToCartContainer from '../Components/AddCartContainer';
import section1 from '../Images/friesCola.webp';
import ConsistentCombosData from '../Data/dataConsistentCombos';

const TemporaryComboDetails = () => {
  const [selectedCombo, setSelectedCombo] = useState(Number(ConsistentCombosData[0].id));
  
  const handleComboChange = (id) => {
    setSelectedCombo(Number(id));
  };
  const handleClose = () => {
    
  };

  return (

    <>
        <div className="temporary-combo-details-container">
          <main>
            <div className="temporary-combo-details-first-section">
              <div className="return-arrow-container" onClick={() => {handleClose()}}>
                <FaArrowRight></FaArrowRight>
              </div>
              <div className="temporary-combo-infos-container">
                <img src={section1} alt="" />
                <div className='name-description'>
                  <span className='temporary-combo-name'>
                    برجر بالمشروم
                  </span>
                  <p className='temporary-combo-description'>
                    برجر بالمشروم برجر بالمشروم برجر بالمشروم برجر بالمشروم برجر بالمشروم برجر بالامشروم بارةبكم بالرحجرببشلملاومش 
                  </p>
                </div>
              </div>
              <div className="combo-parts">
                <div className="combo-part ">اختيارك</div>
                <div className="combo-part combo-part-choosed">البطاطس</div>
                <div className="combo-part">المشروب</div>
                <div className="combo-part">اضافة</div>
              </div>
            </div>
            <div className="temporary-combo-choices-container">
              <div className="consistent-combos-list">
                {ConsistentCombosData.map((combo) => (
                    <div key={combo.id} className={`consistent-combo ${Number(selectedCombo) === Number(combo.id)?"consistent-combo-choosed":""}`} onClick={()=>handleComboChange(combo.id)} >
                      <img src={section1} alt="" />
                      <div className="name-description-consistent-combo" >
                        <span>{combo.name}</span>
                        <p>{combo.description}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </main>
          <div className="total-addtocart-container">
            <AddToCartContainer
              totalPrice={0}
              handleAddToCart={()=>{}}
            />
          </div>
        </div>
    </>
  );
};

export default TemporaryComboDetails;