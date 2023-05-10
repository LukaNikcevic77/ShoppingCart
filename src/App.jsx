import { useState, useEffect } from 'react'
import '../src/style/style.scss'
import Home from './compoennts/Home'
import Navigation from './compoennts/NavMenu'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    <Home />
    </>
  )
}

export default App
