
function FlashCard({ question, answer,id,setActiveID, activeId}) {
    function handelClick(id)
    {
        if(id===activeId)
            setActiveID(null)
        else setActiveID(id)
    }
    return (
        <>
            {
                <div className={`card ${activeId===id?"answer":"question"}`} onClick={() => handelClick(id)}>
                    <p>
                        {activeId===id ? answer : question}
                    </p>
                </div>
            }
        </>
    )

}
export default FlashCard