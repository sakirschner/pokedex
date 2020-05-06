import { useState, useEffect } from 'react';
import axios from 'axios';

const usePokemon = (pokemon) => {
  const [currentPokemon, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setPokemon(response.data);
    })(pokemon);
  }, [pokemon]);
  return currentPokemon;
};

export default usePokemon;
