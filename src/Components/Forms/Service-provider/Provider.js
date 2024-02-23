import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Provider.css";

function SignUpForm() {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare user details object
    const user = {
      name,
      username,
      email,
      phone,
      password,
      avatar,
      id: Date.now(),
    };

    // Add user details to the userDetails array without overriding
    setUserDetails([...userDetails, user]);

    // Reset form fields
    setName("");
    setUsername("");
    setEmail("");
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
      {/* Display users details
      <div>
        <h2>User Details</h2>
        <table>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
          </tr>
          {userDetails.map((user, id) => (
            <tr key={id}>
              <td>
                {user.avatar && (
                  <img
                    src={URL.createObjectURL(user.avatar)}
                    alt="Avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </table>
        
      </div>
       */}
    </div>
  );
}

export default SignUpForm;
