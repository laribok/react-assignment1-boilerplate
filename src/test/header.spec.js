// please add your test cases here
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { act } from "react-dom/test-utils";
import { Header } from "../Components/header/Header";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render Header", () => {
  act(() => {
    render(<Header></Header>, container);
  });
  expect(container.textContent).toBe("News App");
});

export default Header;
