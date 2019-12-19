import React, { Component } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Addition from "./Addition/addition";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [
        { number: Math.floor(Math.random() * (10 - 0 + 1)) + 2 },
        { number: Math.floor(Math.random() * (10 - 0 + 1)) + 2 }
      ]
    };
  }

  generateEquationHandler = () => {
    const minNum = 2;
    const maxNum = 20;
    const randomNumber =
      Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    const randomNumberTwo =
      Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    this.setState({
      numbers: [{ number: randomNumber }, { number: randomNumberTwo }]
    });
  };
  render() {
    const { generateEquationHandler } = this;
    const { numbers } = this.state;
    return (
      <div className="App">
        <h1>Emily's Kinder App</h1>
        <button
          className="waves-effect waves-light btn"
          onClick={generateEquationHandler}
        >
          Generate
        </button>
        <Addition
          firstNumber={numbers[0].number}
          secondNumber={numbers[1].number}
        />
      </div>
    );
  }
}

export default App;
