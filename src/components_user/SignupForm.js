import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AlertMsg from "../helpers/AlertMsg";
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap';
import "../styles/Form.css"

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
          <Container className="Form" >
            <h3>SIGN UP</h3>
              <Form onSubmit={handleSubmit} className="Form-form">
              <Col>
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
              </Col>
              <Col>
              <FormGroup>
                  <Label>Password</Label>
                  <Input
                    name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                  <Label>Profile Picture (URL)</Label>
                  <Input
                      type="img_url"
                      name="img_url"
                      value={formData.img_url}
                      onChange={handleChange}
                  />
                </FormGroup>
                </Col>


                {errors.length
                    ? <AlertMsg type="danger" messages={errors} />
                    : null}

                <Button onSubmit={handleSubmit}>Submit</Button>
              </Form>
            </Container>                  
  );
}

export default SignupForm;
