import React from "react";
import section1 from '../Images/friesCola.webp';

const ConsistentCombosSelector = ({consistentCombos,selectedCombo,setSelectedCombo}) => {

  const handleComboChange = (id) => {
    setSelectedCombo(Number(id));
  };

  return (
    <section className="consistent-combos-container">
      <div className="title">
              اختر كومبو
      </div>
      <div className="consistent-combos-list">
        {consistentCombos.map((combo) => (
            <div key={combo.id} className={`consistent-combo ${Number(selectedCombo) === Number(combo.id)?"consistent-combo-choosed":""}`} onClick={()=>handleComboChange(combo.id)}  >
              <img src={section1} alt="" />
              <div className="name-description-consistent-combo" >
                <span>{combo.name}</span>
                <p>{combo.description}</p>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default ConsistentCombosSelector;
