import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Provider.css";

function SignUpForm() {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (password === username) {
      alert("Password cannot be the same as user name.");
      return;
    }

    if (password === email) {
      alert("Password cannot be the same as email.");
      return;
    }

    const user = {
      name,
      username,
      email,
      profession,
      phone,
      password,
      avatar,
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
  };

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  return (
    <div>
      <div
        className="form-container"
        style={{ justifyContent: "center", marginTop: "6em" }}
      >
        <h2 style={{ textAlign: "center" }}>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <label htmlFor="avatar">
              {avatar ? (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="Avatar"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  <span style={{ color: "#777777", fontSize: "24px" }}>
                    <i
                      className="fa fa-user-circle-o"
                      aria-hidden="true"
                      style={{ fontSize: "150px", color: "#777777" }}
                    ></i>
                  </span>
                </div>
              )}
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleAvatarChange}
            />
          </div>
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
            name="username"
            className="form-input"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="Profession"
            name="Profession"
            className="form-input"
            placeholder="Profession"
            required
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
          <input
            type="number"
            name="phone"
            className="form-input"
            placeholder="Phone number"
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
    </div>
  );
}

export default SignUpForm;
