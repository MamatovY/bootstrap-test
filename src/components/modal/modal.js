import './modal.scss'

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container } from 'react-bootstrap';


const Mod = ({ show, onClose, setShowTrigger }) => {
    const duration = 500;

    return (
        <CSSTransition
            in={show}
            timeout={duration}
            onEnter={() => { setShowTrigger(false) }}
            onExited={() => { setShowTrigger(true) }}
            classNames='modal'
            mountOnEnter
            unmountOnExit
        >
            {state => (
                <div className="modal mt-5 d-block"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Typical modal window</h5>
                                <button onClick={() => onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body content</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => onClose(false)} type="button" className="btn btn-secondary">Close</button>
                                <button onClick={() => onClose(false)} type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </CSSTransition>
    )
}

function Modal() {
    const [showModal, setShowModal] = useState(false);
    const [showTrigger, setShowTrigger] = useState(true)

    return (
        <Container>
            <Mod onClose={setShowModal} show={showModal} setShowTrigger={setShowTrigger} />
            {showTrigger ? <button
                type="button"
                className="btn btn-warning mt-3"
                onClick={() => setShowModal(true)}>Open Modal</button> : null}
        </Container>
    );
}

export default Modal;
