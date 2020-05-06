import React from 'react';
import usePokemon from './apis/usePokemon';

const Stats = ({ selectedPokemon }) => {
  const pokemon = usePokemon(selectedPokemon);

  if (!pokemon.stats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="nes-container" id="stats">
      <p className="center">Stats</p>
      {pokemon.stats.map((stat) => (
        <div className="stats">
          <p>{stat.stat.name}</p>
          <p>{stat.base_stat}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
