import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value)
    const handleClick = (e) => {
        setCounter(counter + 1)
    }
    const handleClick2 = (e) => {
        setCounter(counter - 1)
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleClick}>+1</button>
            <button onClick={() => setCounter(value)}>Reset</button>
            <button onClick={handleClick2}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp