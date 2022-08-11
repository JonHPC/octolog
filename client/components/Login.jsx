//client/components/Login.jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import LoginImg from '../imgs/login-img.png';

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const linkStyle = {
        textDecoration: "none",
        color:"#94a3b8",
        
    }

    const enterStyle = {
        textDecoration: "none",
        color:"#94a3b8",
        fontSize: "3rem",
        cursor: 'pointer'
    }

    const database = [
        {
            username: 'jonathan',
            password: 'password'
        }
    ]

    const errors = {
        uname: 'Invalid username',
        pass: 'Invalid password'
    }
    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log('login submitted');
        const {uname, pass} = document.forms[0]

        //find user login info
        const userData = database.find((user) => user.username === uname.value);

        //compare user info
        if(userData){
            if(userData.password !== pass.value){
                //invalid password
                console.log("invalid password")
                setErrorMessages({name: "pass", message:errors.pass})
            }else{
                //correct password
                console.log('correct password')
                setIsSubmitted(true)
            }
        }else{
            //username not found
            console.log('username not found')
            setErrorMessages({name:"uname", message: errors.uname})
        }
    }

    const renderErrorMessage = (name) => (
        name === errorMessages.name && (<div className="error">{errorMessages.message}</div>)
    )

    const renderForm = (
        <form className="login-form" onSubmit={handleSubmit}>
            <h3>Login</h3>
            {renderErrorMessage("uname")}
            {renderErrorMessage("pass")}
            <div className="input-container">
                <input type="text" name="uname"placeholder="username" required />
            </div>
            <div className="input-container">
                <input type="password" name="pass" placeholder="password" required />
            </div>
            <div className="button-container">
                <input type="submit" value="Login"/>
            </div>
            <div className="pw-signup-container">
                <span>Forgot your password? <Link to='/forgotpw' style={linkStyle}>Click here</Link></span>
                <span>Don't have an account? <Link to='/signup' style={linkStyle}>Sign Up</Link></span>
            </div>
        </form>
    )

    return(
        <div className="login-page">    
            <div className="login-left">
                <img src={LoginImg}></img>
            </div>
            <div className="login-right">
                <h1>Octolog</h1>
                {isSubmitted ? <div className="login-success"><h3>Successfully logged in!</h3><Link to='/' id="enter-link" style={enterStyle}>Click Here</Link></div> : renderForm}
            </div>
        </div>
    )
}

export default Login;