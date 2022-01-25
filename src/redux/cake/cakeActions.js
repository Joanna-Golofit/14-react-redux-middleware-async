import { BUY_CAKE } from "./cakeTypes";

//action creator is a function that creates/returns an action, which is an object with type (?and payload) property: 
export const buyCake = () => {
  return { type: BUY_CAKE };
};
