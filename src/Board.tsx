import React from "react";
import { SquareBoxes } from "./SquareBoxes";

const boardCss = {
  display: "flex",
  justifyContent: "center",
  maxWidth: "200px",
  "flex-wrap": "wrap"
};

interface BoardProps {
  currBoard: number[];
  handleOnClick: (position: number) => void;
  winner: string | null;
  isCurrPlayerX: boolean;
}

export const Board = ({ currBoard, handleOnClick, winner }: BoardProps) => {
  return (
    <div style={boardCss}>
      {currBoard.map((value, idx) => (
        <SquareBoxes
          key={idx}
          value={value}
          handleOnClick={() => {
            if (winner || value) {
              return;
            }
            handleOnClick(idx);
          }}
        />
      ))}
    </div>
  );
};
