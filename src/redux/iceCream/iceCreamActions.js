import { BUY_ICECREAM } from "./iceCreamTypes";

//action creator is a function that creates/returns an action, which is an object with type (?and payload) property:
export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: "Second redux action created",
  };
};
