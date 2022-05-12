import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";
import Header from "../index";

describe("Header Tests", () => {
  it("Renders properly", () => {
    const renderedComponent = renderer.create(<Header />);
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });

  it("Redirects properly to '/' when title is clicked", () => {
    const history = createMemoryHistory();
    const pushSpy = jest.spyOn(history, "push");
    const { getByTestId } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    const headerTitle = getByTestId("headerTitle");
    fireEvent.click(headerTitle);
    expect(pushSpy).toHaveBeenCalledWith(`/`);
  });
});
