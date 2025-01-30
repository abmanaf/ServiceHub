import React from "react";
import Info from "../StoredInfo/Info";

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
