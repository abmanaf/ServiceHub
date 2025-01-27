import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import login from "./HandyLogin.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("user Email:", username);
    console.log("password:", password);
  };
  return (
    <div className="forms-continer">
      <div className="main-login-forms">
        <div style={{ marginBottom: "2em" }}>
          <h2 style={{ fontFamily: "Sofia" }}>Sign In to HandyPro</h2>
          <p>
            Welcome back to HandyPro! Log in to conveniently manage
            <br /> your tasks and services and gain access to your account.
            <br />
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div>
            <div>
              <div className="login-forms">
                <input
                  type="text"
                  placeholder="Username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />{" "}
                <br /> <br />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="remember-and-forgot">
                <div
                  className=""
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    <span>Remember me</span>
                  </div>
                </div>
                <div>
                  <Link to="">
                    <span>Forgot Password?</span>
                  </Link>
                </div>
              </div>
            </div>
            <button
              style={{
                width: "100%",
                marginTop: "3em",
                border: "none",
                padding: "10px 10px",
                backgroundColor: "#6C63FF",
                borderRadius: "5px",
                color: "white",
              }}
            >
              Log In
            </button>
          </div>
        </form>

        <p>Or sign In with</p>
        <div className="external-login">
          <div className="google">
            <Link href="">
              <i className="fa fa-google" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="twitter">
            <Link href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="facebook">
            <Link href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="login-image">
        <img src={login} alt="logo" width={600} />
      </div>
    </div>
  );
};

export default Login;
