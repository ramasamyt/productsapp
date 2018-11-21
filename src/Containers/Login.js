//Login page code here

import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import Signup from './Sign/Signup';
// f1 - font size
const Login = () => (
    <div className='tc'>
    <div className="third-content">
    <h1 className='f1'>Login</h1>
    <p>Add login credentials here...</p>
    <div className='pa2'>
    <form id="login">
        Login:&nbsp; &nbsp; &nbsp; &nbsp;    
        <input></input>
        <br></br>
        <br></br>
        Password:&nbsp;
        
        <input></input>
    </form>
    </div>
    <br></br>
    <button>Submit</button>
    <p>New users signup below</p>
    <button><NavLink to = "/login/signup">Signup</NavLink></button>
    </div>
    </div>
);

export default Login;