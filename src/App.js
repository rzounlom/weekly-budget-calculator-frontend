import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { isLoggedIn } from "./utils/auth";

const App = () => {
  const [loggedIn, setLoggedin] = useState(false);
  useEffect(() => {
    const checkIsLoggedIn = async () => {
      const checkLogin = await isLoggedIn();
      setLoggedin(checkLogin);
    };

    checkIsLoggedIn();
  }, [loggedIn]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return loggedIn ? <Redirect to="/home" /> : <LoginScreen />;
          }}
        />
        <Route
          exact
          path="/login"
          render={() => {
            return loggedIn ? <Redirect to="/home" /> : <LoginScreen />;
          }}
        />
        <Route
          exact
          path="/home"
          render={() => {
            return !loggedIn ? <Redirect to="/login" /> : <HomeScreen />;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
