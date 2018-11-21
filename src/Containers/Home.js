// Home page code here

import React from 'react';
import './App.css';

const card = document.querySelector('.card');

const Home = () => (
    <div className='tc'>
    <div className="home-content">
    <h1 className='f1'>WELCOME TO REVIEW APP</h1>
    <h4 className='f3'>Login (Top Left) to Enter the App</h4>
    <p className='f2'>(Or Click "Product List" to view the products)</p>
    <div class="card"> <img alt = 'image' src={'https://picsum.photos/200/300/?random'} /></div>
    </div>
    </div>    
)

//---FETCH---//
fetch('https://picsum.photos/200/300/?random')
.then(response => response.json())
.then(data => generateImage(data.message))

//---FUNCTION---//
function generateImage(data) {
    const html =
    <img src='${data}' alt/>

}

export default Home;