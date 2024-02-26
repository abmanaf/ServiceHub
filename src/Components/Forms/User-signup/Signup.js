import React, { useState, useEffect } from "react";
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
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (password === userName) {
      alert("Password cannot be the same as user name.");
      return;
    }
    // Check if password is same as email
    if (password === email) {
      alert("Password cannot be the same as email.");
      return;
    }

    const newUser = {
      name,
      userName,
      email,
      phone,
      password,
    };

    // Update state
    setStoredUser([...storedUsers, newUser]);

    // Save to local storage
    //localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));

    // Reset form fields
    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  useEffect(() => {
    console.log(storedUsers);
  }, [storedUsers]);

  return (
    <div>
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
            <li>Not be the same as your username or email</li>
          </ul>
          <button type="submit" className="form-button">
            Create new account
          </button>
          <br />
          <p className="form-footer">
            Already have an account?{" "}
            <Link to="/Login" style={{ color: "#007bff" }}>
              Login
            </Link>
          </p>
        </form>
      </div>

      <div>
        {/* Display user data 
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Password</th>
            </tr>
          </thead>
          {storedUsers.map((data, index) => (
            <tbody key={index}>
              <tr>
                <td>{data.name}</td>
                <td>{data.userName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.password}</td>
              </tr>
            </tbody>
          ))}
        </table>
        */}
      </div>
    </div>
  );
}

export default SignUpForm;
