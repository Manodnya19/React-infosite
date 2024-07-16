import { useState } from 'react'
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  )
}

