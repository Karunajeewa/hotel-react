import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const Header: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Navbar.Brand className='nav-head' href="#home">Taj Samudra</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Gallery">Gallery</Nav.Link>
                    <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/SignIn">Sign In</Nav.Link>
                    <Nav.Link eventKey={2} href="#about">
                        About
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;