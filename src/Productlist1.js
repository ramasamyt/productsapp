// first step is import react.
import React, {Component} from 'react';
// importy react router dom
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
// import app components
// ReviewList contains one component with one review
import ReviewList from '../Components/ReviewList';
// SearchBox has search box codes 
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
// products.js has all product reviews
//import products from '../Components/products';
import ErrorBoundry from '../Components/ErrorBoundry';
// importing app.css file
import './App.css';
//import RestController from './RestController';

// STATE is an object describes the application
// Smart component

class App extends Component {
    constructor () {
        // state has products and search field
        // [] placeholder for data from API OR file location
        super()
        this.state = {
            products: [],
            searchfield: ''
        }
    }
        // API link below
        // Make request here


    componentDidMount() {
      
       // --- READ FROM API --- 
       // GET Request
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            // below one updates the website page
            .then(user=> this.setState({products: user}));
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})  
    }

    render () {
        const {products, searchfield} = this.state;
        const filteredProducts = products.filter(product => {
            //return product.name.toLowerCase().includes(searchfield.toLowerCase());
            return product.name.includes(searchfield);
        })

        //error message below, for 0 products
        //! - means, if this is not TRUE
        if (!products.length) {
            return <h2>Loading...</h2>
        } else {

    // will show review list 
    // tc - text center
    // f1 - size of the text (logo)
    // f3 - font size of h4
    // Scroll for keeping the search in all views
    // Router included below
    return (
        <BrowserRouter>
            <div className="container">
                <div className='tc'>
                    <h1 className='f1'>List of Products</h1>
                    <h4 className='f3'>Add New Product Below</h4>
                    <form>
                        <label for="title">Title: </label>
                        <input class="u-full-width" id="title" type="text" />

                        <label for="body">Body: </label>
                        <textarea class="u-full-width" id="body"></textarea>

                        <button type="submit" id="submit">Submit Product</button>
                    </form>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                    <ReviewList products={filteredProducts}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            </div>
        </BrowserRouter>
    );
    }
}
}

//-------------------------------------------------------------
    // PUT Request
    fetch('https://jsonplaceholder.typicode.com/users/1', {
        method : "Put",
        body : JSON.stringify({products : 100, id: 1}),
        headers : {
            'Content-type' : "application/json"
        }
    })
        .then(response=> response.json())
        // below one updates the website page
        .then(data=> console.log({products:data}));
    
    //--------------------------------------------------------------
    // DELETE Request
         
            fetch('https://jsonplaceholder.typicode.com/users/1', {
           method: 'DELETE'
            })
        
        .then(response=> response.json())
        // below one updates the website page
        .then(data=> console.log ({products:data}));
    
    //--------------------------------------------------------------
    
    // POST


    const post = {
        title:'Title here',
        body:'Body here',
        userId: 1
    }

    const newPost = post => {
        const options = {
            method: 'POST',
            body: JSON.stringify(post),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        return fetch('https://jsonplaceholder.typicode.com/posts', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.error('Error: ${error}'))
    }
    
    newPost(post)
    
    
    

//--------------------------------------------------------------
//Export App (always at the end of App.js code)
export default App;