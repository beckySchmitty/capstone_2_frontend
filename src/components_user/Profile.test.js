import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

// smoke test
it("renders without crashing", function() {
    render(<Profile />);
  });
  

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<Profile />);
  expect(asFragment()).toMatchSnapshot();
});

