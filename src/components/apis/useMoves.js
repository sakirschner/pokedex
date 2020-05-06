import { useState, useEffect } from 'react';
import axios from 'axios';

const useMoves = (pokemon, index) => {
  const [currentMove, setMove] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => {
          axios
            .get(response.data.moves[index].move.url)
            .then((response2) => setMove(response2.data));
        });
    })(pokemon);
  }, [pokemon]);
  return currentMove;
};

export default useMoves;
