import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Provider.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const SignUpForm = () => {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [error, setError] = useState({
    name: false,
    username: false,
    email: false,
    profession: false,
    phone: false,
    password: false,
  });

  // Load user details from local storage on component mount
  useEffect(() => {
    const getUserDetails = localStorage.getItem("Service Provider");
    if (getUserDetails) {
      setUserDetails(JSON.parse(getUserDetails));
    }
  }, []);

  // Save user details to local storage whenever userDetails changes
  useEffect(() => {
    localStorage.setItem("Service Provider", JSON.stringify(userDetails));
  }, [userDetails]);

  const validatePassword = () => {
    if (password.length < 6) {
      return true;
    }
    if (password === username) {
      return true;
    }
    if (password === email) {
      return true;
    }
    return false;
  };

  const validateForm = () => {
    const newError = {
      name: name.trim() === "",
      username: username.trim() === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      profession: profession.trim() === "",
      phone: phone.trim() === "",
      password: validatePassword(),
    };
    setError(newError);

    return !Object.values(newError).some((err) => err);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const user = {
        name,
        username,
        email,
        profession,
        phone,
        password,
        avatar: avatar ? URL.createObjectURL(avatar) : null, // Store avatar URL
        id: Date.now(),
      };
      setUserDetails([...userDetails, user]);
      setName("");
      setUsername("");
      setEmail("");
      setProfession("");
      setPhone("");
      setPassword("");
      setAvatar(null);
      alert("Account created successfully!");
    } else {
      console.log("Please fix the errors before submitting.");
    }
  };

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="avatar-container">
            <label htmlFor="avatar">
              {avatar ? (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="Avatar"
                  className="avatar-image"
                />
              ) : (
                <div className="avatar-placeholder">
                  <i className="fa fa-user-circle-o avatar-icon"></i>
                </div>
              )}
            </label>
            <Input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
              className="avatar-input"
              onChange={handleAvatarChange}
            />
          </div>

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
            name="username"
            className={`form-input ${error.username ? "border-error" : ""}`}
            placeholder="Username"
            value={username}
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
            type="text"
            name="profession"
            className={`form-input ${error.profession ? "border-error" : ""}`}
            placeholder="Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />

          <Input
            type="number"
            name="phone"
            className={`form-input ${error.phone ? "border-error" : ""}`}
            placeholder="Phone number"
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
              <li>Not be the same as your username</li>
              <li>Not be the same as your email</li>
            </ul>
          </div>
          <Button type="submit" className="form-button">
            Join the community
          </Button>

          <p className="form-footer">
            Already have an account?{" "}
            <Link to="/Login" className="login-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;