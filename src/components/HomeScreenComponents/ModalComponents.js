import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 350px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalFormContainer = styled.div`
  height: 100%;
  width: 100%;
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

export const ModalFormBtnContainer = styled.div`
  height: 50px;
  width: 85%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 6px;
  background-color: white;
`;

export const ModalFormBtn = styled.button`
  height: 90%;
  width: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  border: 2px solid lightgrey;
`;
