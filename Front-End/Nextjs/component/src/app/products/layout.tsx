//layout is apply for all thr folders in the folder which has layout.tsx and all folders inside them
import { ReactNode } from "react"

export default function ProdunctLayout({children}:{
children:ReactNode;
})
{
    return(
        <>
        
        {children}
        <h2>Produnct List</h2>
        </>
    )
}