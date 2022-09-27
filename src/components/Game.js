import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    //If user clicks on occupied field or if game is won, then return

    if (winner || boardCopy[i]) return;
    // Put an X or O in the empty square field
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => (
    <button
      className="btn btn-warning d-flex justify-content-center align-item-center text-center text-white mx-auto"
      onClick={() => setBoard(Array(9).fill(null))}
    >
      Ponovi igro
    </button>
  );

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div>
        <p className="text-center text-white mt-4">
          {winner
            ? "Zmagovalec: " + winner
            : "Igralec: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
