import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './App.css'
import HelloWorld from '../HelloWorld'
import NavBar from '../NavBar/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  )
}

export default App
