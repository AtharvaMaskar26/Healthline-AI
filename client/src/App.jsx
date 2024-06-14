import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importing Components 
import HospitalHeader from './components/HospitalHeader'
import Recorder from './components/Recorder'

function App() {
  

  return (
    <main>
      <section>
        <HospitalHeader />
        <Recorder />
      </section>
    </main>
  )
}

export default App
