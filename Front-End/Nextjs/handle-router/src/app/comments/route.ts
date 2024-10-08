import { NextRequest } from "next/server";
import { Comments, Comment } from "./data";
// export async function GET() {
//   return Response.json(Comments);
// }

// quary
export async function GET(request:NextRequest){
  const searchParams: URLSearchParams=request.nextUrl.searchParams;
  const query:string | null=searchParams.get("query")
  const filteredComment:Comment[]=query?Comments.filter(comment=>comment.title.includes(query)):Comments
  return Response.json(filteredComment)
}
export async function POST(request: Request) {
  const req: { title: string } = await request.json();
  const newComment: Comment = { id: req.title.length + 1, title: req.title };
  Comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "Application/json" },
    status: 201,
  }); // new if respone only but response.json no
}
// when create router.tsx and page .tsx in the sa,e folder it will show router as get if it get request
