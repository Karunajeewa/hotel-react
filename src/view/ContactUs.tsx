import React from "react";
import contactus from '../assets/images/contact.jpg'
import ContactForm from "../components/ContactForm";
import {Col, Container, Image, Row} from "react-bootstrap";
import ContactText from "../components/ContactText";


const ContactUs: React.FC = () => {
    return (
        <Container fluid={true} className="submit-form">
            <Col className="images-wrap">
                <Image src={contactus} className='contactus-img'/>
                <div className="divStyle">
                    <h1 className="help-title">How Can We Help?</h1>
                    <p>You’ve got questions, we’ve got answers on anything.Please contact us...</p>
                </div>
            </Col>
            <Row>
                <Col sm ={8} md={5} lg={5} className="contact-form">
                    <h1>Get in Touch</h1>
                    <ContactForm/>
                </Col>
                <Col sm ={8} md={5} lg={5}>
                    <ContactText/>
                </Col>
            </Row>
            {/*<Row className="help-description">*/}
            {/*    <ContactText/>*/}
            {/*</Row>*/}

            {/*<Row className="form" md={12}>*/}
            {/*    <ContactText/>*/}
            {/*</Row>*/}
            {/*<Row className="form">*/}

            {/*</Row>*/}

        </Container>
    )
};

export default ContactUs;
