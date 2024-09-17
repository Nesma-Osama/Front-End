function Item({ item, useLists, onToggleItem,onRemoveItem }) {
  
    return (
        <li key={item?.id} >
            <input type="checkbox" value={item.packed} onChange={() => { onToggleItem(item.id) }} />
            <span style={item?.packed ? {
                textDecoration: "line-through"
            } : {}}>{item?.quantity} {item?.description}</span>
            <button style={{ background: 'none' }} onClick={()=>onRemoveItem(item.id)}>❌</button>
        </li>
    )
}
export default Item;