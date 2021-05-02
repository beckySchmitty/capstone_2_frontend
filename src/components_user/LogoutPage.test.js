import React from "react";
import { render } from "@testing-library/react";
import LogoutPage from "./LogoutPage";

// smoke test
it("renders without crashing", function() {
    render(<LogoutPage />);
  });
  

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<LogoutPage />);
  expect(asFragment()).toMatchSnapshot();
});

