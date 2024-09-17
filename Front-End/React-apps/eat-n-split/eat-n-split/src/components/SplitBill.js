import { useState } from "react"

export default function SplitBill({ selectedItem, onUpdateFriend ,setSelectedItem}) {
    const [bill, setBill] = useState("")
    const [yourExpense, setYourExpense] = useState("")
    const [option, setOption] = useState("You")
    const friendExpense = bill !== "" ? (bill - yourExpense) : ""
    function handelOnSubmit(e) {
        e.preventDefault()
        if (!bill || !yourExpense) return
        const balance = option !== "You" ? (-1 * yourExpense) : friendExpense
        onUpdateFriend(selectedItem?.id, balance)
        setSelectedItem(null)
    }
    return (
        <form className="form-split-bill" onSubmit={(e) => handelOnSubmit(e)}>
            <h2>split a bill with {selectedItem?.name}</h2>
            <label>💰 Bill value </label>
            <input type="number" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
            <label>🧍🏼‍♂️ Your expense</label>
            <input type="number" value={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value) > bill ? yourExpense : Number(e.target.value))} />
            <label>🧍🏼‍♂️🧍🏼‍♂️ {selectedItem?.name}’s expense:</label>
            <input disabled value={friendExpense} />
            <label>🤑 Who is paying the bill?</label>
            <select value={option} onChange={(e) => setOption(e.target.value)}>
                <option value="You">You</option>
                <option value={selectedItem?.name}>{selectedItem?.name}</option>
            </select>
            <button className="button" >Split bill</button>
        </form>
    )
}