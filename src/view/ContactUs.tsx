import React from "react";
import contactus from '../assets/images/contactUs.png'
import ContactForm from "../components/ContactForm";
import {Col, Container, Image, Row} from "react-bootstrap";
import MetaDecorator from "../components/MetaDecorator";


const ContactUs: React.FC = () =>{
    return(
        <Container fluid={true} className="submit-form flex-wrap">
            <MetaDecorator title={"CONTACT US | Hotel-React"} description={"contact page"}/>
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
