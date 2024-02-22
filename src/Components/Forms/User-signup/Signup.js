import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function SignUpForm() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [storedUsers, setStoredUser] = useState([]);

  const hanldeUserSignup = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      userName,
      email,
      phone,
      password,
    };
    setStoredUser([...storedUsers, newUser]);
    console.log(storedUsers.map((user) => user));

    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <div
      className="form-container"
      style={{ justifyContent: "center", marginTop: "6em" }}
    >
      <h2 style={{ textAlign: "center" }}>Create Account</h2>
      <form onSubmit={hanldeUserSignup}>
        <input
          type="text"
          name="full_name"
          className="form-input"
          placeholder="Full name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="User Name"
          className="form-input"
          placeholder="User Name"
          required
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="last_name"
          className="form-input"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          name="Phone"
          className="form-input"
          placeholder="Phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          name="password"
          className="form-input"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          <Link to="/Login" style={{ color: "#007bff" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
