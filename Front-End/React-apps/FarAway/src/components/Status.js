function Status({ lists }) {
    //drived status means get info from states 
    //when the state change the app will rerender and also all childs so this variables will re assigned
    const numItems = lists.length
    // const packedItems = lists.reduce((num, item) => {
    //     if (item.packed) num = num + 1
    //     return num
    // }, 0)
    const packedItems=lists.filter(item=>item.packed).length
    const percent=packedItems/numItems*100
    return (
        <footer className="stats">
            🙈 You have {numItems} on your list, and you  already packed {packedItems} ({percent}%)
        </footer>
    )
}
export default Status;