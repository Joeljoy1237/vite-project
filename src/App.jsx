import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <div className='text-white min-h-screen'> 
      <Nav />
      <div className='min-h-screen text-center items-center justify-center relative flex'>
      <h1 className='text-5xl lg:text-6xl'>Bakery Cafe & Restaurant</h1>
      </div>
    </div>
        
  )
}

export default App
