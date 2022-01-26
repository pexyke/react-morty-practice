import React from 'react';
import { useState } from 'react';
import CharacterCard from './CharacterCard';

const Characters = (props) => {

    const handleClick = (id) => {
        console.log(id);
        props.setSelectedCharacterId(id)
    }

    const getFilteredCharacters = () => {
      if(!props.selectedCharacterId) {
        return props.characters;
      }
        

      return props.characters.filter(c => c.id == props.selectedCharacterId);
    }

  return (
    <div className='characters-container'> 
      {getFilteredCharacters()
        .map((character) => { 
              return <CharacterCard key={`character-card-${character.id}`} character={character} handleClick={() => !props.selectedCharacterId && handleClick(character.id)} /> 
            }
          )
      }
     </div>
  )
};

export default Characters;
