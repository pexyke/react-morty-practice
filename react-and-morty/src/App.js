import React, { useEffect, useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import MainLogo from './images/mainLogo.png'
import Characters from "./components/Characters";
import Locations from "./components/Locations";

function App() {
  const [pageNum, setPageNum] = useState(1)
  const [loc,setLoc] = useState('home')
  const [selectedCharacterId, setSelectedCharacterId] = useState(0)
  
  let characters = useCharacters(pageNum);
  let locations = useLocations(pageNum);
  const [content, setContent] = useState(<h2>This is a Rick & Morty Wiki where you can find all the information you need about characters or locations of the Rick and Morty universe.</h2>)
  
  const showCharacters = () => {
    setPageNum(1)
    setSelectedCharacterId(0)
    setLoc('characters')
    setContent(<Characters characters={characters} selectedCharacterId={selectedCharacterId} setSelectedCharacterId={setSelectedCharacterId} />)
  }
  const showLocations = () => {
    setPageNum(1)
    setSelectedCharacterId(0)
    setLoc('locations')
    setContent(<Locations locations={locations}/>)
  }
  const prev = () => {
    if(pageNum < 0)
       return;

    setPageNum(pageNum - 1)
  }
  const next = () => {
    if(pageNum >= characters.info.pages)
       return; 

    setPageNum(pageNum + 1)
  }
  useEffect(() => {
    if(loc==='characters'){
    setContent(<Characters characters={characters} selectedCharacterId={selectedCharacterId} setSelectedCharacterId={setSelectedCharacterId}/>)
  } else if(loc==='locations'){
    setContent(<Locations locations={locations}/>)}
  }, [characters, locations, selectedCharacterId]);
  
  return (
  <div className="App">
    <div className='homePage'>
      <img src={MainLogo} alt='rickandmortylogo'/>
      <div>
        <button onClick={showCharacters}>Characters</button>
        <button onClick={showLocations}>Locations</button>
      </div>
      
    </div>
    <div className='content'>
          {content}
        </div>
        <div>
        </div>
        {(loc === 'characters' || loc==='locations') && !selectedCharacterId &&
        <div className='pagination'>
          {pageNum > 1 && <button onClick={prev}>Prev</button>}
          <h1 className="pageNum">{pageNum}</h1>
          {pageNum < characters.info.pages && <button onClick={next}>Next</button>}
        </div>}
  </div>
  )
}

export default App;
