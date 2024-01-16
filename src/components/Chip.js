import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ChipsList = ({ chips, onChipRemove }) => {
  return (
    <div className="chip">
      {chips.map((chip) => (
        <div
          key={chip}
          className="chip"
          style={{
            fontSize: "12px",
            borderRadius: "15px",
            backgroundColor: "#DDDDDD",
            margin: "5px 5px",
            padding: "5px",
          }}
        >
          {chip}
          <span onClick={() => onChipRemove(chip)}>
            <AiOutlineClose />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChipsList;
