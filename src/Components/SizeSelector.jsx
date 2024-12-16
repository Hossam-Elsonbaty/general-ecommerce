import React, { useState } from "react";

const SizeSelector = ({sizesAndPrices}) => {
  const [selectedSizeAndPrice, setSelectedSizeAndPrice] = useState(Number(sizesAndPrices[0].id));

  const handleSizeChange = (event) => {
    setSelectedSizeAndPrice(Number(event.target.value));
  };

  return (
    <section className="product-sizes-container">
      <div className="title">
              اختر المقاس
      </div>
      <div className="sizes-prices-list">
        {sizesAndPrices.map((sizeAndPrice) => (
          <label key={sizeAndPrice.id} className={`${Number(selectedSizeAndPrice) === Number(sizeAndPrice.id)?"checked-radio":""}`}>
            <input
              type="radio"
              name="sizeAndPrice"
              value={sizeAndPrice.id}
              checked={Number(selectedSizeAndPrice) === Number(sizeAndPrice.id)}
              onChange={handleSizeChange}
            />
            {sizeAndPrice.size}{` (${sizeAndPrice.price} EP)`}
          </label>
        ))}
      </div>
    </section>
  );
};

export default SizeSelector;
