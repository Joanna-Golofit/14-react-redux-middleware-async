import { BUY_CAKE } from "./cakeTypes";

//action creator is a function that returns an object : 
export const buyCake = () => {
  return { type: BUY_CAKE };
};
