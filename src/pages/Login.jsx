import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (username.toLowerCase() === 'rumman' && password === 'rumman1234') {
      localStorage.setItem('auth', true)
      navigate('/home')
    } else {
      alert('Invalid credentials!')
    }
  }

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <div className="auth-links">
          <span onClick={() => navigate('/signup')}>Don’t have an account? Sign up</span>
          <span onClick={() => navigate('/forgot-password')}>Forgot password?</span>
        </div>
      </div>
    </div>
  )
}

export default Login