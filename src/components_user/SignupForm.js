import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AlertMsg from "../helpers/AlertMsg";


// Signup Form
// manages update to state on change
// On Submission - calls signup function & redirects to /search
// routed as /signup

function SignupForm({ signup }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      email: "",
      img_url: ""
    });

  const [errors, setErrors] = useState([]);


// HANDLE SUBMIT - redirect or error
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`##############FORM DATA: ${JSON.stringify(formData)}`)
    let resp = await signup(formData);
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
          <h3>SIGN UP TODAY</h3>

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
                <div>
                  <label>Email</label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Profile Picture (URL)</label>
                  <input
                      type="img_url"
                      name="img_url"
                      value={formData.img_url}
                      onChange={handleChange}
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

export default SignupForm;
