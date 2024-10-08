// call all segments mean when url /docs it accept and parameters after it like docs/feature1/contnet1/.......
// it can be only [...slug ] but [[..slug]] to prevent error page for docs only
export default function Doc({params}:{
    params:{slug:string[]}
}){
        return (
            <>
            {params.slug.length===1&&<h1>Docs {params.slug[0]}</h1>}
            {params.slug.length===2&&<h1>Docs {params.slug[0]} {params.slug[1]}</h1>}
            </>
        )
    
}