export default function Buttons({number,setNumber, steps}) {
    function handelPrevious()
    {
      if(number>1)
        setNumber(num=>num-=1)
    }
    function handelNext(){
        if(number<=steps-1)
            setNumber(num=>num+=1)
    }
    return (
        <div className="buttons">
            <button onClick={handelPrevious} style={{background:'#7950f2', color:'#fff'}}>
               Previous
            </button>
            <button onClick={handelNext} style={{background:'#7950f2', color:'#fff'}}>
                Next
            </button>
        </div>
    )
}
