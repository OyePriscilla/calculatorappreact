import React, { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };
  }

  buttonKeyClick = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  };

  resultDisplayClick = (e) => {
    this.setState({
      total: e.target.textContent,
    });
  };

  render() {
    const presentState = this.state;
    return (
      <div className="container">
        <div className="top" onChange={this.resultDisplayClick}>
          {presentState.next || presentState.total || 0}
        </div>
        <div className="wrapper">
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">AC</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">+/-</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">%</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class operator">÷</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">7</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">8</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">9</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class operator">x</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">4</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">5</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">6</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class operator">-</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">1</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">2</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">3</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class operator">+</button>
          <button type="button" onClick={this.buttonKeyClick} className="zero-class">0</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class">.</button>
          <button type="button" onClick={this.buttonKeyClick} className="no-zero-class operator">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
