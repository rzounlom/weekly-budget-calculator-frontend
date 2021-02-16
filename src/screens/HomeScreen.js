import React from "react";
import "../styles/HomeScreen/styles.scss";
import {
  HomeScreenContainer,
  HomeScreenNav,
  HomeScreenNavLeft,
  HomeScreenNavRight,
  HomeScreenMainSection,
  HomeScreenMainSideNav,
  HomeScreenMainSideNavTabs,
} from "../components/HomeScreenComponents/HomeScreenComponents";

const HomeScreen = () => {
  return (
    <HomeScreenContainer>
      <HomeScreenNav>
        <HomeScreenNavLeft>
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
      </HomeScreenMainSection>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
