import React from 'react';
import useEvolution from '../apis/useEvolution';
import EvolutionBox from './EvolutionBox';

const EvolutionChart = ({ selectedPokemon }) => {
  const evolution = useEvolution(selectedPokemon);

  if (!evolution.species) {
    return null;
  }

  if (!evolution.evolves_to[0]) {
    return (
      <div>
        <div className="nes-container evo-numbers">
          <p>1</p> <p>2</p> <p>3</p>
        </div>
        <div className="chart-container">
          <EvolutionBox selectedPokemon={evolution.species.name} />
          <EvolutionBox />
          <EvolutionBox />
        </div>
      </div>
    );
  }

  if (!evolution.evolves_to[0].evolves_to[0]) {
    return (
      <div>
        <div>
          <div className="nes-container evo-numbers">
            <p>1</p> <p>2</p> <p>3</p>
          </div>
          <div className="chart-container">
            <EvolutionBox selectedPokemon={evolution.species.name} />
            <EvolutionBox
              selectedPokemon={evolution.evolves_to[0].species.name}
            />
            <EvolutionBox />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="nes-container evo-numbers">
        <p>1</p> <p>2</p> <p>3</p>
      </div>
      <div className="chart-container">
        <EvolutionBox selectedPokemon={evolution.species.name} />
        <EvolutionBox selectedPokemon={evolution.evolves_to[0].species.name} />
        <EvolutionBox
          selectedPokemon={evolution.evolves_to[0].evolves_to[0].species.name}
        />
      </div>
    </div>
  );
};

export default EvolutionChart;
