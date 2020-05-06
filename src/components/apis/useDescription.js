import { useState, useEffect } from 'react';
import axios from 'axios';

const useDescription = (pokemon) => {
  const [currentDescription, setDescription] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
      );
      setDescription(response.data.flavor_text_entries);
    })(pokemon);
  }, [pokemon]);
  return currentDescription;
};

export default useDescription;
