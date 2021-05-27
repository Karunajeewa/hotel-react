import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import cover from '../assets/images/cover.jpg';
import {Image} from "react-bootstrap";
import MetaDecorator from "../components/MetaDecorator";

const Gallery: React.FC = () => {
    return (
        <Container className='gallery'>
            <MetaDecorator title={"GALLERY | Hotel-React"} description={"gallery page"}/>
            <Row>
                <Col>
                    <Card className='card' style={{width: '18rem'}}>
                        {/*<Card.Img variant="top" src="holder.js/100px180"/>*/}
                        <Image src={cover} fluid/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className='card' style={{width: '18rem'}}>
                        {/*<Card.Img variant="top" src="holder.js/100px180"/>*/}
                        <Image src={cover} fluid/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className='card' style={{width: '18rem'}}>
                        {/*<Card.Img variant="top" src="holder.js/100px180"/>*/}
                        <Image src={cover} fluid/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </Col>
                <Col>

                    <Card className='card' style={{width: '18rem'}}>
                        {/*<Card.Img variant="top" src="holder.js/100px180"/>*/}
                        <Image src={cover} fluid/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className='card' style={{width: '18rem'}}>
                        {/*<Card.Img variant="top" src="holder.js/100px180"/>*/}
                        <Image src={cover} fluid/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className='card' style={{width: '18rem'}}>
                        {/*<Card.Img variant="top" src="holder.js/100px180"/>*/}
                        <Image src={cover} fluid/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>

                    <Card className='card' style={{width: '18rem'}}>
                        {/*<Card.Img variant="top" src="holder.js/100px180"/>*/}
                        <Image src={cover} fluid/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className='card' style={{width: '18rem'}}>
                        {/*<Card.Img variant="top" src="holder.js/100px180"/>*/}
                        <Image src={cover} fluid/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className='card' style={{width: '18rem'}}>
                        {/*<Card.Img variant="top" src="holder.js/100px180"/>*/}
                        <Image src={cover} fluid/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}
export default Gallery;