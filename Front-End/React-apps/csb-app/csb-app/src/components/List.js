import Item from "./Item"
export default function List({ list }) {
    return (
        <div className="accordion">
            {list.map((item, i) => <Item item={item} key={i} num={i + 1} />)}
        </div>
    )

}