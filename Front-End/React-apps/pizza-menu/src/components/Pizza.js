function Pizza(props)
{
return(
    <li className={`pizza ${props.pizza.soldOut?"sold-out":""}`}>
         <img src={props.pizza.photoName} alt={props.pizza.name} />
         <div>
             <h3>{props.pizza.name}</h3>
             <p>{props.pizza.ingredients}</p>
             <p>{props.pizza.soldOut?"SOLD OUT":props.pizza.price}</p>
         </div>
        </li>
)
}
export default Pizza;