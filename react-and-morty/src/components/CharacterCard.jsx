import React from 'react';

const CharacterCard = ({character, handleClick}) => {
    return <div onClick={()=> handleClick(character.id)} className='characterCard'>
        <img src={character.image} alt='characterImg' />
        <h2>Name: {character.name}</h2>
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species}</h3>
    </div>;
};

export default CharacterCard;
