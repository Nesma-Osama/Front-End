import { useState } from "react";
import Item from "./Item"
function Lists({ lists, useLists, onToggleItem, onRemoveItem,onClearAll }) {
    const [sortBy, setSortBy] = useState("input")
    let sortedItems;
    if (sortBy == "input") sortedItems = lists
    if (sortBy == "description") sortedItems = lists.slice().sort((a, b) => a.description.localeCompare(b.description))
    if (sortBy == "packed") sortedItems = lists.slice().sort((a, b) => Number(a.packed) - Number(b.packed))

    return (
        <div className='list'>
            <ul>
                {sortedItems.map(li => <Item item={li} useLists={useLists} onToggleItem={onToggleItem} onRemoveItem={onRemoveItem} />)}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed</option>
                </select>
                <button  onClick={onClearAll}>Clear All</button>

            </div>

        </div>
    )
}
export default Lists;