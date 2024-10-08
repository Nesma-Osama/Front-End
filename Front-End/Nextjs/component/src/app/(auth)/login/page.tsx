"use client";

import { usePathname } from "next/navigation";
export default function Login()
{
    const pass="123";
    if(pass=="123") throw new Error("Error while loading Login")
    const Path=usePathname()// this get the active url can use it in layout to make checks
    console.log(Path)
    return <h1>Login </h1>
}