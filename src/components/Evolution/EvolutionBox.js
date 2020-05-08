import React from 'react';
import usePokemon from '../apis/usePokemon';
import pokeball from '../../img/pokeball.png';

const EvolutionBox = ({ selectedPokemon }) => {
  const pokemon = usePokemon(selectedPokemon);

  const renderSprite = () => {
    if (!pokemon.sprites.front_default) {
      return <img src={pokeball} alt={pokemon.name} className="pokeball" />;
    } else {
      return (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="evo-sprite"
        />
      );
    }
  };

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
      <div className="nes-container evo-img">{renderSprite()}</div>
      <div className="nes-container evo-name">
        {pokemon.name.substring(0, 1).toUpperCase() + pokemon.name.substring(1)}
      </div>
    </div>
  );
};

export default EvolutionBox;
