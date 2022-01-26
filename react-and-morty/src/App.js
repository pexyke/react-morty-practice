import React, { Component, useEffect, useState } from "react";
import "./App.css";
import { getCharacters, useCharacters, useLocations } from "./api/useData";
import MainLogo from './images/mainLogo.png'
import Characters from "./components/Characters";
import Locations from "./components/Locations";

function App() {
  const [pageNum, setPageNum] = useState(1)
  const [characters, setCharacters] = useState([])
  const [loc,setLoc] = useState('home')
  const [selectedCharacterId, setSelectedCharacterId] = useState(0)
    
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

  useEffect(() => {
    if(pageNum == 1) {
      setCharacters([])
    }

    console.log('PAGENUM', pageNum)
    const loadCharacters = async () => {      

      const newCharacters = await getCharacters(pageNum);

      setCharacters(prev => [...prev, ...newCharacters.results]);
    }

    if(pageNum > 42)
    return;
    loadCharacters();
  }, [pageNum])


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

   const handleScroll = (e) => {
      
      const bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 1;
      // console.log('DIFF', e.target.scrollHeight - e.target.scrollTop)
      // console.log('CLIENT', e.target.clientHeight)
      if (bottom) { 
        setPageNum(prev => prev + 1)
       }
      }
    

      const onScroll = () => {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const scrollTop = this.myRef.current.scrollTop
        console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
        
      }

  
  return (
  <div className="App" onScroll={handleScroll}>
    <img src={MainLogo} alt="" />
    <div className='homePage'>      
      <div>
        <button onClick={showCharacters}>Characters</button>
        <button onClick={showLocations}>Locations</button>
      </div>
      
    </div>
    <div className='content' >
          {content}
        </div>
        <div>
        </div>
        {/* {(loc === 'characters' || loc==='locations') && !selectedCharacterId &&
        <div className='pagination' >
          {pageNum > 1 && <button onClick={prev}>Prev</button>}
          <h1 className="pageNum">{pageNum}</h1>
          {pageNum < characters.info.pages && <button  onClick={next}>Next</button>}
        </div>} */}
  </div>
  )
}

export default App;
