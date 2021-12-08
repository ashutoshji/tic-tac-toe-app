import React from "react";

const wrapperCss = {
  minHeight: "50px",
  height: "150x",
  width: "50px",
  border: "1px solid blue"
};

interface SquareBoxesProps {
  value: number;
  handleOnClick?: () => void;
}

export const SquareBoxes = ({ value, handleOnClick }: SquareBoxesProps) => {
  return (
    <div style={wrapperCss} onClick={handleOnClick}>
      <span
        style={{
          color: "red",
          margin: "16px",
          display: "flex"
        }}
      >
        {value}
      </span>
    </div>
  );
};
