import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">

      <WeightInput />
      <WaterCupCount />
      
    </div>
  );
}

function WeightInput() {
  return (
    <input placeholder='Weight'>
    </input>
  )
}

// WaterCupCount return how many glasses of water the user shoulds to drink in a day

function WaterCupCount() {
  return (
    <p>You should to drink
      <span>7</span>
      glasses of water.
    </p>
  );
}

export default App;

// Edit this file to see changes in the app
