import { ServerSideFunction } from "@/utiles/server-side"
// import { useTheme } from "@/components/theme-provider"
export default function ServerRoutePage()
{
    const result=ServerSideFunction()
    //const theme=useTheme() cannot useTheme in server component

    return<><h1>ServerRoutePage</h1>
    <h2>{result}</h2></>
}