import React, { useState } from 'react';

const Dropdown = () => {
  
  // Items array for the dropdown options
  const items = ["Yes", "Probably Yes", "No", "Probably No", "Not Sure"];

  // State variables
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

 // Handler for mouse enter event to show dropdown
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // Handler for mouse leave event to hide dropdown
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // Handler for option click to select an item and close the dropdown
  const handleOptionClick = (selectedValue) => {
    setSelectedItem(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className='dropdown'>
      <h1>Should you use a Dropdown?</h1>
      <div className='custom-dropdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className='dropdown-button'>{selectedItem || "Select" }</button>
        {isOpen && (
          <ul className='dropdown-list'>
            {items.map((item, index) => (
              <li key={index} onClick={() => handleOptionClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
