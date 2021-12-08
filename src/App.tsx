import "./styles.css";
import React from "react";
import { TicTacToe } from "./TicTacToe";

/**
 *
 * Requirements:
 * A board
 * Squares in a board
 * players state
 * calculate winner strategy
 * reset game
 * check if its a tie
 */
export default function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <TicTacToe />
    </div>
  );
}
