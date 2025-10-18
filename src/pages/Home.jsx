import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('auth')
    navigate('/login')
  }

  return (
    <div className="home-container">
      <h1>Welcome, Rumman!</h1>
      <p>You are logged in to the Medication Tracker Frontend.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home