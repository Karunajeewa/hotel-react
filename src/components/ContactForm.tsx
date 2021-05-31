import React from "react";
import {Button, Form} from "react-bootstrap";
import swal from 'sweetalert2'

const ContactForm: React.FC = () => {
    const handleOnClick=()=> swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer:3500
    });

    return (
        <Form className="input-form">
            <Form.Group className="input-group">
                <Form.Label className='form-label'>Full name</Form.Label>
                <Form.Control type="name" placeholder="Enter Full name"  className="form-text-box"/>
            </Form.Group>
            <Form.Group className="input-group">
                <Form.Label className='form-label'>Email</Form.Label>
                <Form.Control  className="form-text-box" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="input-group">
                <Form.Label className='form-label'>Password</Form.Label>
                <Form.Control  className="form-text-box" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="input-group">
                <Form.Label className='form-label'>Password</Form.Label>
                <Form.Control  className="form-text-box" type="password" placeholder="Password" />
            </Form.Group>
            <Button  className="button" variant="primary" type="submit" onClick={() => handleOnClick()}>Submit</Button>
        </Form>
    )
};

export default ContactForm;