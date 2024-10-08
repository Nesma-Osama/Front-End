"use client";
import { useRouter } from "next/navigation";
export default function ProductOrder()
{
    const router=useRouter()
    const handelClick=()=>{
        console.log("when click button go to home page")
        router.push("/")
    }
    return(
        <>
        <h1>Produnct Oreder</h1>
        <button onClick={handelClick}>Order</button>
        </>
    )
}