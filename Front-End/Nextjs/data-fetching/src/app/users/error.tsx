"use client"

import { useEffect } from "react"

export default function ErrorBoundary({error}:{error:Error})
{
useEffect(()=>{
    console.error(`${error}`)
},[error])
return (
    <div>
        <h1>Error Fetching user data</h1>
    </div>
)
}
/**
 * 
 * 
 *  the console.error statement would be executed every time the component re-renders, which might lead to redundant logging. By using useEffect, the error is logged only when it changes, preventing unnecessary side effect execution.
 */