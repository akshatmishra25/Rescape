import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <div className='cover'>
        <h1>LOGIN</h1>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <div className="login-btn">LOGIN</div>
        <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="github"></div>
                <div className="google"></div>
          </div>
    </div>
  )
}

export default Login
