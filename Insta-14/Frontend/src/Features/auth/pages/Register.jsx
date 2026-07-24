import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input required type="text" name='username' id='username' placeholder='Enter Username' />
          <input required type="email" id='email' name='email' placeholder='Enter Email' />
          <input required type="password" name='password' id='password' placeholder='Enter Password' />
          <button className='button primary-button'>Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Sign in.</Link></p>
      </div>
    </main>
  )
}

export default Register