import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./layout/Header";
import './assets/style_sheets/Main.scss';
import Home from "./view/Home";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
        </div>
    );
}

export default App;
