import React from 'react';
import logo from '../images/mainLogo.png'

const Home = ({ navToLocationList, navToCharacterList, navToHome, shouldDisplayWelcomeText }) => {
    return (
        <>
            <img src={logo} alt="" />
            <br />
            <button onClick={navToCharacterList}>Characters</button>
            <button onClick={navToLocationList}>Locations</button>
            <button onClick={navToHome}>Home</button>

            {
                shouldDisplayWelcomeText && <h2>This is a website where you can find every information you would ever wanna know about Rick & Morty</h2>
            }
        </>
    );
};

export default Home;
