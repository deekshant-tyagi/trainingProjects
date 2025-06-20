import './App.css'
import React from 'react'
import Data, { movieData } from './Data'
import Cards from './component/Cards'


function App() {
  

  return (
    <div className='min-h-screen bg-gray-100 '>
        <div>
          <h1 className='w-full p-3 bg-neutral-800 h-15 text-3xl font-bold text-center mb-10 text-white '>React Movie Cards</h1>
        </div>
      <div className='flex flex-wrap justify-center gap-6 '>
        {
          movieData.map((movie,index) => (
            <Cards key={index} {...movie}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default App
