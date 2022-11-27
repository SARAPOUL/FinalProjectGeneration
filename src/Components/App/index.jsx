import { useState } from 'react'

import reactLogo from '../../assets/react.svg'
import './App.css'
import HelloWorld from '../HelloWorld'
import NavBar from '../NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//page
import AddActivity from '../../Pages/AddActivity'
import Login from '../../Pages/Login'
import EditActivity from '../../Pages/EditActivity'
import Profile from '../../Pages/Profile'
import Register from '../../Pages/Register'
import Dashboard from '../../Pages/Dashboard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addActivity" element={<AddActivity />} />
        <Route path="/editActivity" element={<EditActivity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
