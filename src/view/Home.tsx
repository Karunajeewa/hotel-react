import React from "react";
import cover from '../assets/images/cover.jpg';
import {Container, Image} from "react-bootstrap";


const Home: React.FC = () => {
    return (
        <div className="page-holder bg-cover">
            <Image src={cover} fluid/>
            <Container className="centered" >
                <h1>Taj Samudra</h1>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda consequuntur delectus dolorem et eum explicabo facilis illum ipsum, voluptate!</h6>
            </Container>

        </div>


    )
}
export default Home;