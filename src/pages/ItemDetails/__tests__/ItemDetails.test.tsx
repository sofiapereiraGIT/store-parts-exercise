import React from "react";
import renderer from "react-test-renderer";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import ItemDetails from "../index";

describe("ItemDetails Tests", () => {
  it("Renders properly", () => {
    const history = createMemoryHistory({
      initialEntries: [
        {
          state: {
            name: "itemName",
            type: "itemType",
            price: "itemPrice",
          },
        },
      ],
    });
    const renderedComponent = renderer.create(
      <Router history={history}>
        <ItemDetails />
      </Router>
    );
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
});
