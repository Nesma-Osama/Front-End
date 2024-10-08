export default async function UserLayout({children}:{children:React.ReactNode})
{
    const response = await fetch("https://jsonplaceholder.typicode.com/users",{cache:"no-store"});
    const userDate = await response.json();
 return(
    <div>
    {children}
    </div>
 )   
}