import './ref.scss'
import React, { useRef, useState } from 'react'
import { Container } from 'react-bootstrap'


function useInputValidate(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const validateInput = () => {
        return value.search(/\d/) >= 0
    }

    return { value, onChange, validateInput }
}


const Form = () => {
    const input = useInputValidate('')
    const textarea = useInputValidate('')
    console.log(input.value);

    const myRef = useRef(null)

    const focusFirstTI = () => {
        if (!(myRef.current.value)) {
            myRef.current.focus()
        }
    }


    const color = input.validateInput(input.value) ? 'text-danger' : null

    return (
        <>
            <Container >
                <form action="" className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <input value={`${input.value} / ${textarea.value}`} type="text" className="form-control" readOnly />
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label mt-3">
                            Email address
                        </label>
                        <input
                            onChange={input.onChange}
                            value={input.value}
                            ref={myRef}
                            type="email"
                            className={`form-control ${color}`}
                            id="exampleFormControlInput1"
                            placeholder='name@example.com'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Example textarea
                        </label>
                        <textarea
                            value={textarea.value}
                            onChange={textarea.onChange}
                            className='form-control' id="exampleFormControlInput1"
                            rows="3"></textarea>
                    </div>
                </form>
            </Container>
        </>
    )
}



const Ref = () => {
    return (
        <Form />
    )
}

export default Ref