import React from 'react';

const CharacterList = ({ data, characterPage, changeCharacterPage }) => {

    console.log(data)
    return (
        <>
            <h1>CharacterList</h1>
            <button onClick={() => changeCharacterPage(characterPage - 1)}>left</button>
            <p>{characterPage}</p>
            <button onClick={() => changeCharacterPage(characterPage + 1)}>right</button>
            {data.results.map((result, i) => <div key={i}>
                <img src={result.image} alt={result.name + '_picture'} />
                <p>name: {result.name}</p>
                <p>species: {result.species}</p>
            </div>)}
        </>
    );
};

export default CharacterList;
