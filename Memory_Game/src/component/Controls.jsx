import React from 'react';

const Controls = ({ onSelectType }) => {
  return (
    <div className='flex gap-6 mb-8 justify-center'>
      <button
        onClick={() => onSelectType('animals')}
        className='px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 text-white font-semibold shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300'
      >
        {/* Animals */}
      </button>
      <button
        onClick={() => onSelectType('symbols')}
        className='px-6 py-2 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-semibold shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300'
      >
        {/* Symbols */}
      </button>
      <button
        onClick={() => onSelectType('foods')}
        className='px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 text-white font-semibold shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-300'
      >
        {/* Foods */}
      </button>
    </div>
  );
};

export default Controls;
