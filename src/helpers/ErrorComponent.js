import React from "react";

// Alert Msg

function ErrorComponent({ error }) {

  return (
      <div>
          <h3 style={{color: `red`}}>{error}</h3>
      </div>
  );
}

export default ErrorComponent;
