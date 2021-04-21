import React from "react";

// Alert Msg

function AlertMsg({ type = "danger", messages = [] }) {

  return (
      <div className={`alert alert-${type}`} role="alert">
        <h1>{JSON.stringify(messages)}</h1>
      </div>
  );
}

export default AlertMsg;
