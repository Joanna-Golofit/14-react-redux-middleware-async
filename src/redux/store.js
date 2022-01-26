import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(
//   reducer,
//   composeWithDevTools(
//     applyMiddleware(...middleware)
//     // other store enhancers if any
//   )
// );

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store
