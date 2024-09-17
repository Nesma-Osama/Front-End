import faqs from "./data"
import { useState } from "react";
import List from "./components/List";
function App() {
  return (
    <>
      <List list={faqs} />
    </>
  )
}

export default App;
