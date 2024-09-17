import "./styles.css";
import { useState } from 'react'
import Logo from "./components/Logo";
import Form from "./components/Form";
import Lists from "./components/Lists"
import Status from "./components/Status"
export default function App() {
  const [lists, useLists] = useState([])
  function handelToggleItem(id) {
    useLists(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function handelRemoveItem(id) {
    useLists((list) => list.filter((li) => li.id !== id))
  }
  function handleClearAll() {
    useLists([])
  }
  return (
    <div className="app">
      <Logo />
      <Form lists={lists} useLists={useLists} />
      <Lists lists={lists} useLists={useLists} onToggleItem={handelToggleItem} onRemoveItem={handelRemoveItem} onClearAll={handleClearAll} />
      <Status lists={lists} />
    </div>
  );
}
