import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Modal1() {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 10000); // 10 seconds delay

        return () => clearTimeout(timer); // Cleanup function to clear timeout on component unmount
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <>
       
        <Modal className='mdal' show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
            <center><Modal.Title><h4>Welcome to SkAI</h4></Modal.Title></center>
                
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center">
                    <Card className='signupcard'>
                        <Form className="form">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email/Username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control  type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className='signupbutton' variant="primary" type="submit">
                                Sign In
                            </Button>
                            <center>
                            <p className="connect">Connect With</p>
        <Button className='facebook' variant="dark" href=""><FontAwesomeIcon icon={faFacebookF} /></Button>
        <Button className='twitter' variant="dark" href=""> <FontAwesomeIcon icon={faTwitter} /></Button>
        <Button className='envelope' variant="dark" href=""><FontAwesomeIcon icon={faEnvelope} /></Button>
        <p><Link className='fgpas' href="">Forgot Password?</Link></p>
        <p className='notmember'> Not a member yet?  </p><Link className='signinq' href="/signup">Sign Up</Link>
        </center>
                        </Form>
                    </Card>
                </div>
            </Modal.Body>
        </Modal>
       
        </>
    );
}

export default Modal1;
