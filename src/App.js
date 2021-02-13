import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={LoginScreen} />
    </Router>
  );
};

export default App;
