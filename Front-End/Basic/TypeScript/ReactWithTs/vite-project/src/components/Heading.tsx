//How to define a prop
type HeadingProps = { title?: string; name: string };
// in title to put default value must be optional parameter
export default function Heading({ title='welcome', name }: HeadingProps) {
  return (
    <>
      <h1>{title?.toLocaleUpperCase()}</h1>{/* if we not put default for title must use ?  */}
      <h2>{name}</h2>
    </>
  );
}
