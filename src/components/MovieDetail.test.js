import React from "react";
import { render } from "@testing-library/react";
import MovieDetail from "./MovieDetail";

// smoke test
it("renders without crashing", function() {
    render(<MovieDetail />);
  });
  

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<MovieDetail />);
  expect(asFragment()).toMatchSnapshot();
});

