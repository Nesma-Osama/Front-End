export default function Friend({ friend, selectedItem, setSelectedItem }) {
    function handelSelectedItem() {
        if (selectedItem?.id === friend.id)
            setSelectedItem(null)
        else setSelectedItem({name:friend.name,id:friend.id})
    }
    return (
        <li key={friend.id} className={(selectedItem?.id===friend.id)?"selected":""}>
            <h3>{friend.name}</h3>
            {friend.balance === 0 ? <p>You and {friend.name} are even</p>
                : friend.balance > 0 ? <p className="green">{friend.name} owns you {friend.balance} $</p>
                    : <p className="red"> You own {friend.name} {-1 * (friend.balance)} $</p>}
            <img src={friend.image} alt={friend.name} />
            <div className="button" onClick={() => handelSelectedItem()}>
                {selectedItem?.id === friend.id ? "Close" : "Select"}
            </div>
        </li>
    )
}