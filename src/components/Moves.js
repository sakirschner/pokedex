import React, { useState } from 'react';
import useMoves from './apis/useMoves';
import usePokemon from './apis/usePokemon';
import axios from 'axios';

const Moves = ({ selectedPokemon }) => {
  const pokemon = usePokemon(selectedPokemon);
  const initialMove = useMoves(selectedPokemon, 0);
  const [move, setMove] = useState({
    name: 'loading...',
    type: { name: 'loading...' },
  });
  const [currentMoveIndex, setMoveIndex] = useState(1);
  const [firstMove, setFirstMove] = useState(true);

  const fetchMove = () => {
    (async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then((response) => {
          axios
            .get(response.data.moves[currentMoveIndex].move.url)
            .then((response2) => setMove(response2.data));
        });
    })(selectedPokemon);
  };

  const goUpFirst = () => {
    setFirstMove(false);
    fetchMove();
  };

  const goDownFirst = () => {
    setFirstMove(false);
    fetchMove();
  };

  const goUpMoves = () => {
    setMoveIndex(currentMoveIndex + 1);
    fetchMove();
  };

  const goDownMoves = () => {
    setMoveIndex(currentMoveIndex - 1);
    fetchMove();
  };

  const renderFirstAccuracy = () => {
    if (!initialMove.power) {
      return <p>0</p>;
    } else {
      return <p>{initialMove.accuracy}</p>;
    }
  };

  const renderFirstPower = () => {
    if (!initialMove.power) {
      return <p>0</p>;
    } else {
      return <p>{initialMove.power}</p>;
    }
  };

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

  const goToFirstMove = () => {
    setMoveIndex(0);
  };

  if (!initialMove.name) {
    return <div className="nes-container moves-container">Loading...</div>;
  }

  if (!move.type) {
    return <div className="nes-container moves-container">Loading...</div>;
  }

  if (!pokemon.moves[currentMoveIndex]) {
    return (
      <div className="nes-container moves-container">
        <button onClick={goToFirstMove()} className="nes-btn" id="small-btn">
          Go To First Move
        </button>
      </div>
    );
  }

  if (firstMove) {
    return (
      <div>
        <div className="nes-container moves-container">
          <h2 className="center">
            {initialMove.name.substring(0, 1).toUpperCase() +
              initialMove.name.substring(1)}
          </h2>
          <div className="under-moves-container">
            <div className="moves-stats">
              <div>
                <p>Accuracy: </p>
                {renderFirstAccuracy()}
              </div>
              <div>
                <p>Power: </p>
                {renderFirstPower()}
              </div>
              <div>
                <p>PP: </p>
                <p>{initialMove.pp}</p>
              </div>
            </div>
            <div className="moves-type-container">
              <div
                className="moves-type nes-container is-rounded"
                id={initialMove.type.name}
              >
                <p>{initialMove.type.name}</p>
              </div>
              <div className="lvl">
                <p>
                  Learned at level{' '}
                  {
                    pokemon.moves[currentMoveIndex].version_group_details[0]
                      .level_learned_at
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-container3">
          <button className="nes-btn" id="small-btn2" onClick={goUpFirst}>
            <span className="upArrow">&lt;</span>
          </button>
          <button className="nes-btn" id="small-btn3" onClick={goDownFirst}>
            <span className="upArrow">&gt;</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
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
          <div className="moves-type-container">
            <div
              className="moves-type nes-container is-rounded"
              id={move.type.name}
            >
              <p>{move.type.name}</p>
            </div>
            <div className="lvl">
              <p>
                Learned at level{' '}
                {
                  pokemon.moves[currentMoveIndex].version_group_details[0]
                    .level_learned_at
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container3">
        <button className="nes-btn" id="small-btn2" onClick={goUpMoves}>
          <span className="upArrow">&lt;</span>
        </button>
        <button className="nes-btn" id="small-btn3" onClick={goDownMoves}>
          <span className="upArrow">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Moves;
