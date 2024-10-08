// static meta data
import { Metadata } from "next"
export const metadata:Metadata={
    title:{absolute:"Product Page"
        //to prevent template 
    }
}
export default  function ProductList()
{
    return(<>
    <h1>Products Page</h1>
    <ul>
        <li>Product1</li>
        <li>Product2</li>
        <li>Product3</li>
    </ul>
    </>)
}