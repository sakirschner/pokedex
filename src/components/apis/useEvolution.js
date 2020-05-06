import { useState, useEffect } from 'react';
import axios from 'axios';

const useEvolution = (pokemon) => {
  const [currentEvolution, setEvolution] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
        .then((response) => {
          axios
            .get(response.data.evolution_chain.url)
            .then((response2) => setEvolution(response2.data.chain));
        });
    })(pokemon);
  }, [pokemon]);
  return currentEvolution;
};

export default useEvolution;
