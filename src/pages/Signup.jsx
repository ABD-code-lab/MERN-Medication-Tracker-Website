import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    alert('Signup successful! (For demo only)')
    navigate('/login')
  }

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Signup</button>
        </form>
        <div className="auth-links">
          <span onClick={() => navigate('/login')}>Already have an account? Login</span>
        </div>
      </div>
    </div>
  )
}

export default Signup