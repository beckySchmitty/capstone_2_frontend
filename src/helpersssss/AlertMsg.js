import React from "react";

// Alert Msg

function AlertMsg({ type = "danger", error }) {

  return (
      <div className={`alert alert-${type}`} role="alert">
        <p>{error}</p>      
        </div>
  );
}

export default AlertMsg;
