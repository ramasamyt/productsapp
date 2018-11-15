// first step is import react.
import React, {Component} from 'react';
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
import RestController from './RestController';

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
            .then(data=> this.setState({products: data}));

       

       
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})  
    }

    render () {
        const {products, searchfield} = this.state;
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        //error message below, for 0 products
        //! - means, if this is not TRUE
        if (!products.length) {
            return <h2>Loading...</h2>
        } else {

    // will show review list 
    // tc - text center
    // f1 - size of the text (logo)
    // Scroll for keeping the search in all views
    return (
        <div className='tc'>
        <h1 className='f1'>List of Products</h1>
        <h4 className='f3'>Add New Product</h4>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
            <ErrorBoundry>
        <ReviewList products={filteredProducts}/>
            </ErrorBoundry>
        </Scroll>
        </div>
    );
    }
}
}
//--------------------------------------
// POST Request
 fetch('https://jsonplaceholder.typicode.com/users', {
    method : "Post",
    body : JSON.stringify({products : 1}),
    headers : {
        'Content-type' : "application/json"
    }
})
    .then(response=> response.json())
    // below one updates the website page
    .then(data=> console.log({products:data}));

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
      //  method: 'DELETE'
        })
    
    .then(response=> response.json())
    // below one updates the website page
    .then(data=> console.log ({products:data}));


export default App;