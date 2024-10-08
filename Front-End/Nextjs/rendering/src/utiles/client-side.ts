// npm i client-only
// if i run it in client component will give an error
import "client-only";
export const ClientSideFunction = () => {
  console.log(`Interactive 
        Browser,
        local storage
        `);
  return "Client result";
};
