import "./App.css";
import { useState } from "react";
import Calculator from "./components/Calculator";
import Animate from "./components/Animation";

function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <Calculator isOn={isOn} setIsOn={setIsOn} />
    </>
  );
}

export default App;
