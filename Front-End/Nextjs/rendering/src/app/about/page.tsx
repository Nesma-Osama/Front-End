// can not interact
// cannot use states and effects 
// when import server component in component "use client " it will be client component in this component

// put if it children it not will bw client component in this component  
export default function About() {
  // run on server  
  console.log("Server component");
  return <h1>About Page {(new Date).toLocaleTimeString() }</h1>;
  
}
