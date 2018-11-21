import React from 'react';
import '../Containers/App.css';

const Review = ({incomingdata}) => {
// Testing at Console
//console.log(incomingdata)

// One product information below
return (
<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
    
    <div>
        <img alt = 'image' src={'https://picsum.photos/200/300/?random'} />
        <a  className='delete' href="#">DELETE</a>
        <h2>{incomingdata.name}</h2>
        <p>{incomingdata.email}</p>
        <p>{incomingdata.id}</p>

    </div>
</div>

);

}
export default Review;

