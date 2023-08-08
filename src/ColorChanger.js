import React, { useState } from "react";

const ColorChanger = () => {
  const [selectedColor, setSelectedColor] = useState("white");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const textStyle = {
    backgroundColor: selectedColor,
    padding: "10px"
  };

  return (
    <div>
      <input type="text" placeholder="Type something" style={textStyle} />
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="white">Select Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default ColorChanger;
