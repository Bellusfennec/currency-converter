import { Currency } from "../types";

export function isObjectInArray(object: Currency, array: Currency[]) {
  return array.some(item => item.name === object.name);
}
