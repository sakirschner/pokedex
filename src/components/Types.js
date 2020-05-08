import React from 'react';
import usePokemon from './apis/usePokemon';

const Types = ({ selectedPokemon }) => {
  const pokemon = usePokemon(selectedPokemon);

  if (!pokemon.types) {
    return null;
  }

  return (
    <div className="types-container">
      {pokemon.types.map((type) => (
        <div className="nes-container is-rounded types" id={type.type.name}>
          <p>{type.type.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Types;
