import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";

// smoke test
it("renders without crashing", function() {
    render(<LoginForm />);
  });
  

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<LoginForm />);
  expect(asFragment()).toMatchSnapshot();
});

