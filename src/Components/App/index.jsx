
import './App.css'
import React , { useEffect } from 'react';
import NavBar from '../NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//page
import AddActivity from '../../Pages/AddActivity'
import Login from '../../Pages/Login'
import EditActivity from '../../Pages/EditActivity'
import Profile from '../../Pages/Profile'
import Register from '../../Pages/Register'
import Dashboard from '../../Pages/Dashboard'
import EditProfile from '../../Pages/EditProfile'

function App() {
  const [auth, setAuth] = React.useState(localStorage.token);

  useEffect(() => {
    setAuth(localStorage.token)
    // This function will be called whenever the value of date1 or date2 changes
    // console.log('The difference between the selected dates has changed');
  }, [localStorage.token]);
  return (
    <div className="App">

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/dashboard" element={ auth ? <Dashboard /> : null}  />
        <Route path="/addActivity" element={ auth ?<AddActivity />: null} />
        <Route path="/editActivity" element={ auth ?<EditActivity />: null}/>
        <Route path="/editProfile" element={ auth ?<EditProfile />: null}/>
        <Route path="/profile" element={ auth ?<Profile />: null}/>

      </Routes>
    </Router>
    </div>
  )
}

export default App
