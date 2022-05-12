import { Item } from "../models/item";

export const orderByPrice = (descOrder: boolean, a: Item, b: Item): number => {
  const priceA: number = parseInt(a.price.slice(0, -1));
  const priceB: number = parseInt(b.price.slice(0, -1));
  return descOrder ? priceB - priceA : priceA - priceB;
};
