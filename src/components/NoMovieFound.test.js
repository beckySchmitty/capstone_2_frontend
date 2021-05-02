import React from "react";
import { render } from "@testing-library/react";
import NoMovieFound from "./NoMovieFound";

// smoke test
it("renders without crashing", function() {
    render(<NoMovieFound />);
  });
  

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<NoMovieFound />);
  expect(asFragment()).toMatchSnapshot();
});

