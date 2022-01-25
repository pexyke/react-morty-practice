import React from 'react';

const Location = (location) => {
    //https://rickandmortyapi.com/api/character/avatar/201.jpeg

    return <div>
        <h2>Location: {location.name}</h2>
          <h3>Dimension: {location.dimension}</h3>
          <h3>Type: {location.type}</h3>
    </div>
};

export default Location;
