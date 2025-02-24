import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importiamo gli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Contacts from './pages/Contacts'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
