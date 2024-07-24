import React,{ useState } from 'react'
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import './App.css'

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className='container'>
      <Navbar darkMode={darkMode} toggleDarkMode = {toggleDarkMode}/>
      <MainContent darkMode={darkMode}  />
    </div>
  )
}

