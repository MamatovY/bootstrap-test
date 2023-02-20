import { useState, useEffect } from 'react'

import './rate.scss'

const Rate = (props) => {

    const [counter, setCounter] = useState(props.counter)

    const [error, setError] = useState(null);

    const [isLoaded, setIsLoaded] = useState(false);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://www.cbr-xml-daily.ru/latest.js")
            .then(res => res.json())
            .then(
                (result) => {

                    setIsLoaded(true);
                    setItems(result.rates);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {

                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const eur = () => {
        let num = props.counter / items.EUR
        console.log(num);
        num = String(num).slice(0, 5)
        setCounter(num)
    }

    const usd = () => {
        let num = props.counter / items.USD
        console.log(num);
        num = String(num).slice(0, 5)
        setCounter(num)
    }

    const reset = () => {
        setCounter(0)
    }

    const kgs = () => {
        let num = props.counter / items.KGS
        console.log(num);
        num = String(num).slice(0, 5)
        setCounter(num)
    }



    return (
        <div className="app">
            <div className="counter">{counter}</div>
            <div className="controls">
                <button onClick={kgs}>KGS</button>
                <button onClick={usd}>USD</button>
                <button onClick={eur}>EUR</button>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    )
}



export default Rate