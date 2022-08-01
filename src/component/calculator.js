import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="container">
        <div className="top">0</div>
        <div className="wrapper">
          {/* <button type="button" className="top">0</button> */}
          <button type="button" className="no-zero-class">AC</button>
          <button type="button" className="no-zero-class">+/-</button>
          <button type="button" className="no-zero-class">%</button>
          <button type="button" className="no-zero-class operator">÷</button>
          <button type="button" className="no-zero-class">7</button>
          <button type="button" className="no-zero-class">8</button>
          <button type="button" className="no-zero-class">9</button>
          <button type="button" className="no-zero-class operator">x</button>
          <button type="button" className="no-zero-class">4</button>
          <button type="button" className="no-zero-class">5</button>
          <button type="button" className="no-zero-class">6</button>
          <button type="button" className="no-zero-class operator">-</button>
          <button type="button" className="no-zero-class">1</button>
          <button type="button" className="no-zero-class">2</button>
          <button type="button" className="no-zero-class">3</button>
          <button type="button" className="no-zero-class operator">+</button>
          <button type="button" className="zero-class">0</button>
          <button type="button" className="no-zero-class">.</button>
          <button type="button" className="no-zero-class operator">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
