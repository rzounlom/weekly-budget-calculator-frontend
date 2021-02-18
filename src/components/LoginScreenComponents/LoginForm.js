import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "rsuite";
import { isLoggedIn } from "../../utils/auth";
import {
  withRouter,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import {
  LoginFormInputsContainer,
  UsernameInput,
  PasswordInput,
} from "./LoginComponents";
import { loginUserAction } from "../../redux/actions/user/userActions";

const LoginForm = ({ history }) => {
  useEffect(() => {}, [loginUserAction]);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [loginInputs, setLoginInputs] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setLoginInputs({ ...loginInputs, [name]: value });
  };

  const removeErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };

  const handleSubmit = async (event) => {
    const { username, password } = loginInputs;
    event.preventDefault();
    console.log(loginInputs);
    try {
      // await login(username, password);
      await dispatch(loginUserAction(loginInputs));
      const userLoggedIn = await isLoggedIn();
      console.log(userLoggedIn);
      if (userLoggedIn) {
        window.location.replace("/home");
      } else {
        setErrorMessage("Invalid Credentials");
        setLoginInputs({
          username: "",
          password: "",
        });
        removeErrorMessage();
      }
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };

  return (
    <LoginFormInputsContainer>
      <UsernameInput
        name="username"
        type="text"
        placeholder="Username"
        value={loginInputs.username}
        onChange={handleInputChange}
      />
      <PasswordInput
        name="password"
        type="password"
        placeholder="Password"
        value={loginInputs.password}
        onChange={handleInputChange}
      />

      <Button
        appearance="default"
        color="cyan"
        onClick={handleSubmit}
        disabled={
          loginInputs.username.length === 0 || loginInputs.password.length === 0
        }
      >
        Login
      </Button>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          height: "5%",
        }}
      >
        <h5 style={{ color: "red" }}>{errorMessage}</h5>
      </div>
    </LoginFormInputsContainer>
  );
};

export default withRouter(LoginForm);
