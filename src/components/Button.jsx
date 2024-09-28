import { useState } from "react";
import styles from "./button.module.css";

const btns = [
  "1",
  "2",
  "3",
  "/",
  "4",
  "5",
  "6",
  "*",
  "7",
  "8",
  "9",
  "-",
  "c",
  "0",
  "=",
  "+",
];
const operators = ["+", "-", "/", "*"];

export default function Button({ setInputValue, inputValue, isOn }) {
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  function handleClick(val) {
    if (!isOn) {
      setInputValue("");
      setOperator(null);
      setPrevValue(null);
    } else if (val === "c") {
      setInputValue("");
      setOperator(null);
      setPrevValue(null);
    } else if (operators.includes(val)) {
      setPrevValue(inputValue);
      setInputValue("");
      setOperator(val);
    } else if (val === "=") {
      if (prevValue !== null && operator) {
        const result = handleExpression(prevValue, inputValue, operator);
        setInputValue(result.toString());
      }
    } else {
      setInputValue((prev) => prev + val);
    }
  }

  function handleExpression(prev, current, operator) {
    const prevVal = parseFloat(prev);
    const curNum = parseFloat(current);
    switch (operator) {
      case "+":
        return prevVal + curNum;
      case "-":
        return prevVal - curNum;
      case "*":
        return prevVal * curNum;
      case "/":
        return curNum !== 0 ? prevVal / curNum : prevVal;
      default:
        return current;
    }
  }

  return btns.map((val) => (
    <button
      key={val}
      className={`${styles.btn} ${!isOn && styles.off}`}
      onClick={() => handleClick(val)}
    >
      {val}
    </button>
  ));
}
