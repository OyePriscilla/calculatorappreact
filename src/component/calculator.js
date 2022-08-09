import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [calc, setCalc] = useState({ next: 0, total: 0 });

  const buttonKeyClick = (e) => {
    const result = calculate(calc, e.target.textContent);
    setCalc(result);
  };

  const resultDisplayClick = (e) => {
    setCalc({
      total: e.target.textContent,
    });
  };

  return (
    <div style={{
      display: 'flex', justifyContent: 'spaceEvenly', margin: '50px',
    }}
    >
      <div style={{ fontSize: '24px', fontWeight: '900', marginLeft: '120px' }}>Let&apos;s do some math!</div>
      <div className="container">
        <div className="top" onChange={resultDisplayClick}>{ calc.next || calc.total || 0 }</div>
        <div className="wrapper">
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">AC</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">+/-</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">%</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class operator">÷</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">7</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">8</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">9</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class operator">x</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">4</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">5</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">6</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class operator">-</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">1</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">2</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">3</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class operator">+</button>
          <button type="button" onClick={buttonKeyClick} className="zero-class">0</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class">.</button>
          <button type="button" onClick={buttonKeyClick} className="no-zero-class operator">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
