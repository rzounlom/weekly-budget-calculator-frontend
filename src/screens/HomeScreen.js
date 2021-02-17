import React, { useState } from "react";
import "../styles/HomeScreen/styles.scss";
import ShiftCard from "../components/HomeScreenComponents/ShiftCard";
import {
  HomeScreenContainer,
  HomeScreenNav,
  HomeScreenNavLeft,
  HomeScreenNavRight,
  HomeScreenMainSection,
  HomeScreenMainSideNav,
  HomeScreenMainSideNavTabs,
  HomeScreenMainContentContainer,
  HomeScreenMainContentHeader,
  HomeScreenMainContentHeaderBtnContainer,
  HomeScreenMainContentHeaderBtn,
  HomeScreenMainContentGridContainer,
  HomeScreenMainContentGridCardContainer,
} from "../components/HomeScreenComponents/HomeScreenComponents";
import NavToggle from "../components/HomeScreenComponents/NavToggle";
import { toggleDayActive } from "../utils/toggleDayActive";

const HomeScreen = () => {
  const [active, setActive] = useState({
    monday: true,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  return (
    <HomeScreenContainer>
      <HomeScreenNav>
        <HomeScreenNavLeft>
          <div className="nav-toggle">
            <NavToggle />
          </div>
          <div className="navbar-text username">rzounlome</div>
        </HomeScreenNavLeft>
        <HomeScreenNavRight>
          <div className="navbar-text logout">Logout</div>
        </HomeScreenNavRight>
      </HomeScreenNav>
      <HomeScreenMainSection>
        <HomeScreenMainSideNav>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.monday ? "active" : ""}`}
            onClick={() => toggleDayActive(1, setActive)}
          >
            Monday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.tuesday ? "active" : ""}`}
            onClick={() => toggleDayActive(2, setActive)}
          >
            Tuesday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.wednesday ? "active" : ""}`}
            onClick={() => toggleDayActive(3, setActive)}
          >
            Wednesday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.thursday ? "active" : ""}`}
            onClick={() => toggleDayActive(4, setActive)}
          >
            Thursday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.friday ? "active" : ""}`}
            onClick={() => toggleDayActive(5, setActive)}
          >
            Friday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.saturday ? "active" : ""}`}
            onClick={() => toggleDayActive(6, setActive)}
          >
            Saturday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.sunday ? "active" : ""}`}
            onClick={() => toggleDayActive(7, setActive)}
          >
            Sunday
          </HomeScreenMainSideNavTabs>
        </HomeScreenMainSideNav>
        <HomeScreenMainContentContainer>
          <HomeScreenMainContentHeader>
            <HomeScreenMainContentHeaderBtnContainer>
              <HomeScreenMainContentHeaderBtn className="grid-btn">
                Add Employee
              </HomeScreenMainContentHeaderBtn>
              <HomeScreenMainContentHeaderBtn className="grid-btn">
                Clear Day
              </HomeScreenMainContentHeaderBtn>
            </HomeScreenMainContentHeaderBtnContainer>
          </HomeScreenMainContentHeader>
          <HomeScreenMainContentGridContainer>
            <HomeScreenMainContentGridCardContainer>
              <ShiftCard />
              <ShiftCard />
              <ShiftCard />
              <ShiftCard />
              <ShiftCard />
              <ShiftCard />
              <ShiftCard />
              <ShiftCard />
            </HomeScreenMainContentGridCardContainer>
          </HomeScreenMainContentGridContainer>
        </HomeScreenMainContentContainer>
      </HomeScreenMainSection>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
