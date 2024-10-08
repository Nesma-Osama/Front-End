//to make routing must be in scr folder for home page create page.tsx inside src
// error cannot trigger an error in layout at the same level so must move it tp parent
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <p><Link href="/blog">Blog</Link></p>
     <p> <Link href="/products">Products</Link></p>
    </>
  );
}
/**
layout 
 template 
  error
  loading
    page

  not found   
*/