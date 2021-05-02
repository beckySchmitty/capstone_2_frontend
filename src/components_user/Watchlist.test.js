import React from "react";
import { render } from "@testing-library/react";
import Watchlist from "./Watchlist";

// smoke test
it("renders without crashing", function() {
    render(<Watchlist />);
  });
  

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<Watchlist />);
  expect(asFragment()).toMatchSnapshot();
});

