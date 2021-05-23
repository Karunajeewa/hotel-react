import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import Swal from 'sweetalert2'

const ContactForm: React.FC = () => {
    const handleOnClick=Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
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
            <Button  className="button" variant="primary" type="submit"> Submit </Button>
        </Form>
    )
};
/*
<Form.Text className="text-muted">
    We'll never share your email with anyone else.
</Form.Text>
*/

export default ContactForm;