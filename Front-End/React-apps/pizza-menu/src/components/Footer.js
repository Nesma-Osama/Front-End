import { useState, useEffect } from "react";
function Footer() {
    const [date, setDate] = useState(new Date().getHours())
    const open = 12
    const close = 24
    const isOpen = date >= open && date <= close


    useEffect(function () {

        const interval = setInterval(() => setDate(new Date().getHours()), 1200 * 1000)
    }, [date])
    return (
        <footer>
            {isOpen && (<div className="order"><p>We are currently open untill {close}</p>
                <button className="btn">Order</button>
            </div>)}
        </footer>
    )
}
export default Footer