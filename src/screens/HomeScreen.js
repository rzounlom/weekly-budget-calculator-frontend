import React from "react";
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

const HomeScreen = () => {
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
          <HomeScreenMainSideNavTabs className="side-nav-tab">
            Monday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs className="side-nav-tab">
            Tuesday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs className="side-nav-tab">
            Wednesday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs className="side-nav-tab">
            Thursday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs className="side-nav-tab">
            Friday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs className="side-nav-tab">
            Saturday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs className="side-nav-tab">
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
