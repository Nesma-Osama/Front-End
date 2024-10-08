import Link from "next/link"
export default function ArchiveNavigation()
{
    return<><h1> Archive Navigation Bar</h1>
    <p> change within the postion only</p>
    <Link href="/dashboard">Default</Link>
    </>
    // the render is affect only the Navigation beacuse it parall 
    // we must add default file inside user and dashboard to prevent when reload this make an error 
    // inside this file we add the same contant of the user and dashboard
}