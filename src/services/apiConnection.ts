import { Item } from "../models/item";

export const fetchItemTypes = async (
  setLoading: (b: boolean) => void,
  setTypesOptions: (a: string[]) => void
) => {
  setLoading(true);
  setTypesOptions([]);

  try {
    const response = await fetch("/store/part-types");
    let body = await response.json();
    if (response.status !== 200) {
      throw Error(body);
    }
    setTypesOptions(body.sort());
  } catch (error) {
    console.log("error: ", error);
  }

  setLoading(false);
};

let abortController = new AbortController();

export const fetchItems = async (
  setLoading: (b: boolean) => void,
  setItems: (a: Item[]) => void,
  type: string = "",
  query: string = ""
) => {
  abortController.abort(); // Cancel the previous request
  abortController = new AbortController();
  setLoading(true);
  let newItems: Item[] = [];
  setItems(newItems);

  try {
    const response = await fetch(`/store/parts?type=${type}&query=${query}`, {
      signal: abortController.signal,
    });
    let body = await response.json();
    if (response.status !== 200) {
      throw Error(body);
    }
    newItems = body;
  } catch (error: any) {
    if (error.name === "AbortError") {
      return;
    }
    console.log("error: ", error);
  }

  setItems(newItems);
  setLoading(false);
};
