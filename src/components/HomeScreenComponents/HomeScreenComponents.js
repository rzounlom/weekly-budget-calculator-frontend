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
  border-bottom: 2px solid lightgrey;
  @media (max-width: 414px) {
    height: 15%;
  }
`;

export const HomeScreenMainContentHeaderNoShifts = styled.div`
  height: 7vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid lightgrey;
  h2 {
    color: gray;
    font-weight: 900;
    span {
      opacity: 1;
      color: aqua;
    }
  }
  @media (max-width: 414px) {
    height: 15%;
  }
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
    transform: scale(0.9);
  }
  @media (max-width: 380px) {
    width: 46%;
    transform: scale(0.8);
  }
  @media (max-width: 350px) {
  }
`;

export const HomeScreenMainContentGridContainer = styled.div`
  height: auto;
  max-height: 92%;
  width: 100%;
  display: flex;
  padding: 1%;
  overflow-y: auto;
  justify-content: center;
  @media (max-width: 414px) {
    padding: 0;
  }
`;

export const HomeScreenMainContentGridCardContainer = styled.div`
  display: flex;
  height: auto;
  overflow-y: auto;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* @media (max-width: 768px) {
    width: 80%;
  } */
`;

// Grid Card
export const HomeScreenMainContentGridCard = styled.div`
  height: 200px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 10px 0 5px -2px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  margin-top: 1%;
  margin-bottom: 0.5%;
  margin-left: 0.8%;
  @media (max-width: 768px) {
    width: 45%;
    margin-left: 4%;
  }
  @media (max-width: 414px) {
    width: 48%;
    margin-left: 1.5%;
  }
  @media (max-width: 380px) {
    width: 48%;
    margin-top: 2%;
  }
  @media (max-width: 350px) {
    width: 48%;
    margin-top: 8%;
  }
`;

export const HomeScreenMainContentGridCardHeader = styled.div`
  height: 20.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid lightgrey;
`;

export const HomeScreenMainContentGridCardBody = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

export const HomeScreenMainContentGridCardBodyRow = styled.div`
  height: 33.3%;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

export const HomeScreenMainContentGridCardBodyText = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid lightgrey;
  text-align: center;
`;

export const HomeScreenMainContentGridCardFooter = styled.div`
  height: 22%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HomeScreenMainContentGridCardFooterRow = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const HomeScreenMainContentGridCardFooterBtn = styled.div`
  height: 80%;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
`;

// User Components
export const UserCardContainer = styled.div`
  height: 150px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 10px 0 5px -2px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  margin-top: 1%;
  margin-bottom: 0.5%;
  margin-left: 0.8%;
  @media (max-width: 768px) {
    width: 45%;
    margin-left: 4%;
  }
  @media (max-width: 414px) {
    width: 48%;
    margin-left: 1.5%;
  }
  @media (max-width: 380px) {
    width: 48%;
    margin-top: 2%;
  }
  @media (max-width: 350px) {
    width: 48%;
    margin-top: 8%;
  }
`;

export const UserCardHeader = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid lightgrey;
`;

export const UserCardBody = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid lightgrey;
`;

export const UserCardBodyRow = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const UserCardBodyText = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid lightgrey;
  text-align: center;
`;

export const UserCardFooter = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  align-items: center;
`;
