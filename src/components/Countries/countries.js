import React, { useEffect, useState } from 'react';
import Country from '../Country/country';
import './countries.css'

const Countries = () => {

    const [countries , setCountries] = useState([]);

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data => setCountries(data))
  
    }, []) 

    return (
        <div>
            <h1> explore country </h1>
            <h2>countries length : {countries.length} </h2>
            <div className='country-container'>
            {
                countries.map(country => <Country
                     country={country}
                     key={country.cca3}
                     
                     >  </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;