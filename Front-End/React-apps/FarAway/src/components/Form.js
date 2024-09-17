import { useState } from "react";

function Form({ lists, useLists }) {
    const [description,setDescription]=useState("")
    const [quantity,setQuantity]=useState(1)
    function handelSubmit(e) {
        e.preventDefault()
        if(!description)
            return
        const newItem={description,quantity,packed:false,id:Date.now()}
        useLists((lists)=>[...lists,newItem])
        setDescription("")
        setQuantity(1)
    }
    return (
        <form className="add-form " onSubmit={handelSubmit}>
            <h3>What do you need for your 😍 trip ?</h3>
            <select  value={quantity}onChange={(e)=>setQuantity(Number(e.target.value))} >
                {Array.from({ length: 20 }, (_, i) => i + 1).map(el => <option value={el} key={el}>{el}</option>)}
            </select>
            <input type='text' placeholder="item..." onChange={(e)=>setDescription(e.target.value)} value={description}/>
            <button>ADD</button>
        </form>
    )
}
export default Form;