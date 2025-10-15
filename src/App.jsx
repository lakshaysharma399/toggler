import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Maincontent from './pages/Maincontent'


function App() {
  const [count, setCount] = useState(false)

  return (
    <>

    <Navbar count = {count} setCount={setCount}/>
    <Maincontent count = {count}/>

      
    </>
  )
}

export default App
