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

      <img
        className="top-left"
        src={process.env.PUBLIC_URL + "img/cross1.svg"}
      />
      <img
        className="bottom-right"
        src={process.env.PUBLIC_URL + "img/cross2.svg"}
      />
      <img
        className="bottom-left"
        src={process.env.PUBLIC_URL + "img/o1.svg"}
      />
      <img
        className="cross-btm"
        src={process.env.PUBLIC_URL + "img/cross-btm.svg"}
      />
      <img
        className="cross-btm-line"
        src={process.env.PUBLIC_URL + "img/cross-btm-line.svg"}
      />
      <img
        className="o-top-line"
        src={process.env.PUBLIC_URL + "img/o-top-line.svg"}
      />
      <img
        className="x-top-line"
        src={process.env.PUBLIC_URL + "img/x-top-line.svg"}
      />
    </div>
  );
}

export default Welcome;
