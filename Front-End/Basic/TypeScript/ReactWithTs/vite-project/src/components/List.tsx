import { ReactNode } from "react";
//Generic
interface LitsProps<T> {
  items: T[]; //list of generic
  render: (item: T) => ReactNode; // to define function will pass ans  what will return =>
};
const List = <T,>({ items, render }: LitsProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};
export default List;
