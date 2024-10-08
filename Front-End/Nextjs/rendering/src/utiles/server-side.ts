import "server-only"; // this model for server only
// npm i server-only
// if i run it in client component will give an error
export const ServerSideFunction = () => {
  console.log(`use multiple libraries,
        interact with database,
        use environmaent variable,
        process confidential information
        `);
  return "Server result";
};
