import React, { useState } from 'react';
import usePokemon from './apis/usePokemon';

const MainScreen = ({ selectedPokemon }) => {
  const pokemon = usePokemon(selectedPokemon);
  const [shiny, setShiny] = useState(false);
  const [direction, setDirection] = useState('front');

  const toggleShiny = () => {
    if (!shiny) {
      setShiny(true);
    } else {
      setShiny(false);
    }
  };

  const toggleDirection = () => {
    if (direction === 'front') {
      setDirection('back');
    } else {
      setDirection('front');
    }
  };

  const renderSprite = () => {
    if (shiny && direction === 'front') {
      return (
        <img
          src={pokemon.sprites.front_shiny}
          alt={pokemon.name}
          className="sprite"
        />
      );
    } else if (shiny & (direction === 'back')) {
      return (
        <img
          src={pokemon.sprites.back_shiny}
          alt={pokemon.name}
          className="sprite"
        />
      );
    } else if (!shiny && direction === 'front') {
      return (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="sprite"
        />
      );
    } else if (!shiny && direction === 'back') {
      return (
        <img
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
          className="sprite"
        />
      );
    }
  };

  if (!pokemon.name && !pokemon.sprites) {
    return (
      <div>
        <div id="name-screen" className="nes-container">
          <h1>Loading...</h1>
        </div>
        <div id="main-screen" className="nes-container"></div>
        <div className="btn-container">
          <button className="nes-btn" id="small-btn">
            Flip
          </button>
          <button className="nes-btn is-warning" id="small-btn">
            Shiny
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div id="name-screen" className="nes-container">
        <h1>
          {pokemon.name.substring(0, 1).toUpperCase() +
            pokemon.name.substring(1)}
        </h1>
        <p>no. {pokemon.id}</p>
      </div>
      <div id="main-screen" className="nes-container">
        {renderSprite()}
      </div>
      <div className="btn-container">
        <button onClick={toggleDirection} className="nes-btn" id="small-btn">
          Flip
        </button>
        <button
          onClick={toggleShiny}
          className="nes-btn is-warning"
          id="small-btn"
        >
          Shiny
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
