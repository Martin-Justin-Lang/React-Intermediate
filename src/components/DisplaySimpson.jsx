import React from 'react';

function DisplaySimpson({ simpson }) {
  return (
    simpson && (
      <div className='DisplaySimpson'>
        <img src={simpson.image} alt={simpson.character} />
        <ul>
          <li>
          Nom: {simpson.character}
          </li>
          <li>
          Direction: {simpson.characterDirection}
          </li>
          <li>
          Bete de phrase: {simpson.quote}
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplaySimpson;