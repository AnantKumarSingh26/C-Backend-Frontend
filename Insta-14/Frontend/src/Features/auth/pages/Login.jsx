import React from "react";
import '../styles/form.scss'
import {  Link} from "react-router";

const Login = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form action="">
          <input type="text" name="username" placeholder="Enter Username"/>
          <input type="password" name="password" placeholder="Enter Password" />
          <button type="submit">Submit</button>
        </form>
        <p>Don't have an account! <Link className="toggleAuthForm" to='/register'>Register</Link></p>
      </div>
    </main>
  )
}

export default Login