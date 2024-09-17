import Numbers from "./Components/Numbers";
import Message from "./Components/Message";
import Buttons from "./Components/Buttons";
import { useState } from "react";
const messages=["Learn React ⚛️","Apply for jobs 💼"," Invest your new income 🤑"]
const numbers = [1, 2, 3]

function App() {
  const [number,setNumber]=useState(1)
  const [close,setClose]=useState(false)
  return (
    <>
    <div className={`steps ${close ?"disapper":""}` }>
      <Numbers  numbers={numbers}number={number} />
      <Message message={messages[number-1]} number={number} />
      <Buttons number={number} setNumber={setNumber} steps={numbers.length}/>
    </div>
    <button className="close" onClick={()=>setClose(cl=>!cl)}>&times;</button>

</>
  );
}

export default App;
