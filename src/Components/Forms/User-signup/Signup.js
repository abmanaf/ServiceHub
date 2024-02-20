import React from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <div className="form-container" style={{ marginTop: "10em" }}>
      <h2 style={{ textAlign: "center" }}>Create your account</h2>
      <form>
        <input
          type="text"
          name="first_name"
          className="form-input"
          placeholder="First name"
          required
        />
        <input
          type="text"
          name="last_name"
          className="form-input"
          placeholder="Last name"
          required
        />

        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="Email"
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
          Create new account
        </button>
        <p className="form-footer">
          Already have an account?{" "}
          <Link
            href="/firsttPage/users-login-page/users-login-page.html"
            style={{ color: "#007bff" }}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
