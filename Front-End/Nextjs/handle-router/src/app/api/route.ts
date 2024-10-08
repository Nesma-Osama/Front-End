import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";
// not when use get without useing request it will cach the result we wont this or not useing cookie header 
// this is for get only
export async function GET(request: NextRequest) {
  // first way
  const headerList = new Headers(request.headers);
  // or  the same use headers
  const headerList2 = headers();

  console.log(headerList.get("Authorization"));
  console.log(headerList2.get("Authorization"));
  // get cookies
  console.log(cookies().get("numberPerPage"))
  // set cookie

  // 1- way to set cookie
  cookies().set("numberPerPage", "20");
  //2- second way
  return new Response("<h1>hello</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
