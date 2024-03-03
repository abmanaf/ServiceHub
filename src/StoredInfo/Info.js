import React from "react";

function Info({ storedUsers, userDetails }) {
  return (
    <div>
      {" "}
      <div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>email</th>
              <th>Phone</th>
              <th>Password</th>
            </tr>
          </thead>
          {storedUsers.map((data) => (
            <tbody>
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
      </div>
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
    </div>
  );
}

export default Info;
