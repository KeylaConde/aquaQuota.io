import React, { useState } from 'react';
import { WeightInput } from './WeightInput';
import { WaterCupCount } from './WaterCupCount';
import { ImageOfGlass } from './image';
import './App.css';

const glassesOfWater = ({ number }) => {
  const images = Array.from({ length:number },
     (_, index) => index++);

     return (
      <div>
        {images.map((imageNumber) => (
          <imageOfGlass key={imageNumber}/>
        ))}
      </div>
     );
};

function App() {
  return (
    <>

      <h1>Aqua Quota</h1>
    
      <WeightInput />

      <WaterCupCount glasses={7} />
      <ImageOfGlass />
      
    </>
  );
}

export default App;

/*React.Fragment allows replace unnecesary divs and is also invisible
in our HTML from the browser*/

//from here(WaterCupCount) I send the props

// Edit this file to see changes in the app
