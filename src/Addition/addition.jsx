import React from "react";

const addition = props => {
  const { firstNumber, secondNumber } = props;
  return (
    <div>
      <button className="waves-effect waves-light btn">{firstNumber}</button>
      <button className="waves-effect waves-light btn">{secondNumber}</button>
    </div>
  );
};

export default addition;
