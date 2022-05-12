import React from "react";
import renderer from "react-test-renderer";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import ItemDetailsList from "../index";

describe("ItemDetailsList Tests", () => {
  it("Renders properly when an item is provided", () => {
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
        <ItemDetailsList />
      </Router>
    );
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
});
