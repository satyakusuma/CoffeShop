import { useState } from 'react'
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'



function App() {
  const [token, setToken] = useState(null); 
  const navigate = useNavigate();

  if (!token) { 
    navigate('/login');
  }

  return (
    <>
     <Outlet context={{ token, setToken }}/>
    </>
  )
}

export default App
