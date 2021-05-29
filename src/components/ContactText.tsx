import React from "react";
import TextTransition, { presets } from "react-text-transition";
import {Col, Row} from "react-bootstrap";


const ContactText: React.FC = () =>{
   return(
       <Col className="contact-us">
           <Row>
               <h1>Contact Us...</h1>
           </Row>
           <Row className="details">
               <h1>Taj Samudra, Colombo</h1>
               <p>No. 25 Galle Face Center Rd<br/>Colombo
               <br/>Tel: 0112 446 622
               <br/>Fax : 0112 556 622</p>
           </Row>
           <Row className="icon">
               <p>Following Us :</p>
               <h3>
               <i className="feather-facebook"/>
               <i className="feather-instagram"/>
               <i className="feather-twitter"/>
               <i className="feather-mail"/>
               <i className="feather-map-pin"/>
               </h3>
           </Row>
       </Col>
   )
};

export default ContactText;