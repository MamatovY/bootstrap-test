import './counter.scss'

import { useState, useEffect } from 'react'

const useCounter = () => {
    const [counter, setCounter] = useState(null)
    useEffect(() => {
        console.log('Fetch');
        fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
            .then(res => res.text())
            .then(res => setCounter(res))
            .catch(err => console.log(err))
    }, [])
    const inc = () => {
        if (counter < 50) {
            setCounter(counter + 1)
        } else {
            alert('Нельзя больше 50')
        }
    }

    const dec = () => {
        if (counter > -50) {
            setCounter(counter - 1)
        } else {
            alert('Нельзя меньше -50')
        }
    }

    const rnd = () => {
        setCounter(Number((Math.random() * (50 - - 50) + -50).toFixed(0)))
    }

    const reset = () => {
        setCounter(0)
    }

    return { counter, inc, dec, rnd, reset }
}


const Count = () => {
    const { counter, inc, dec, rnd, reset } = useCounter()

    return (
        <div className="component">
            <div className="counter">{counter}</div>
            <div className="controls">
                <button onClick={inc}>INC</button>
                <button onClick={dec}>DEC</button>
                <button onClick={rnd}>RND</button>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    )
}

const RndCounter = () => {
    const { counter, rnd, reset } = useCounter()
    return (
        <div className="component">
            <div className="counter">{counter}</div>
            <div className="controls">
                <button onClick={rnd}>RND</button>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    )
}

const Counter = () => {
    return (
        <>
            <Count />
            <RndCounter />
        </>
    )
}


export default Counter