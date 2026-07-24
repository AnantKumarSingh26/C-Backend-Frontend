import React from 'react'
import "../style/form.scss"
import { Link } from 'react-router'


const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' placeholder='Enter Username'  id='username'/>
          <input type="password" name='password' placeholder='Enter Password' id='password' />
          <button className='button primary-button'>Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Create One.</Link></p>
      </div>
    </main>
  )
}

export default Login