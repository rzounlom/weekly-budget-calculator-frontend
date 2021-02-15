import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "rsuite/dist/styles/rsuite-default.css";
import App from "./App";
import "antd/dist/antd.css";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import { store } from "./redux/store/store";

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
