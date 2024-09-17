function Counter({ step, setStep, counter, setCounter }) {
    const date = new Date()
    date.setDate(date.getDate() + counter)

    // function handelDecStep() {
    //   setStep((s) => s - 1)
    // }
    // function handelIncStep() {
    //   setStep((s) => s + 1)
    // }
    function handelDecCoun() {
        setCounter((s) => s - step)
    }
    function handelIncCoun() {
        setCounter((s) => s + step)
    }
    function handelReset() {
        setStep(1)
        setCounter(0)
    }
    return (
        <div>
            <div className="step" >
                <input type='range' min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))} />
                <span>{step}</span>
                {/* <button onClick={handelDecStep}>-</button>
          Step:{` ${step}`}
          <button onClick={handelIncStep}>+</button> */}
            </div>
            <div className="counter" >
                <button onClick={handelDecCoun}>-</button>
                <input type='text' value={counter} onChange={(e) => setCounter(Number(e.target.value))} width={20} />
                <button onClick={handelIncCoun}>+</button>
            </div>
            <div>
                {`${counter === 0 ? "today" : counter > 0 ? `${counter} after` : `${-1 * counter} before`} ${date.toDateString()}`}
            </div>
            <button onClick={handelReset}>Reset</button>
        </div>
    )
}
export default Counter