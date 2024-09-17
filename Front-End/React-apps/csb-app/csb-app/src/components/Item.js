import { useState } from "react"
export default function Item({ item, num }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`item ${isOpen ? "open" : ""} `} onClick={() => setIsOpen(isOpen => !isOpen)}>
            <p className="number">{ num<=9?`0${num}`:num }</p>
            <p className="title">{item.title}</p>
            <p className="icon" >
                {isOpen ? "-" : "+"}
            </p>
            {isOpen ? <div className="content-box">{item.text}</div> : null}
        </div>
    )
}