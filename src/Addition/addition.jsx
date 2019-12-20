import React from "react";
import "./addition.scss";

const addition = props => {
  const { firstNumber, secondNumber, additionAnswer, submit } = props;
  return (
    <div class="row">
      <div className="addition-container col s12">
        <button className="waves-effect waves-light btn">{firstNumber}</button>
        <a className="btn-floating btn-large waves-effect waves-light red">
          <i class="material-icons">+</i>
        </a>
        <button className="waves-effect waves-light btn">{secondNumber}</button>
      </div>
      <form onSubmit={submit}>
        <div class="input-field col s4 offset-s4">
          <input id="answer" type="text" value={additionAnswer} />
        </div>
      </form>
    </div>
  );
};

export default addition;
