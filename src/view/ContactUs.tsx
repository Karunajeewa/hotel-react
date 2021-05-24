import React from "react";
import contactus from '../assets/images/contactUs.png'
import ContactForm from "../components/ContactForm";
import {Col, Container, Image, Row} from "react-bootstrap";


const ContactUs: React.FC = () =>{
    return(
        <Container fluid={true} className="submit-form flex-wrap">
            <Row>
                <Image src={contactus} className='contactus-img'/>
            </Row>
            <Row>
                <Col className="form" sm={6}>
                    <h2>Padme merge conflit.</h2>
                    <ContactForm/>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    )
};

export default ContactUs;
