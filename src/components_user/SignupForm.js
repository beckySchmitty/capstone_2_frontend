import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AlertMsg from "../helpers/AlertMsg";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


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
            <div style={{width: `50%`, margin: `0 auto`}}>
              <Form onSubmit={handleSubmit}>
              <FormGroup>
                  <Label>Username</Label>
                  <Input
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      autoComplete="username"
                      required
                  />
              </FormGroup>
              <FormGroup>
                  <Label>Password</Label>
                  <Input
                    name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                    />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Profile Picture (URL)</Label>
                  <Input
                      type="img_url"
                      name="img_url"
                      value={formData.img_url}
                      onChange={handleChange}
                  />
                </FormGroup>


        {/* SHOW ERRORS IF ANY */}
                {errors.length
                    ? <AlertMsg type="danger" messages={errors} />
                    : null}

                <Button onSubmit={handleSubmit}>Submit</Button>
              </Form>

            </div>
          </div>
        </div>
  );
}

export default SignupForm;
