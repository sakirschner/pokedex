import React from 'react';
import usePokemon from '../apis/usePokemon';
import pokeball from '../../img/pokeball.png';

const EvolutionBox = ({ selectedPokemon }) => {
  const pokemon = usePokemon(selectedPokemon);

  if (!pokemon.sprites) {
    return (
      <div className="evo-container">
        <div className="nes-container evo-img">
          <img src={pokeball} alt="pokeball" className="pokeball"></img>
        </div>
        <div className="nes-container evo-name">None</div>
      </div>
    );
  }

  return (
    <div className="evo-container">
      <div className="nes-container evo-img">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="evo-sprite"
        />
      </div>
      <div className="nes-container evo-name">
        {pokemon.name.substring(0, 1).toUpperCase() + pokemon.name.substring(1)}
      </div>
    </div>
  );
};

export default EvolutionBox;
