import React from "react";
import aboutImg from '../assets/images/aboutImg.jpg'
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import ContactUs from "./ContactUs";

const About: React.FC = () => {

    return(
        <Container>
            <Row>
                <Col sm={12} md={6}><Image src={aboutImg} className="aboutImage"/></Col>
                <Col className="paragraph" sm={12} md={3}>
                    <h2>Our Vision</h2>
                    <p>When people leave their usual environment, they come into contact with new people, new sights, new experiences, and new ideas. That exposure allows individuals to learn more about themselves and the world around them, creating greater internal and societal awareness.
                    </p>
                </Col>
                <Col className="paragraph" sm={12} md={3}>
                    <h2>Want to get in touch?</h2>
                    <p>We are always willing to talk to individuals and organizations who want to collaborate to make the world of travel welcoming to people of all background and abilities.
                    </p>
                    <Button variant="primary">Contact Us</Button>
                </Col>
            </Row>
        </Container>
    )
};

export default About;