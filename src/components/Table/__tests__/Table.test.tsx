import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Table from "../index";

describe("Table Tests", () => {
  it("Renders properly when items are provided", () => {
    const renderedComponent = renderer.create(
      <Table
        loading={false}
        items={[
          {
            name: "itemName 1",
            type: "itemType",
            price: "11$",
          },
          {
            name: "itemName 2",
            type: "itemType",
            price: "12$",
          },
          {
            name: "itemName 3",
            type: "itemType",
            price: "13$",
          },
        ]}
      />
    );
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });

  it("Shows loading", () => {
    const { getByTestId } = render(<Table loading={true} items={[]} />);
    const loadingCircle = getByTestId("loadingCircle");
    expect(loadingCircle).toBeTruthy();
  });

  it("Shows 'no data' message", () => {
    const { getByTestId } = render(<Table loading={false} items={[]} />);
    const noDataMessage = getByTestId("noDataMessage");
    expect(noDataMessage).toBeTruthy();
  });

  it("Redirects properly to '/item' when a row is clicked", () => {
    const history = createMemoryHistory();
    const pushSpy = jest.spyOn(history, "push");
    const { getByTestId } = render(
      <Router history={history}>
        <Table
          loading={false}
          items={[
            {
              name: "itemName 1",
              type: "itemType",
              price: "11$",
            },
            {
              name: "itemName 2",
              type: "itemType",
              price: "12$",
            },
            {
              name: "itemName 3",
              type: "itemType",
              price: "13$",
            },
          ]}
        />
      </Router>
    );

    const bodyTableRow = getByTestId("bodyTableRow_0");
    fireEvent.click(bodyTableRow);
    expect(pushSpy).toHaveBeenCalledWith({
      pathname: "/item",
      state: {
        name: "itemName 1",
        type: "itemType",
        price: "11$",
      },
    });
  });
});
