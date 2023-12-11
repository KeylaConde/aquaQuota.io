import './WaterCupCount.css';
// WaterCupCount return how many glasses of water the user shoulds to drink in a day

function WaterCupCount({ glasses }) {
    return (
      <p>You should to drink 
        <span> {glasses} </span>
         glasses of water.
      </p>
    );
  }

  export { WaterCupCount };