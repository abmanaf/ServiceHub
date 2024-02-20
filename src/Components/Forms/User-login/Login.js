import React from "react";
//import "./frontpage.css";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div style={{ marginTop: "10em" }}>
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
    </div>
  );
}

export default Login;
