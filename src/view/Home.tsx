import React from "react";
import cover from '../assets/images/cover.jpg';
import {Image} from "react-bootstrap";


const Home: React.FC = () => {
    return (
        <div className="page-holder bg-cover">
            <Image src={cover} fluid/>
            <div className="centered">
                <h1>Taj Samudra</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda consequuntur delectus dolorem et eum explicabo facilis illum ipsum, magni maiores maxime officiis porro quae quis, quos ratione soluta voluptate!</h5>

            </div>

        </div>


    )
}
export default Home;