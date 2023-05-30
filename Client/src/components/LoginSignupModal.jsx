import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const LoginSignupModal = ({ show, handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Perform login or sign-up logic here
      // You can make API calls or handle authentication
      // using the email and password state values
      console.log('Email:', email);
      console.log('Password:', password);
      // Close the modal after submission
      handleClose();
    };
  
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login / Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" mt-2>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

  export default LoginSignupModal;