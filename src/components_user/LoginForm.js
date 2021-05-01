import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap';
import "../styles/Form.css"
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
      setErrors(resp.errors[0].data.error.message);
    }
  }

//  Form field updates on change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <Container className="Form" >
    <h3>LOGIN</h3>
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
        {errors.length
            ? <AlertMsg type="danger" error={errors} />
            : null}

        <Button onSubmit={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
