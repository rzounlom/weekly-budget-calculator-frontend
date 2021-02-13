import React, { useState } from "react";
import {
  LoginContainer,
  LoginHeader,
  LoginHeaderTitle,
  LoiginFormContainer,
} from "../components/LoginComponents";

const LoginScreen = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <LoginContainer>
      <LoginHeader>
        <LoginHeaderTitle>WEEKLY EMPLOYEE BUDGET CALCULATOR</LoginHeaderTitle>
      </LoginHeader>{" "}
      <LoiginFormContainer></LoiginFormContainer>
    </LoginContainer>
  );
};

export default LoginScreen;
