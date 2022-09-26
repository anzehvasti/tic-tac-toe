import React from "react";

const Square = ({ value, onClick }) => (
  <button className="squareStyle" onClick={onClick}>
    {value}
  </button>
);

export default Square;
