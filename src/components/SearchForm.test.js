import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "./SearchForm";

// smoke test
it("renders without crashing", function() {
    render(<SearchForm />);
  });
  

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<SearchForm />);
  expect(asFragment()).toMatchSnapshot();
});

