import React from 'react';
import Navbar from './components/layout/Navbar';
import Swapi from './components/layout/Swapi';
import ChangeProps from './components/classesPlayground';
import Test from './components/classesPlayground/Test';
import memeD from './img/dv.jpg';
import memeL from './img/Obi.jpg';

const App = () => {
    const greetD = 'Hello from the dark side';
    const greetL = 'Hello from the light side';
    let darkSide = true;
    const arr1 =[1,2,3];
    const arr2 =[1,4,5,6];

  
    return (
        <React.Fragment>
            <div className='Greetings'>
                <Navbar>{greetD}</Navbar>
                <p>{darkSide ? greetD.toUpperCase() : greetL.toUpperCase()}</p>
                <img src={darkSide ? memeD : memeL} alt='meme'/>
                <Swapi/>
            </div>
            <hr/>
            <ChangeProps/>
            
        </React.Fragment>
    );
};

export default App;