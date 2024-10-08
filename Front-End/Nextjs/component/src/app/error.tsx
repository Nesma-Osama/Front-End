"use client";
// it show instead of the page which has an error
// reset will reload the page which has this error
// error file is for all nested child segment
/**
 * 
 * 
 * If the error.tsx file is in the same folder as the layout (layout.tsx), the layout will continue to wrap the error page, maintaining the overall structure (like headers, footers, etc.).
If the error.tsx file is moved to another folder, and that folder does not have a layout, the error boundary will not apply the layout from the original folder, leading to the absence of the layout when errors occur.
that mean the nearst layout wrap the error 
 */
export default function ErrorBoundary({error,reset}:{error:Error,reset:()=>void})
{
    return(
        <>
        <div>{error.message}</div>
        <button onClick={reset}> Try Again</button>
        </>
    )
}