import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./layout/Header";
import './style_sheets/Main.scss';
import Footer from "./layout/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <p>Body of the pages</p>
            <Footer/>
        </div>
    );
}

export default App;
