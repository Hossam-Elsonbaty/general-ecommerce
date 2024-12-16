import React, { useState } from "react";
import extrasData from "../Data/dataExtras";

const ExtrasSelector = () => {
  const [selectedExtras, setSelectedExtras] = useState([]); // State for selected extras

  const handleChoosedExtra = (event) => {
    const extraId = Number(event.target.value); // Get the ID of the clicked extra

    setSelectedExtras((prevSelected) => {
      // Check if the extra is already selected
      if (prevSelected.includes(extraId)) {
        // Remove it if it's already selected
        return prevSelected.filter((id) => id !== extraId);
      } else {
        // Add it to the selected list
        return [...prevSelected, extraId];
      }
    });
  };

  return (
    <section className="product-extras-container">
      <div className="title">اختر اضافات</div> {/* Arabic for "Choose Extras" */}
      <div className="extras-list">
        {extrasData.map((extra) => (
          <label
            key={extra.id}
            className={`${
              selectedExtras.includes(extra.id) ? "checked-box" : ""
            }`} // Dynamically apply class
          >
            <input
              type="checkbox"
              name="extras"
              value={extra.id}
              checked={selectedExtras.includes(extra.id)} // Reflect state in UI
              onChange={handleChoosedExtra} // Handle state updates
            />
            <span>
              {extra.name}
              {` (${extra.price} EGP)`}
            </span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default ExtrasSelector;
