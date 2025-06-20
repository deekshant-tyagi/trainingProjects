import React from 'react';

const Card = ({ content, isFlipped, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-20 h-20 flex items-center justify-center rounded-lg cursor-pointer select-none border-2 transition-transform duration-500 ease-in-out transform ${
        isFlipped ? 'bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 shadow-lg scale-105' : 'bg-gray-300 hover:bg-gray-400'
      }`}
      style={{ perspective: '600px' }}
    >
      <div
        className={`w-full h-full flex items-center justify-center text-3xl font-bold text-white select-none ${
          isFlipped ? 'transform rotateY-0' : 'transform rotateY-180'
        }`}
        style={{
          backfaceVisibility: 'hidden',
          transition: 'transform 0.6s',
        }}
      >
        {isFlipped ? content : '❓'}
      </div>
    </div>
  );
};

export default Card;
