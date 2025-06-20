import React, { useState } from 'react';
import GameBoard from './component/GameBoard';
import Controls from './component/Controls';
import { animalCards } from './Data';
import { symbolCards } from './Data';
import { foodCards } from './Data';

const App = () => {
  const [selectedType, setSelectedType] = useState('animals');

  const getCards = () => {
    switch (selectedType) {
      case 'symbols': return symbolCards;
      case 'foods': return foodCards;
      default: return animalCards;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 flex flex-col items-center py-10 px-4 text-center text-white font-sans">
      <h1 className='text-5xl font-extrabold mb-8 drop-shadow-lg'>Memory Game</h1>
      <Controls onSelectType={setSelectedType} />
      <GameBoard key={selectedType} cardSet={getCards()} />
    </div>
  );
};

export default App;
