import Products from "@/components/product";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

export default function ProductDetails()
{
    return(
        <>
        <h1>Product Details</h1>
        <Suspense fallback={<p>Product Loading ....</p>}>
        <Products/>{/*beacuse it take time the whole page will not show untill all this time is finish will b4 more than 4s because reviews*/  }
        </Suspense>
        {/**To solve this use streaming <suspense> */}
        <Suspense fallback={<p>Reviews Loading ....</p>}>
        <Reviews/>
        </Suspense>
        </>
    )
}