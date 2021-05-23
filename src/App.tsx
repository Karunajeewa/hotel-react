import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./layout/Header";
import './assets/style_sheets/Main.scss';
import Home from "./view/Home";
import Footer from "./layout/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
