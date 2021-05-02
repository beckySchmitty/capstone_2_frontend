import React from "react";
import { render } from "@testing-library/react";
import SignupForm from "./SignupForm";

// smoke test
it("renders without crashing", function() {
    render(<SignupForm />);
  });
  

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<SignupForm />);
  expect(asFragment()).toMatchSnapshot();
});

