import React from "react";
import cover from '../assets/images/cover.jpg';
import {Image} from "react-bootstrap";
import MetaDecorator from "../components/MetaDecorator";


const Home: React.FC = () => {
    return (
        <div className="page-holder bg-cover">
            <MetaDecorator title={"HOME | Hotel-React"} description={"home page"}/>
            <Image src={cover} fluid/>
            <div className="centered">
                <h1>Taj Samudra</h1>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda consequuntur delectus dolorem et eum explicabo facilis illum ipsum, voluptate!</h6>

            </div>

        </div>


    )
}
export default Home;