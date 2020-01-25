import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/react";
import App from "./App";

describe('Testing if App renders without crashing', () => {

  it("App renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});