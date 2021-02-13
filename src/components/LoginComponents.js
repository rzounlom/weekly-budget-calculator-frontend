import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  padding: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const LoginHeader = styled.div`
  height: 15%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid lightgrey;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
`;

export const LoginHeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
`;

export const LoiginFormContainer = styled.div`
  height: 80%;
  width: 80%;
  background-color: pink;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgrey;
`;
