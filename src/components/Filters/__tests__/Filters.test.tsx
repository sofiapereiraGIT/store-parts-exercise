import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";
import Filters from "../index";

const setSearchFilter = jest.fn();
const setTypeFilter = jest.fn();
const onChangeDescOrder = jest.fn();

describe("Filters Tests", () => {
  it("Renders properly", () => {
    const renderedComponent = renderer.create(
      <Filters
        searchFilter="m"
        setSearchFilter={setSearchFilter}
        loadingTypeOpt={false}
        typeOptions={["Mouse", "Mousepad", "Keyboard", "Monitor"]}
        typeFilter={"Mouse"}
        setTypeFilter={setTypeFilter}
        descOrder={false}
        onChangeDescOrder={onChangeDescOrder}
      />
    );
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });

  it("Changes search properly ", () => {
    const { getByTestId } = render(
      <Filters
        searchFilter="m"
        setSearchFilter={setSearchFilter}
        loadingTypeOpt={false}
        typeOptions={["Mouse", "Mousepad", "Keyboard", "Monitor"]}
        typeFilter={"Mouse"}
        setTypeFilter={setTypeFilter}
        descOrder={false}
        onChangeDescOrder={onChangeDescOrder}
      />
    );

    const searchField = getByTestId("searchField");
    fireEvent.change(searchField, { target: { value: "mouse 1" } });
    expect(setSearchFilter).toHaveBeenCalledWith("mouse 1");
  });

  it("Changes type filter properly ", () => {
    const { getByRole } = render(
      <Filters
        searchFilter="m"
        setSearchFilter={setSearchFilter}
        loadingTypeOpt={false}
        typeOptions={["Mouse", "Mousepad", "Keyboard", "Monitor"]}
        typeFilter={"Mouse"}
        setTypeFilter={setTypeFilter}
        descOrder={false}
        onChangeDescOrder={onChangeDescOrder}
      />
    );

    const typeDropdown = getByRole("combobox");
    typeDropdown.focus();
    fireEvent.change(document.activeElement as Element, {
      target: { value: "Keyboard" },
    });
    fireEvent.keyDown(document.activeElement as Element, { key: "ArrowDown" });
    fireEvent.keyDown(document.activeElement as Element, { key: "Enter" });
    expect(setTypeFilter).toHaveBeenCalledWith("Keyboard");
  });

  it("Shows descendent order icon properly", () => {
    const { getByTestId } = render(
      <Filters
        searchFilter="m"
        setSearchFilter={setSearchFilter}
        loadingTypeOpt={false}
        typeOptions={["Mouse", "Mousepad", "Keyboard", "Monitor"]}
        typeFilter={"Mouse"}
        setTypeFilter={setTypeFilter}
        descOrder={true}
        onChangeDescOrder={onChangeDescOrder}
      />
    );

    const arrowUpwardIcon = getByTestId("arrowUpwardIcon");
    expect(arrowUpwardIcon).toBeTruthy();
  });

  it("Changes and shows descendent order icon properly", () => {
    const { getByTestId } = render(
      <Filters
        searchFilter="m"
        setSearchFilter={setSearchFilter}
        loadingTypeOpt={false}
        typeOptions={["Mouse", "Mousepad", "Keyboard", "Monitor"]}
        typeFilter={"Mouse"}
        setTypeFilter={setTypeFilter}
        descOrder={false}
        onChangeDescOrder={onChangeDescOrder}
      />
    );

    const arrowDownwardIcon = getByTestId("arrowDownwardIcon");
    expect(arrowDownwardIcon).toBeTruthy();
    const descOrderIcon = getByTestId("descOrderIcon");
    fireEvent.click(descOrderIcon);
    expect(onChangeDescOrder).toHaveBeenCalledTimes(1);
  });
});
