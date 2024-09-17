function Numbers({ numbers,number }) {
    return (
        <div className="numbers">
            {numbers.map(num => <div className={number>=num?"active":""} key={num}>
                {num}
            </div>)}
        </div>
    )
}
export default Numbers;