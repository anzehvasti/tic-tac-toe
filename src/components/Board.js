import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div>
    <h2 className="text-center mb-4">Igraj!</h2>
    <div className="boardStyle">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  </div>
);

export default Board;
