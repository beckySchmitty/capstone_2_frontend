import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import AlertMsg from "../helpers/AlertMsg"

// Login Form
// manages update to state on change
// On Submission - calls login function & redirects to /search

function LoginForm({ login }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);


// HANDLE SUBMIT - redirect or error
  async function handleSubmit(e) {
    e.preventDefault();
    let resp = await login(formData);

    if (resp.success) {
      history.push("/search");
    } else {
      setErrors(resp.errors);
    }
  }

//  Form field updates on change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
        <div>
          <h3>LOGIN</h3>

          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Username</label>
                  <input
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      autoComplete="username"
                      required
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                    />
                    </div>

        {/* SHOW ERRORS IF ANY */}
                {errors.length
                    ? <AlertMsg type="danger" messages={errors} />
                    : null}

                <button onSubmit={handleSubmit}>Submit</button>
              </form>

            </div>
          </div>
        </div>
  );
}

export default LoginForm;
