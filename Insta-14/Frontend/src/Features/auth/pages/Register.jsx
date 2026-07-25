import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'


const Register = () => {

  const { loading, handleRegister } = useAuth()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("second")

  const navigate = useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault()

    await handleRegister(username, email, password)
    navigate('/')
  }

  if (loading) {
    return (<main><h1>Loading.....</h1></main>)
  }


  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            required type="text" name='username' id='username' placeholder='Enter Username' />
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required type="email" id='email' name='email' placeholder='Enter Email' />
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password" name='password' id='password' placeholder='Enter Password' />
          <button className='button primary-button'>Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Sign in.</Link></p>
      </div>
    </main>
  )
}

export default Register