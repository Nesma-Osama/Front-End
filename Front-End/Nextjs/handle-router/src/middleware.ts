import { NextRequest, NextResponse } from "next/server";

export default function middleware(_request:NextRequest)
{
    console.log("/stop")
return NextResponse.next()
}
export const config ={
    matcher:"/",
}
