import React from "react";
//import "./frontpage.css";
import { Link } from "react-router-dom";
import "./login.css";
import login from "./HandyLogin.png";

function Login() {
  return (
    <div className="forms-continer">
      {/* 
      <div className="form-container">
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <div className="login-form">
          <form>
            <input
              type="text"
              name="username"
              className="form-input"
              placeholder="Username"
              required
            />
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Password"
              required
            />
            <Link
              to={"#"}
              style={{
                fontSize: "14px",
                color: "#007bff",
                textDecoration: "none",
                float: "right",
              }}
            >
              Forgot password?
            </Link>
            <button type="submit" className="form-button">
              LOGIN
            </button>
            <p className="form-footer">
              Don't have an account?
              <Link
                to="/firsttPage/users-sign-up-page/users-sign-up.html"
                style={{ color: "#007bff" }}
              >
                Sign up
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
      */}
      <div className="main-login-forms">
        <div style={{ marginBottom: "2em" }}>
          <h2 style={{ fontFamily: "Sofia" }}>Sign In to HandyPro</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Donec pharetra rhoncus suscipit.
          </p>
        </div>
        <div>
          <div className="login-forms">
            <input type="text" placeholder="Username" required /> <br /> <br />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="remember-and-forgot">
            <div>
              <input type="checkbox" placeholder="remember me" required />
              <span>Remember me</span>
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
        <p>Or sign In with</p>
        <div className="external-login">
          <div className="google">
            <a href="">
              <i class="fa fa-google" aria-hidden="true"></i>
            </a>
          </div>
          <div className="twitter">
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
          <div className="facebook">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="login-image">
        <img src={login} alt="logo" width={600} />
      </div>
    </div>
  );
}

export default Login;
