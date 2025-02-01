import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

function SignUpForm() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [storedUsers, setStoredUser] = useState([]);
  const [error, setError] = useState({
    name: false,
    userName: false,
    email: false,
    phone: false,
    password: false,
  });

  //we are Loading stored users from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("Users");
    if (storedData) {
      setStoredUser(JSON.parse(storedData));
    }
  }, []);

  //we are Saving users to local storage whenever storedUsers changes
  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(storedUsers));
  }, [storedUsers]);

  const validateForm = () => {
    const newError = {
      name: name.trim() === "",
      userName: userName.trim() === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      phone: phone.trim() === "",
      password: password.length < 6 || password === userName || password === email,
    };

    setError(newError);
    return !Object.values(newError).some((err) => err);
  };

  const hanldeUserSignup = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newUser = {
        name,
        userName,
        email,
        phone,
        password,
      };

      setStoredUser((prevUsers) => {
        const updatedUsers = [...prevUsers, newUser];
        return updatedUsers;
      });

      setName("");
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");

      alert("Account created successfully!");
    }
  };

  return (
    <div>
      <div className="form-container">
        <h2>Create Account</h2>
        <form onSubmit={hanldeUserSignup}>
          <Input
            type="text"
            name="full_name"
            className={`form-input ${error.name ? "border-error" : ""}`}
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="text"
            name="User Name"
            className={`form-input ${error.userName ? "border-error" : ""}`}
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="email"
            name="email"
            className={`form-input ${error.email ? "border-error" : ""}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="number"
            name="Phone"
            className={`form-input ${error.phone ? "border-error" : ""}`}
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <Input
            type="password"
            name="password"
            className={`form-input ${error.password ? "border-error" : ""}`}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="password_critarias">
            <p className="password-requirements">Your password must:</p>
            <ul className="password-requirements-list">
              <li>Be at least 6 characters long</li>
              <li>Not be the same as your username or email</li>
            </ul>
          </div>

          <Button type="submit" className="form-button">
            Create new account
          </Button>

          <p className="form-footer">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;