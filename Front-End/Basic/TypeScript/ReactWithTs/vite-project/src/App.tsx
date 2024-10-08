import Heading from "./components/Heading";
import Section from "./components/section";
import Count from "./components/Count";
import Counter2 from "./components/Counter2";
import List from "./components/List";
import { useCallback, useEffect, useRef, useState } from "react";
import State from "./components/State";
import { ThemeContext } from "./context";
import TestTheme from "./components/TestTheme";

function App() {
  const [count, setCount] = useState<number>(1); //if we want to accept null <number|null>
  const handleFunction = useCallback(() => setCount((prev) => prev + 1), []); //usecallback function
  const inputRef = useRef<HTMLInputElement>(null); //make use ref
  const [theme, setTheme] = useState<string>("light");
  function changeTheme(theme: string): void {
    setTheme(theme);
  }
  /**can hold a mutable value that doesn’t trigger a re-render when updated. This is useful for storing values that you want to persist across renders without causing component re-renders.
   */
  useEffect(() => {
    console.log("mounting");
    inputRef.current?.focus();
    return () => console.log("unmounting");
  }, []); //mean not change except for mounting only
  return (
    <>
      <Heading title="Hello" name="Nesma" />
      <Section title="Children Prop">
        <h3>how are you</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eius
          atque recusandae aut temporibus libero minima dolores expedita, quis
          eligendi error voluptates repudiandae aliquam quos earum officiis
          aperiam. Libero, quos.
        </p>
      </Section>
      <Count />
      <Counter2 setCount={setCount}>
        <h2>Another Counter</h2>
        <h3>{count}</h3>
      </Counter2>
      <List
        items={["Coffe", "Tea", "Juice"]}
        render={(item: string) => <span>{item}</span>}
      />
      <State />
      <input ref={inputRef} type="text" />
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <TestTheme />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
