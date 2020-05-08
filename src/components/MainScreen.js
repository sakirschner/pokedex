import React, { useState } from 'react';
import usePokemon from './apis/usePokemon';
import pokeball from '../img/pokeball.png';

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
    if (shiny && direction === 'front' && pokemon.sprites.front_shiny) {
      return (
        <img
          src={pokemon.sprites.front_shiny}
          alt={pokemon.name}
          className="sprite"
        />
      );
    } else if (shiny && direction === 'back' && pokemon.sprites.back_shiny) {
      return (
        <img
          src={pokemon.sprites.back_shiny}
          alt={pokemon.name}
          className="sprite"
        />
      );
    } else if (!shiny && direction === 'back' && pokemon.sprites.back_default) {
      return (
        <img
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
          className="sprite"
        />
      );
    } else if (!pokemon.sprites.front_default) {
      return <img src={pokeball} alt={pokemon.name} className="sprite" />;
    } else {
      return (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="sprite"
        />
      );
    }
  };

  const renderShiny = () => {
    if (!shiny) {
      return (
        <button
          onClick={toggleShiny}
          className="nes-btn is-warning"
          id="small-btn"
        >
          Shiny
        </button>
      );
    } else {
      return (
        <button onClick={toggleShiny} className="nes-btn" id="small-btn">
          Normal
        </button>
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
        {renderShiny()}
      </div>
    </div>
  );
};

export default MainScreen;
