import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./layout/Header";
import './assets/style_sheets/main.scss';
import Home from "./view/Home";
<<<<<<<<< Temporary merge branch 1
import ContactUs from "./view/ContactUs";
=========
import Footer from "./layout/Footer";
import Gallery from "./view/Gallery";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import SignIn from "./view/SignIn";
>>>>>>>>> Temporary merge branch 2

function App() {
    return (
        <div className="App">
            <Header/>
<<<<<<<<< Temporary merge branch 1
            {/*<Home/>*/}
            <ContactUs/>
=========
            <Router>
                <Switch>
                    <Route path="/Gallery">
                        <Gallery/>
                    </Route>
                    <Route path="/SignIn">
                        <SignIn/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>

            <Footer/>
>>>>>>>>> Temporary merge branch 2
        </div>
    );
}

export default App;
