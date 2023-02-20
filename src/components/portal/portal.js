import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import './portal.scss'

const Portal = () => {
    const [advOpen, setAdvOpen] = useState(false)

    useEffect(() => {
        setTimeout(handleClick, 3000)
    })

    const handleClick = () => {
        setAdvOpen(!advOpen)
        console.log('A');
    }


    return (
        <Container>
            <form onClick={handleClick} className="w-50 border mt-5 p-3 m-auto"
                style={{
                    'overflow': 'hidden',
                    'position': 'relative'
                }}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                {advOpen ?
                    <Port>
                        <Msg />
                    </Port>
                    : null}


            </form>
        </Container>
    )
}



const Port = (props) => {
    const node = document.createElement('div')
    document.body.appendChild(node)
    return ReactDOM.createPortal(props.children, node)
}

const Msg = () => {
    return (
        <div
            style={{
                'width': '500px',
                'textAlign': 'center',
                'height': '150px',
                'backgroundColor': 'red',
                'position': 'absolute',
                'right': '0',
                'bottom': '0'
            }}>
            Hello
        </div>
    )
}

export default Portal