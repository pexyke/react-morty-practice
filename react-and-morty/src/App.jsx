import React, { useEffect, useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Home from "./components/Home";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationList";

function App() {

  const [isLoading, setIsLoading] = useState(true)

  const [shouldCharacterShow, setShouldCharacterShow] = useState(false);
  const [shouldLocationShow, setShouldLocationShow] = useState(false);

  const [characterPage, setCharacterPage] = useState(1);
  const [locationPage, setLocationPage] = useState(1);

  const characters = useCharacters(characterPage);
  const locations = useLocations(1);



  useEffect(() => {

    if (characters === "Loading...") {
      setIsLoading(true);
      console.log('loooad', characterPage)

    } else if (Array.isArray(characters.results)) {
      setIsLoading(false);
      console.log('aaaarray', characterPage)
    }
  }, [characters, characterPage])


  const changeCharacterPage = newPage => {
    if (newPage <= 0 || newPage >= 43) return;
    setCharacterPage(newPage);
  }

  const navToCharacterList = () => {
    setShouldCharacterShow(true);
    setShouldLocationShow(false);
  }

  const navToLocationList = () => {
    setShouldCharacterShow(false);
    setShouldLocationShow(true);
  }

  const navToHome = () => {
    setShouldCharacterShow(false);
    setShouldLocationShow(false);
  }
  return (
    <div className="App">


      <Home navToLocationList={navToLocationList} navToHome={navToHome} navToCharacterList={navToCharacterList} shouldDisplayWelcomeText={!shouldCharacterShow && !shouldLocationShow} />
      {shouldCharacterShow && <CharacterList data={characters} characterPage={characterPage} changeCharacterPage={changeCharacterPage} />}
      {shouldLocationShow && <LocationList />}
    </div>
  );
}

export default App;
