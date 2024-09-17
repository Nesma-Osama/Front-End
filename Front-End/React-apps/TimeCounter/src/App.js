import "./styles.css";
import { useState } from "react";
import Counter from "./Counter";
export default function App() {
  const [step, setStep] = useState(1)
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <Counter step={step} counter={counter} setStep={setStep} setCounter={setCounter} />
    </div>
  );
}

