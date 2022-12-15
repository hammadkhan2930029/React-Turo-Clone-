import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignUpForm from '../form/form';
import "./modal.css"
function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            {/* <Button className='bg'>
               
            </Button> */}
            <a  onClick={handleShow}> Sign Up</a>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><SignUpForm/></Modal.Body>
                <Modal.Footer>
                    <Button  onClick={handleClose}>
                        Close
                    </Button>
                    <Button  onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;