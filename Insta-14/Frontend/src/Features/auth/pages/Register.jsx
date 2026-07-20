import React from 'react'
import {Link} from 'react-router'
import '../styles/form.scss'
const Register = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form action="">
          <input type="text" name='username' placeholder='Enter Username' />
          <input type="text" name='email' placeholder='Enter Email' />
          <input type="text" name='password' placeholder='Enter Password' />
          <button>Register</button>
        </form>
      <p>Already have an account <Link className="toggleAuthForm" to='/login'>Login</Link></p>
      </div>
    </main>
  )
}

export default Register