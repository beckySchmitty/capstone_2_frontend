import React from "react";
import { render } from "@testing-library/react";
import MovieDetailCard from "./MovieDetailCard";

// smoke test
it("renders without crashing", function() {
    render(<MovieDetailCard />);
  });
  

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<MovieDetailCard />);
  expect(asFragment()).toMatchSnapshot();
});

