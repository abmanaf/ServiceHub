import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import login from "./HandyLogin.png";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="forms-container">
      <div className="main-login-forms">
        <div className="login-header">
          <h2>Sign In to HandyPro</h2>
          <p>
            Welcome back to HandyPro! Log in to conveniently manage
            <br /> your tasks and services and gain access to your account.
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="login-form-fields">
            <Input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember-and-forgot">
            <div className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
          <Button type="submit" className="login-button">
            Log In
          </Button>
        </form>

        <p className="or-sign-in">Or sign in with</p>
        <div className="external-login">
          <div className="google">
            <Link to="/google-login">
              <i className="fa fa-google" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="twitter">
            <Link to="/twitter-login">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="facebook">
            <Link to="/facebook-login">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="login-image">
        <img src={login} alt="HandyPro Login" />
      </div>
    </div>
  );
};

export default Login;
