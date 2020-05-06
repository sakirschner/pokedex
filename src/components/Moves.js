import React from 'react';
import useMoves from './apis/useMoves';
import usePokemon from './apis/usePokemon';

const Moves = ({ selectedPokemon, selectedMove }) => {
  const move = useMoves(selectedPokemon, selectedMove);
  const pokemon = usePokemon(selectedPokemon);

  const renderAccuracy = () => {
    if (!move.accuracy) {
      return <p>0</p>;
    } else {
      return <p>{move.accuracy}</p>;
    }
  };

  const renderPower = () => {
    if (!move.power) {
      return <p>0</p>;
    } else {
      return <p>{move.power}</p>;
    }
  };

  if (!move.name) {
    return <div className="nes-container moves-container">Loading...</div>;
  }

  return (
    <div className="nes-container moves-container">
      <h2 className="center">
        {move.name.substring(0, 1).toUpperCase() + move.name.substring(1)}
      </h2>
      <div className="under-moves-container">
        <div className="moves-stats">
          <div>
            <p>Accuracy: </p>
            {renderAccuracy()}
          </div>
          <div>
            <p>Power: </p>
            {renderPower()}
          </div>
          <div>
            <p>PP: </p>
            <p>{move.pp}</p>
          </div>
        </div>
        <div>
          <div
            className="moves-type nes-container is-rounded"
            id={move.type.name}
          >
            <p>{move.type.name}</p>
          </div>
          <div>
            <p>
              Learned at level{' '}
              {
                pokemon.moves[selectedMove].version_group_details[0]
                  .level_learned_at
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moves;
