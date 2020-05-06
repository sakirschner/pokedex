import React, { useState } from 'react';
import MainScreen from './MainScreen';
import Description from './Description';
import Stats from './Stats';
import Types from './Types';
import Moves from './Moves';
import EvolutionChart from './Evolution/EvolutionChart';
import '../index.css';
import 'nes.css/css/nes.min.css';

const App = () => {
  const [currentPokemonId, setPokemon] = useState(1);
  const [currentMoveIndex, setMoveIndex] = useState(0);

  const goUp = () => {
    setPokemon(currentPokemonId + 1);
  };

  const goDown = () => {
    if (currentPokemonId > 1) {
      setPokemon(currentPokemonId - 1);
    } else {
      return;
    }
  };

  const handleChange = (e) => {
    if (!e.target.value) {
      setPokemon(1);
    } else {
      setPokemon(e.target.value);
    }
  };

  return (
    <div className="pokedex-container">
      <div id="pokedex-container-left" className="nes-container is-rounded">
        <MainScreen selectedPokemon={currentPokemonId} />
        <Description selectedPokemon={currentPokemonId} />
        <div className="btn-container">
          <button onClick={goDown} className="nes-btn" id="small-btn">
            Last
          </button>
          <div className="nes-field">
            <input
              type="number"
              value={currentPokemonId}
              onChange={handleChange}
              className="nes-input"
              id="input"
            />
          </div>
          <button onClick={goUp} className="nes-btn" id="small-btn">
            Next
          </button>
        </div>
      </div>
      <div id="pokedex-container-left" className="nes-container is-rounded">
        <Stats selectedPokemon={currentPokemonId} />
        <Types selectedPokemon={currentPokemonId} />
        <EvolutionChart selectedPokemon={currentPokemonId} />
        <Moves selectedPokemon={currentPokemonId} selectedMove={currentMoveIndex} />
      </div>
    </div>
  );
};

export default App;
