import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  console.log(input);

  function handleInput(event) {
    setInput(event.target.value);
    console.log(event.target.value);
  }

  function handleButton1(event) {}

  function handleSubmit(event) {
    // event.preventDefault();
    // setInput("");
  }

  return (
    <div>
      <h2> Calculator</h2>
      <form onSubmit={handleSubmit} >
        <div className="calc-container">
        <input onChange={handleInput} value={input} placeholder="..." id="calc-display" />
        <button className="calc-button" onClick={handleButton1}>1</button>
        <button className="calc-button" onClick={handleButton1} value='1'>2</button>
        <button className="calc-button" >3</button>
        <button className="calc-button" >+</button>
        <button className="calc-button" >4</button>
        <button className="calc-button" >5</button>
        <button className="calc-button" >6</button>
        <button className="calc-button" >-</button>
        <button className="calc-button" >7</button>
        <button className="calc-button" >8</button>
        <button className="calc-button" >9</button>
        <button className="calc-button" >*</button>
        <button className="calc-button" >0</button>
        <button className="calc-button" >/</button>
        <button className="calc-button" >C</button>
        <button id="equals-button" className="calc-button" type="submit">=</button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;

// 1. if press any button except C   it should show on display

// 2. build functions: Add, Subtract, Multiply, Divide.

// 3. if display last char is '=' then invoke functions

// 4. display accepts only one operation sign.
