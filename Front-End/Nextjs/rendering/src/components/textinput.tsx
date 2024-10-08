"use client";
// ant component will be imported in this componwnt will be client componment in here only
// be if it children not
import { useState } from "react";
export default function TextInput() {
  console.log("client component");
  const [name, setName] = useState<string>("");
  return (
    <>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} />
      <h2> name is {name}</h2>
    </>
  );
}
