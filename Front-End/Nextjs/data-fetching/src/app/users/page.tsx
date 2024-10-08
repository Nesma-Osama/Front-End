type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
// by default next js automatically caches the returned values of fetch in thr data cache in the server
// replace any fetch I want to cach before fetch request with no-store
// next js will not cach any fetch after dynmaic function like headers cookies search params

export default async function UsersShow() {
  await new Promise(resolve=>(setTimeout(resolve,4000)))
  const response = await fetch("https://jsonplaceholder.typicode.com/users",{cache:"no-store"});
  // const response = await fetch("https://jsonplaceholder.typicode.com/users",{next:revalidate:10}); this if we refresh after 10 second call the api actually not from cache
  /**
   * he revalidate feature in Next.js is server-side caching. So, 
   * if someone makes a request after 10 seconds (such as refreshing the page or another 
   * user visiting), it will fetch fresh data from the API. However, it won't periodically update the page data without
   *  a manual refresh or navigation event.
   */
  const userDate = await response.json();
  return (
    <div>
      {userDate.map((user:User) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
}
// memoization is used to access data fetching in like layout page and multiple components in the samoe route
// it execute the fetch of the higher in component tree
// get only