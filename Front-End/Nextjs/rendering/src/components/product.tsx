export default async function Products()
{
    await new Promise((resolve)=>setTimeout(resolve,2000))
    return <h1>Products</h1>
}