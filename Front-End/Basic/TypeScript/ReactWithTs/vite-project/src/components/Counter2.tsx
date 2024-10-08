import { ReactNode } from "react";
type CounterProps = {
  children: ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
export default function Counter2({ children, setCount }: CounterProps) {
  return (
    <>
      {children}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
}
