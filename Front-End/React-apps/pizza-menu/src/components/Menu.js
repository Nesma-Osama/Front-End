import pizzaData from "../data.js"
import Pizza from "./Pizza";

function Menu() {
    console.log(pizzaData.length)
    return (
        <>
            {
                pizzaData.length >= 0 ? (
                    <div className="menu">
                        <h2>OUR MENU</h2>
                        <ul className="pizzas">
                            {pizzaData.map((pizza) => <Pizza pizza={pizza} key={pizza.name} />)}
                        </ul>
                    </div>)
                    : null}
        </>
    )
}
export default Menu;