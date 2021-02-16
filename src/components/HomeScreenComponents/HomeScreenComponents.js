import styled from "styled-components";

export const HomeScreenContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeScreenNav = styled.div`
  height: 7vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid lightgrey;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 350px) {
    height: 10vh;
  }
`;

export const HomeScreenNavLeft = styled.div`
  height: 100%;
  width: 40%;
  padding: 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HomeScreenNavRight = styled.div`
  height: 100%;
  width: 40%;
  padding: 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HomeScreenMainSection = styled.div`
  height: 93vh;
  width: 100%;
  display: flex;
`;

export const HomeScreenMainSideNav = styled.div`
  height: 100%;
  width: 15%;
  border-right: 0.5px solid lightgrey;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 0 5px -2px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 768px) {
    width: 20%;
  }
  @media (max-width: 414px) {
    display: none;
  }
`;

export const HomeScreenMainSideNavToggle = styled.div`
  height: 100%;
  width: 100%;
  border-right: 0.5px solid lightgrey;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 0 5px -2px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  /* @media (max-width: 768px) {
    width: 20%;
  }
  @media (max-width: 414px) {
    display: none;
  } */
`;

export const HomeScreenMainSideNavTabs = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: 0.5px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
`;

export const HomeScreenMainContentContainer = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const HomeScreenMainContentHeader = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeScreenMainContentHeaderBtnContainer = styled.div`
  height: 100%;
  width: 55%;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 414px) {
    width: 95%;
  }
  @media (max-width: 375px) {
    width: 95%;
  }
`;

export const HomeScreenMainContentHeaderBtn = styled.div`
  height: 50px;
  width: 35%;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid aqua;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1.1rem;
  @media (max-width: 768px) {
    width: 44%;
    margin-top: 5%;
  }
  @media (max-width: 414px) {
    width: 45%;
    margin-top: 5%;
  }
  @media (max-width: 380px) {
    width: 46%;
    margin-top: 5%;
  }
  @media (max-width: 350px) {
    margin-top: 12%;
  }
`;

export const HomeScreenMainContentGrid = styled.div`
  height: 92%;
  width: 100%;
  display: flex;
  padding: 2%;
`;
