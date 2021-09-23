import React from 'react';
import DisplaySimpson from './components/DisplaySimpson';
import { useState } from 'react';
import axios from 'axios';

const sampleSimpson =[
  {
    character: "Apu Nahasapeemapetilon",
    characterDirection: "Left",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799",
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  
  }
];

function App() {
  const [simpson, setSimpson] = useState(sampleSimpson);
  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=22')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data)
        setSimpson(data[0]);
      });
  };
  return (
    <div className="App">
     <DisplaySimpson simpson={simpson} />
     <button type="button" onClick={getSimpson}>Nouveau Simpson</button>
    </div>
  );
}

export default App;
