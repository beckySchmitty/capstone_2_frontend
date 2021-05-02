import React from "react";
import { render } from "@testing-library/react";
import MovieCard from "./MovieCard";

// smoke test
it("renders without crashing", function() {
    render(<MovieCard />);
  });
  

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<MovieCard />);
  expect(asFragment()).toMatchSnapshot();
});

