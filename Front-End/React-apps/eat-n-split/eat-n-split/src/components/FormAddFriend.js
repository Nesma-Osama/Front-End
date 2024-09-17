import { useState } from "react"

export default function FormAddFriend({ onAddFriend, setIsAddFriend }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")
    function handleAddButton(e) {
        e.preventDefault()
        if(name==="" ||image==="")
            return 
        onAddFriend(name, image)
        setName("")
        setImage("https://i.pravatar.cc/48")
        setIsAddFriend(false)
    }
    return (
        <form className="form-add-friend" onSubmit={(e) => handleAddButton(e)}>
            <label>🧍🏼‍♂️Friend name</label>
            <input type="text" value={name}  onChange={(e) => setName(e.target.value)}  />
            <label>📷 Image URL</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            <button className="button">Add</button>
        </form>
    )
}