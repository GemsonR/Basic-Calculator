import styles from "./calculator.module.css";
import Button from "./Button";
import { useState } from "react";
import Animate from "./Animation";

export default function Calculator({setIsOn, isOn}) {
  const [inputValue, setInputValue] = useState("");


  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleOnCLick() {
    setIsOn((prev) => !prev);
  }

  return (
    <div className={`${styles.calculator} ${isOn && styles.calculatorOn}`}>
      <div className={styles.display}>
        <input
          className={`${styles.input} ${!isOn && styles.inputOff}`}
          type="text"
          value={inputValue}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={`${styles.onOffContainer} ${isOn && styles.on} `}>
        <button onClick={handleOnCLick}></button> <Animate isOn={isOn} />
      </div>
      <div className={styles.btn}>
        <Button
          setInputValue={setInputValue}
          inputValue={inputValue}
          isOn={isOn}
        />
      </div>
     
    </div>
  );
}
