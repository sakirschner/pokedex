import React from 'react';
import useDescription from './apis/useDescription';

const Description = ({ selectedPokemon }) => {
  const descriptions = useDescription(selectedPokemon);
  let englishDescription = '';

  const setEnglishDescription = () => {
    for (let i = 0; i < descriptions.length; i++) {
      if (descriptions[i].language.name === 'en') {
        englishDescription = descriptions[i].flavor_text;
        break;
      }
    }
  };

  const renderDescription = () => {
    setEnglishDescription();
    if (englishDescription) {
      return <p>{englishDescription}</p>;
    } else {
      return <p>Loading...</p>;
    }
  };

  if (!descriptions) {
    return (
      <div id="description" className="nes-container">
        Loading...
      </div>
    );
  }

  return (
    <div id="description" className="nes-container">
      {renderDescription()}
    </div>
  );
};

export default Description;
