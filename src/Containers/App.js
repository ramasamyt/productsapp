// first step is import react.
import React, {Component} from 'react';
// importy react router dom
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
// import app components
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Productlist from './Productlist';

// importing app.css file
import './App.css';
//import RestController from './RestController';

// STATE is an object describes the application
// Smart component


const App = () => (
    // Router included below

        <BrowserRouter>
            <div className="container">
                <Header />
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/productlist" component={Productlist}/>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact}/>
            </div>
        </BrowserRouter>
    );

//Export App (always at the end of App.js code)
export default App;