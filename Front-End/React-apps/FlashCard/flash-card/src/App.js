import { useState } from "react";
import flashCards from "./Data.js"

import FlashCard from "./FlashCard";
function App() {
  const [activeId, setActiveID] = useState(null)

  return (
    <div className="flashCards">
      {flashCards.map(card=><FlashCard key={card.id} question={card.question} answer={card.answer} id={card.id} activeId={activeId} setActiveID={setActiveID}/>)}
    </div>
  );
}

export default App;
