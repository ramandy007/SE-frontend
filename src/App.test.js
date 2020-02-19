import React from "react";
import {
  render,
  queryAllByText,
  findAllByText,
  getByTitle
} from "@testing-library/react";
import App from "./App";
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders login page signup button", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Sign up");
  expect(linkElement).toBeInTheDocument();
});

test("renders login page form", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Sign up");
  expect(linkElement).toBeInTheDocument();
});
