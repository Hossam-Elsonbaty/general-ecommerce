import React from "react";

const SizeSelector = ({sizesAndPrices,selectedSize,setSelectedSize}) => {

  const handleSizeChange = (event) => {
    setSelectedSize(Number(event.target.value));
  };

  return (
    <section className="product-sizes-container">
      <div className="title">
              اختر المقاس
      </div>
      <div className="sizes-prices-list">
        {sizesAndPrices.map((sizeAndPrice) => (
          <label key={sizeAndPrice.id} className={`${Number(selectedSize) === Number(sizeAndPrice.id)?"checked-radio":""}`}>
            <input
              type="radio"
              name="sizeAndPrice"
              value={sizeAndPrice.id}
              checked={Number(selectedSize) === Number(sizeAndPrice.id)}
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
