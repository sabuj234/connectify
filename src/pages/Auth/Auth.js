import React from "react";
import "./Auth.css";
import Logo from "../../img/Myproject.png";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>Connectify</h1>
          <h6>Connect with the World</h6>
        </div>
      </div>
      <Signup />
    </div>
  );
};

function Signup() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type={"text"}
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input 
          type={"text"}
          placeholder="Last Name"
          className="infoInput"
          name="lastName"
          />
        </div>
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
        <input 
          type={"password"}
          placeholder="Confirm Password"
          className="infoInput"
          name="password"
          />
        </div>
      <div>

      <span style={{fontSize:"12px"}}>Already have an account.<Link to="/login">Login</Link>!</span>
      <button className="button infoButton">Sign up</button>
      </div>
      </form>
    </div>
  );
}


export default Auth;
