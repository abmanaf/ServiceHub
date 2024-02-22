import React from "react";
import { Link } from "react-router-dom";
import "./Provider.css";

function SignUpForm() {
  return (
    <div
      className="form-container"
      style={{ justifyContent: "center", marginTop: "6em" }}
    >
      <h2 style={{ textAlign: "center" }}>Create Account</h2>
      <form>
        <input
          type="text"
          name="first_name"
          className="form-input"
          placeholder="Full name"
          required
        />
        <input
          type="password"
          name="password"
          className="form-input"
          placeholder="User Name"
          required
        />
        <input
          type="email"
          name="last_name"
          className="form-input"
          placeholder="Email"
          required
        />

        <input
          type="number"
          name="email"
          className="form-input"
          placeholder="Number"
          required
        />

        <input
          type="password"
          name="password"
          className="form-input"
          placeholder="Password"
          required
        />
        <p style={{ fontSize: "14px", color: "#777777" }}>
          Your password must:
        </p>
        <ul style={{ fontSize: "14px", color: "#777777" }}>
          <li>Be at least 6 characters long</li>
          <li>Not be the same as your name or email</li>
        </ul>
        <button type="submit" className="form-button">
          Join the community
        </button>
        <p className="form-footer">
          Already have an account?{" "}
          <Link to="/Login" style={{ color: "#007bff" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
