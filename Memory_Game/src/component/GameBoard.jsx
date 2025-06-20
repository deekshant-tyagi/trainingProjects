import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const GameBoard = ({ cardSet }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    const initialize = () => {
      const doubled = [...cardSet, ...cardSet];
      const shuffled = shuffle(doubled).map((content, index) => ({ id: index, content }));
      setCards(shuffled);
      setFlipped([]);
      setMatched([]);
      setScore(0);
      setCorrect(0);
      setIncorrect(0);
    };
    initialize();
  }, [cardSet]);

  const handleClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].content === cards[second].content) {
        setMatched([...matched, first, second]);
        setScore((s) => s + 1);
        setCorrect((c) => c + 1);
        setTimeout(() => setFlipped([]), 800);
      } else {
        setIncorrect((i) => i + 1);
        setTimeout(() => setFlipped([]), 600);
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <div className="flex mb-6 text-lg font-semibold border-2 border-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg w-full justify-between px-6 py-3 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white shadow-lg">
        <div>Score: {score}</div>
        <div>Correct: {correct}</div>
        <div>Incorrect: {incorrect}</div>
      </div>

      <button
        onClick={() => window.location.reload()}
        className="mb-6 px-5 py-2 bg-gradient-to-r from-red-500 via-pink-600 to-purple-700 text-white rounded-full shadow-lg hover:from-red-600 hover:via-pink-700 hover:to-purple-800 transition-colors focus:outline-none focus:ring-4 focus:ring-pink-400"
      >
        Reset Game
      </button>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Cards
            key={index}
            content={card.content}
            isFlipped={flipped.includes(index) || matched.includes(index)}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
