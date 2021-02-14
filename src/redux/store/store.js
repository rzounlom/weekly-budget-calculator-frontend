import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { client } from "../../graphql/client";
import { rootReducer } from "../reducers/rootReducer";

const middleware = [thunk, composeWithDevTools];

export const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
