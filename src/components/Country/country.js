import React from 'react';
import './country.css'

const Country = (props) => {
    const {population , flags} = props.country

    // console.log(props.country)
   
    return (
        <div className='country'>

            <h2> Name : {props.country.name.common} </h2>
            <h3> population: {population}</h3>
            <img src={flags.png} alt="" />

            
        </div>
    );
};

export default Country;