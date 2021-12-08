import React from "react";
import { Board } from "./Board";
import { useBoard } from "./hooks/useBoard";

export const TicTacToe = () => {
  const {
    boardState,
    resetGame,
    winner,
    isCurrPlayerX,
    updateBoard,
    isTie
  } = useBoard();

  const renderWinnerDetails = () => {
    if (isTie) {
      return (
        <div>
          <span>
            Match is drawn, please restart the game by clicking the below button
          </span>
        </div>
      );
    }
    if (winner) {
      return <div>Player {winner} wins the game.</div>;
    }
    return <div>Game is still in progress.</div>;
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "200px",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Board
          currBoard={boardState}
          handleOnClick={updateBoard}
          winner={winner}
          isCurrPlayerX={isCurrPlayerX}
        />
      </div>
      {!winner && <div>Player {isCurrPlayerX ? "X" : "O"}'s turn</div>}
      {renderWinnerDetails()}
      <button onClick={resetGame} style={{background:"blue", color:'#fff', padding: '10px', margin: '10px'}}> Reset the game</button>
    </React.Fragment>
  );
};
