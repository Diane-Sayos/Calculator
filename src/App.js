import './App.css';
import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    result: 0
  })

  const clearHandler = (e) => {
    e.preventDefault()
    setCalc({
      ...calc,
      num: 0
    })
  }

  const resetHandler = (e) => {
    e.preventDefault()
    setCalc({
      sign: '',
      num: 0,
      result: 0
    })
  }

  const equalHandler = (e) => {
    e.preventDefault()
    if(calc.sign && calc.num){
      const math = (a, b, sign) =>
        sign === '+'
        ? a + b
        : sign === '-'
        ? a - b
        : sign === '*'
        ? a * b
        : a / b;
        
      setCalc({
        ...calc,
        result: !calc.num && calc.sign === '/'
        ? "Can't divide with 0"
        : math(Number(calc.result), Number(calc.num), calc.sign),
        sign: '',
        num: 0
      })
    }
  }

  const dotHandler = () => {}

  const invertHandler = (e) => {
    e.preventDefault()
    setCalc({
      ...calc,
      num: calc.num? calc.num * -1 : 0,
      result: calc.result ? calc.result * -1 : 0
    })
  }

  const signHandler = (e) => {
    e.preventDefault()
    const sign = e.target.innerHTML;
    setCalc({
      sign: sign,
      result: calc.num && !calc.result? calc.num : calc.result,
      num: 0
    })
  }

  const numHandler = (e) => {
    e.preventDefault();
    const num = e.target.innerHTML;
    console.log(num)
    setCalc({
      ...calc,
      num: calc.num === 0? num : String(calc.num) + num
    })
  }

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="grid-container">
        <input className="screen"
        type='number'
        value={calc.num ? calc.num : calc.result}
        read-only='true'
        />
        <button className="ac-btn" onClick={resetHandler}>AC</button>
        <button className="c-btn" onClick={clearHandler}>C</button>
        <button className="invert-btn" onClick={invertHandler}>+/-</button>
        <button className="divide-btn" onClick={signHandler}>/</button>
        <button className="seven-btn" onClick={numHandler}>7</button>
        <button className="eight-btn" onClick={numHandler}>8</button>
        <button className="nine-btn" onClick={numHandler}>9</button>
        <button className="multiply-btn" onClick={signHandler}>*</button>
        <button className="four-btn" onClick={numHandler}>4</button>
        <button className="five-btn" onClick={numHandler}>5</button>
        <button className="six-btn" onClick={numHandler}>6</button>
        <button className="subtract-btn" onClick={signHandler}>-</button>
        <button className="one-btn" onClick={numHandler}>1</button>
        <button className="two-btn" onClick={numHandler}>2</button>
        <button className="three-btn" onClick={numHandler}>3</button>
        <button className="add-btn" onClick={signHandler}>+</button>
        <button className="zero-btn" onClick={numHandler}>0</button>
        <button className="dot-btn" onClick={dotHandler}>.</button>
        <button className="equal-btn" onClick={equalHandler}>=</button>
      </div>
    </div>
  );
}

export default App;
