import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./layout/Header";
import './assets/style_sheets/main.scss';
import Home from "./view/Home";
import ContactUs from "./view/ContactUs";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Home/>*/}
            <ContactUs/>
        </div>
    );
}

export default App;
