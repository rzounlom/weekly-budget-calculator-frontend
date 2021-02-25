import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 350px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalFormContainer = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: aqua;
  border-radius: 10px;
`;

export const ModalFormHeader = styled.h4`
  color: white;
  font-weight: 900;
  text-align: center;
`;
