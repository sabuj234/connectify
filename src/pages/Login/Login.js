import React from 'react'
import '../Auth/Auth.css';
import Logo from "../../img/Myproject.png";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>Connectify</h1>
          <h6>Connect with the World</h6>
        </div>
      </div>
      <LoginForm />
    </div>
  )
}
function LoginForm() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Login</h3>
          <div className="info">
          <input 
            type={"text"}
            placeholder="Email"
            className="infoInput"
            name="email"
            />
          </div>
          <div className="info">
          <input 
            type={"password"}
            placeholder="Password"
            className="infoInput"
            name="password"
            />
          </div>
          <div >

      <span style={{fontSize:"12px"}}>Don't have an account. <Link to="/signup">Sign up</Link>!</span>
        <button className="button infoButton">Login</button>
      </div>
        </form>
      </div>
    );
  }

export default Login
