import { Comments } from "../data";
import { redirect } from "next/navigation";
// i will not use request so put before it _
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const comment = Comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  if (comment === undefined) redirect("/comments"); // redirect
  return Response.json(comment);
}
/*Server-side redirects: Use redirect inside getServerSideProps or getStaticProps to control redirects before the page is served to the client.
Client-side redirects: Use router.push() from next/router to navigate users on the client side. */

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const req = await request.json();
  const { title }: { title: string } = req;
  const id: number = Comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  console.log("hello");
  if (id >= 0) {
    Comments[id].title = title;
    return Response.json(Comments);
  }
  return Response.json({ message: "not found" });
}
export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id: number = Comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  if (id >= 0) {
    const deletedComment = Comments[id];
    Comments.splice(id, 1); //delete one element start from this index
    return Response.json(deletedComment);
  }
  return Response.json({ message: "not found" });
}
