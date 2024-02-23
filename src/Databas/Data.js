import React from "react";
//import DisplayUserDetails from "../Display_users_details/DisplayUserDetails";
import Info from "../StoredInfo/Info";

//import "./Data.css";

function Data({ storedUsers, userDetails }) {
  return (
    <div>
      <div className="display-users">
        {storedUsers.length > 0 ? <Info storedUsers={storedUsers} /> : "empty"}
      </div>
      <div className="display-users">
        {userDetails.length > 0 ? <Info userDetails={userDetails} /> : "empty"}
      </div>
    </div>
  );
}

export default Data;
