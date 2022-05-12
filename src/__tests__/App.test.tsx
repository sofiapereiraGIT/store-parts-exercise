import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("App Tests", () => {
  it("Renders properly", () => {
    const renderedComponent = renderer.create(<App />);
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
});
