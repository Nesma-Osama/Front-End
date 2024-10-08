import { useState } from "react";
//how to define state 
export default function Count(){
    const [count,setCount]=useState<number>(1)//if we want to accept null <number|null>
    return<>
    <h2>Count is {count}</h2>
    <button onClick={()=>setCount(prev=>prev+1)}>+</button>
    <button onClick={()=>setCount(prev=>prev-1)}>-</button>

    </>
}