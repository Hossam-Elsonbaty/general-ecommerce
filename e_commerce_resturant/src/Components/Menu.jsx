import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';

const MenuItem = ({ item, handleClick }) => {
  return (
    <div className="menu-item">
      <div className="menu-title" onClick={() => handleClick(item)}>
        {item.name} {item.children && <FaAngleLeft className="arrow-icon" />}
      </div>
    </div>
  );
};
const Menu = ({ items, isOpen }) => {
  const [menuStack, setMenuStack] = useState([{ name: 'القائمة الرئيسية', children: items }]);
  const currentMenu = menuStack[menuStack.length - 1];
  const handleItemClick = (item) => {
    if (item.children) {
      setMenuStack([...menuStack, item]);
    }
  };
  const handleBackClick = () => {
    if (menuStack.length > 1) {
      setMenuStack(menuStack.slice(0, menuStack.length - 1));
    }
  };
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      {menuStack.length > 1 && (
        <div className="menu-item">
          <div className="menu-title" onClick={handleBackClick}>
            {` ${menuStack[menuStack.length - 2].name}`}
          </div>
        </div>
      )}
      {currentMenu.children.map((item) => (
        <MenuItem key={item.name} item={item} handleClick={handleItemClick} />
      ))}
    </div>
  );
};

export default Menu;