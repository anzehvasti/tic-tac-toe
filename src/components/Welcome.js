import React from "react";
import Game from "./Game";

function playGame() {
  <Game />;
}

function Welcome() {
  return (
    <div className="welcome-wrapper d-flex justify-content-center align-items-center">
      <h1 className="text-white">Tic-tac-toe</h1>
      <button onClick={playGame} className="btn btn-warning text-white my-3">
        Play
      </button>
    </div>
  );
}

export default Welcome;
