import React, { useState} from 'react';
import MainScreen from './MainScreen';
import Description from './Description';
import Stats from './Stats';
import Types from './Types';
import Moves from './Moves';
import EvolutionChart from './Evolution/EvolutionChart';
import Info from './Info';
import '../index.css';
import 'nes.css/css/nes.min.css';
import axios from 'axios';

const App = () => {
  const [currentPokemonId, setPokemon] = useState(1);
  const [formPokemon, setFormPokemon] = useState(1);

  const fetchPokemon = () => {
    (async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${formPokemon}`
      );
      setPokemon(response.data.id);
    })(formPokemon);
  };

  const goUp = () => {
    if (currentPokemonId < 807) {
      setPokemon(currentPokemonId + 1);
    } else {
      return;
    }
  };

  const goDown = () => {
    if (currentPokemonId > 1) {
      setPokemon(currentPokemonId - 1);
    } else {
      return;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormPokemon(e.target.value.toLowerCase());
  };

  const renderInput = () => {
    return (
      <div>
        <input
          onChange={handleChange}
          defaultValue={currentPokemonId}
          className="nes-input"
          id="input"
        />
        <input
          className="nes-btn is-success submit"
          type="submit"
          onClick={fetchPokemon}
        />
      </div>
    );
  };

  return (
    <div className="pokedex-container">
      <div id="pokedex-container-left" className="nes-container is-rounded">
        <div className="lights">
          <div className="nes-container is-rounded" id="light"></div>
          <div className="small-lights">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>
        </div>
        <MainScreen selectedPokemon={currentPokemonId} />
        <Description selectedPokemon={currentPokemonId} />
        <div className="btn-container2">
          <button
            onClick={goDown}
            className="nes-btn is-primary"
            id="small-btn"
          >
            Last
          </button>
          <div className="nes-field">{renderInput()}</div>
          <button onClick={goUp} className="nes-btn is-primary" id="small-btn">
            Next
          </button>
        </div>
      </div>
      <div id="pokedex-container-left" className="nes-container is-rounded">
        <Stats selectedPokemon={currentPokemonId} />
        <Types selectedPokemon={currentPokemonId} />
        <EvolutionChart selectedPokemon={currentPokemonId} />
        <Moves selectedPokemon={currentPokemonId} />
        <Info />
      </div>
    </div>
  );
};

export default App;
