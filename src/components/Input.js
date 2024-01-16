import React, { useState } from "react";
import ChipsList from "./Chip";
import "./input.css";

const ItemInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([
    "Ranga Raja R",
    "Madhav",
    "Gowtham",
    "Rakesh",
  ]);
  const [chips, setChips] = useState([]);

  const handleBack = (e) => {
    if (e.key === "Backspace") {
      if (inputValue === "" && chips.length !== 0) {
        setItems([...items, chips[chips.length - 1]]);
        setChips(chips.slice(0, chips.length - 1));
      }
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleItemClick = (item) => {
    setChips([...chips, item]);
    setItems(items.filter((i) => i !== item));
    setInputValue("");
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter((c) => c !== chip));
    setItems([...items, chip]);
  };

  return (
    <div>
      <div className="input-container">
        <ChipsList chips={chips} onChipRemove={handleChipRemove} />
        <input
          className="input-field"
          type="text"
          value={inputValue}
          onKeyDown={handleBack}
          onChange={handleInputChange}
          placeholder="Type here..."
        />
      </div>
      <hr />
      <div className="ul-container">
        <ul>
          {items
            .filter((item) =>
              item.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((item) => (
              <li key={item} onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemInput;
