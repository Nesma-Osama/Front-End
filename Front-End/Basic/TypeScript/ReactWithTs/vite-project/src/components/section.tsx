import { ReactNode } from "react";
//Childern props is ReactNode data type
type sectionProp = { children: ReactNode; title: string };
export default function Section({ children, title }: sectionProp) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}
