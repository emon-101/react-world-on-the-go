import React, { useState } from 'react';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // if(visited) {
        //     setVisited(false);
        // } else {
        //     setVisited(true);
        // }
        // setVisited(visited ? false : true);
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`card ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}</p>
            <p>{country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {
                    visited ? "Visited" : "Not Visited"
                }
            </button>
            <button onClick={()=>handleVisitedFlags(country.flags.flags.png)}>
                Add Visited Flag
            </button>
        </div>
    );
};

export default Country;