import './WeightInput.css';

// WeightInput receives the user's weight in kilograms

function WeightInput() {
    return ( 
        <section>
          <label className="weightDiv">
          <input placeholder='Your weight in kgs. here'>
          </input> 
          <button>Calculate</button>
        </label>
        
        </section>      
    );
  }

  export { WeightInput };