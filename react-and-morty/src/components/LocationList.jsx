import React from 'react';

const LocationList = (props) => {
    return (
        <div>
          {props.locations !== "Loading..." && props.locations.results.map((item, i)=>
          <div key={i} className='characterCard'>
          <h2>Location: {item.name}</h2>
          <h3>Dimension: {item.dimension}</h3>
          <h3>Type: {item.type}</h3>
          </div>
          )}
        </div>
    );
};

export default LocationList;
