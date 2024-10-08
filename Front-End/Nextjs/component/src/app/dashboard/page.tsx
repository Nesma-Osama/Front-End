/*

In Next.js 13+, Parallel Routes allow you to render multiple routes or components in parallel under a single parent layout or page. This is useful when you want to display multiple sections of a page with independent content, loading states, or even separate layouts.

When to Use Parallel Routes and Components
You can use Parallel Routes and Components when:

You need multiple views or sections within a page that load independently, such as a dashboard with separate panels (e.g., a sidebar and a main content area).
You want different loading and error states for each section, meaning one part of the page can be loaded or error out independently without affecting the other parts.
You have complex layouts that include multiple nested layouts or UI components where each component might represent a different parallel section of the page.
*/ 
export default function DashBoard()
{
    return <h1>DashBoard</h1>
}