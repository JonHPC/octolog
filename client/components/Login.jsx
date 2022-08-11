//client/components/Login.jsx
import React from 'react';
import {Link} from 'react-router-dom'

const Login = () => {

    return(
        <div className="login-page">    
            <h1>Login Page</h1>
            <form className="login-form">
                <div className="input-container">
                    <input type="text" name="username"placeholder="username" required />
                </div>
                <div className="input-container">
                    <input type="password" name="pass" placeholder="password" required />
                </div>
                <div className="button-container">
                    <input type="submit" value="Login"/>
                </div>
                <div className="pw-signup-container">
                    <span>Forgot your password? <Link to='/forgotpw'>Click here</Link></span>
                    <span>Don't have an account? <Link to='/signup'>Sign Up</Link></span>
                </div>
            </form>
        </div>
    )
}

export default Login;