import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa'; 
import temporaryComboData from '../Data/dataOffferCombo';

const TemporaryComboDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(temporaryComboData[0].comboCategories[0]);
  const [fullComboToOrder, setFullComboToOrder] = useState({});

  useEffect(() => {
    const settingFullComboToOrder= JSON.parse(JSON.stringify(temporaryComboData[0]));// deep copy
    for (const category of settingFullComboToOrder.comboCategories) {
      category.item = category.items[0];
      delete category.items;
    }
    settingFullComboToOrder.totalPrice=settingFullComboToOrder.startPrice;
    setFullComboToOrder(settingFullComboToOrder);
  }, []);

  const handleComboCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const handleItemChange = (id) => {
    // Find the clicked item's object
    const clickedItem = selectedCategory.items.find((item) => item.id === id);
    
    // Update the relevant category in fullComboToOrder
    setFullComboToOrder((prevCombo) => {
      const updatedCombo = { ...prevCombo };
      const categoryToUpdate = updatedCombo.comboCategories.find(
        (category) => category.id === selectedCategory.id
      );
      fullComboToOrder.totalPrice-=categoryToUpdate.item.additionalPrice
      if (categoryToUpdate) {
        categoryToUpdate.item = clickedItem; // Update the item
      }
      return updatedCombo; // Return the updated combo
    });

    fullComboToOrder.totalPrice+=clickedItem.additionalPrice
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
                <img src={temporaryComboData[0].img} alt="" />
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
                {temporaryComboData[0].comboCategories.map((comboCategory)=>(
                  <div key={comboCategory.id} className={`combo-part ${selectedCategory.id ===comboCategory.id?"combo-part-choosed":""}`} onClick={()=>handleComboCategoryChange(comboCategory)}>{comboCategory.name}</div>
                ))}
              </div>
            </div>
            <div className="temporary-combo-choices-container">
              <div className="consistent-combos-list">
                {selectedCategory.items.map((item) => (
                    <div key={item.id} className={`consistent-combo ${
                      fullComboToOrder.comboCategories?.find(category => category.id === selectedCategory.id)?.item.id === item.id
                        ? "consistent-combo-choosed"
                        : ""
                    }`} onClick={()=>handleItemChange(item.id)} >
                      <img src={item.image} alt="" />
                      <div className="name-description-consistent-combo" >
                        <span>{item.name}</span>
                        <p>{item.describtion}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </main>
          <div className="total-addtocart-container">
            <span className="total-span">
            {fullComboToOrder.totalPrice} EP : الاجمالي
            </span>
            {temporaryComboData[0].comboCategories[temporaryComboData[0].comboCategories.length-1].id===selectedCategory.id
            ?
            <div className="addtocart-button" onClick={()=>{console.log(fullComboToOrder)}}>
            <FaShoppingCart/><span>اضف الى السلة</span>
            </div>
            :
            <div className="addtocart-button" onClick={() => {
              const currentIndex = temporaryComboData[0].comboCategories.findIndex(
                (category) => category.id === selectedCategory.id
              );
              setSelectedCategory(temporaryComboData[0].comboCategories[currentIndex + 1]);
            }}>
              <span>التالي </span>
            </div>
            }
          </div>
        </div>
    </>
  );
};

export default TemporaryComboDetails;