import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./layout/Header";
import './assets/style_sheets/Main.scss';
import Home from "./view/Home";
import Footer from "./layout/Footer";
import Gallery from "./view/Gallery";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <Router>
                <Switch>
                    <Route path="/Gallery">
                        <Gallery/>
                    </Route>

                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>

            <Footer/>
        </div>
    );
}

export default App;
