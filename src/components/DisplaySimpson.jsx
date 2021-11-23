import React from "react";

function DisplaySimpson({ simpson }) {
  return (
    simpson && (
      <div className="DisplaySimpson">
        <img src={simpson.image} alt={simpson.character} />
        <ul>
          <h1>Simpson Character</h1>
          <li>Name: {simpson.character}</li>
          <li>Quote: {simpson.quote}</li>
        </ul>
      </div>
    )
  );
}

export default DisplaySimpson;
