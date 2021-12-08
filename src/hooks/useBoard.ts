import React from "react";

const ans = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const checkWinner = (board: number[]) => {
  return ans.some(
    ([first, second, third]) =>
      board[first] &&
      board[first] === board[second] &&
      board[first] === board[third]
  );
};

export const useBoard = () => {
  const [boardState, setBoardState] = React.useState(() =>
    new Array(9).fill(null)
  );
  const [winner, setWinner] = React.useState<string | null>(null);
  const [isCurrPlayerX, setIsCurrPlayerX] = React.useState(false);
  const updateBoard = (position: number) => {
    const val = isCurrPlayerX ? "X" : "O";
    const modifiedBoard = boardState.map((b, idx) => {
      if (idx === position) {
        return val;
      }
      return b;
    });
    setBoardState(modifiedBoard);
    setIsCurrPlayerX(!isCurrPlayerX);
    if (checkWinner(modifiedBoard)) {
      setWinner(val);
    }
  };
  const isTie = !winner && boardState.every((val) => val);
  const resetGame = () => {
    setBoardState(new Array(9).fill(null));
    setWinner(null);
    setIsCurrPlayerX(false);
  };
  return { boardState, winner, isCurrPlayerX, updateBoard, isTie, resetGame };
};
