import React from "react";
import contactus from '../assets/images/contactUs.png'
import ContactForm from "../components/ContactForm";
import {Col, Container, Image, Row} from "react-bootstrap";
import ContactText from "../components/ContactText";


const ContactUs: React.FC = () =>{
    return(
        <Container fluid={true} className="submit-form flex-wrap">
            <Row>
                <Image src={contactus} className='contactus-img'/>
            </Row>
            <Row>
                <Col className="form" sm={12} md={6}>
                    <ContactForm/>
                </Col>
                <Col className="form" sm={12} md={6}>
                    <ContactText/>
                </Col>
            </Row>
        </Container>
    )
};

export default ContactUs;
