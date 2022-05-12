import React from "react";
import renderer from "react-test-renderer";
import { render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import ItemsList from "../index";

describe("Table Tests", () => {
  it("Renders properly", () => {
    const renderedComponent = renderer.create(<ItemsList />);
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });

  it("Renders items data fetched", async () => {
    const fakeResponse = [
      {
        state: {
          name: "itemName",
          type: "itemType",
          price: "itemPrice",
        },
      },
    ];
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;

    await act(async () => {
      render(<ItemsList />);
    });
    await waitFor(() => expect(mockedFetch).toHaveBeenCalled());
  });
});
