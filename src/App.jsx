import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './assets/components/Header'
import PostList from './assets/components/PostList'


function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  )
}

export default App
