import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "",
      arg1: 0,
      arg2: 0,
      changeString: false,
      operator: "",
      complete: false
    };
  }

  add = () => {
    this.setState({
      changeString: true,
      operator: "plus"
    });
  };

  subtract = () => {};

  multiply = () => {};

  divide = () => {};

  clear = () => {};

  equals = (arg1, arg2, operator) => {
    if (operator === "plus") {
      var answer = parseInt(arg1) + parseInt(arg2);
      this.setState({
        total: answer,
        changeString: false,
        operator: "",
        complete: true
      });
    }
  };

  changeInput = num => {
    if (this.state.changeString === false) {
      if (this.state.arg1 === 0) {
        this.setState({
          arg1: num
        });
      } else {
        this.setState({
          arg1: `${this.state.arg1}${num}`
        });
      }
    } else {
      if (this.state.arg2 === 0) {
        this.setState({
          arg2: num
        });
      } else {
        this.setState({
          arg2: `${this.state.arg1}${num}`
        });
      }
    }
  };

  render() {
    const { arg1, arg2, operator, changeString, total, complete } = this.state;
    return (
      <div className="App__Master">
        <div className="App__Number">
          {changeString === false && operator === "" && <div>{arg1}</div>}

          {changeString === true && operator !== "" && complete === false && (
            <div>{arg2}</div>
          )}

          {complete === true && <div>{total}</div>}
        </div>
        <div className="App__Row1">
          <div onClick={() => this.changeInput("7")}>7</div>
          <div className="App__Number">8</div>
          <div className="App__Number">9</div>
          <div className="App__Number">/</div>
          <div onClick={() => this.add()} className="App__Function">
            +
          </div>
        </div>
        <div className="App__Row2">
          <div className="App__Number">4</div>
          <div className="App__Number">5</div>
          <div className="App__Number">6</div>
          <div className="App__Function">-</div>
        </div>
        <div className="App__Row3">
          <div className="App__Number">1</div>
          <div className="App__Number">2</div>
          <div className="App__Number">3</div>
        </div>
        <div className="App__Row4">
          <div className="App__Number">0</div>
          <div
            onClick={() => this.equals(arg1, arg2, operator)}
            className="App__Function"
          >
            =
          </div>
        </div>
      </div>
    );
  }
}
export default App;
