import React, { useState } from "react";
import { Drawer, Icon } from "rsuite";
import {
  HomeScreenMainSideNavToggle,
  HomeScreenMainSideNavTabs,
} from "../HomeScreenComponents/HomeScreenComponents";

import { toggleDayActive } from "../../utils/toggleDayActive";

const NavToggle = () => {
  const [toggle, setToggle] = useState({
    backdrop: false,
    show: false,
  });

  const [active, setActive] = useState({
    monday: true,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const close = () => {
    setToggle({
      show: false,
    });
  };
  const toggleDrawer = () => {
    setToggle({ show: true });
  };
  const { backdrop, show } = toggle;

  return (
    <div>
      <Icon icon="bars" onClick={toggleDrawer} />

      <Drawer
        backdrop={backdrop}
        show={show}
        onHide={close}
        size="xs"
        placement="left"
        style={{ width: "50%" }}
      >
        <Drawer.Header></Drawer.Header>
        <Drawer.Body>
          <HomeScreenMainSideNavToggle>
            <HomeScreenMainSideNavTabs
              className={`side-nav-tab-toggle ${active.monday ? "active" : ""}`}
              onClick={() => {
                close();
                toggleDayActive(1, setActive);
              }}
            >
              Monday
            </HomeScreenMainSideNavTabs>
            <HomeScreenMainSideNavTabs
              className={`side-nav-tab-toggle ${
                active.tuesday ? "active" : ""
              }`}
              onClick={() => {
                close();
                toggleDayActive(2, setActive);
              }}
            >
              Tuesday
            </HomeScreenMainSideNavTabs>
            <HomeScreenMainSideNavTabs
              className={`side-nav-tab-toggle ${
                active.wednesday ? "active" : ""
              }`}
              onClick={() => {
                close();
                toggleDayActive(3, setActive);
              }}
            >
              Wednesday
            </HomeScreenMainSideNavTabs>
            <HomeScreenMainSideNavTabs
              className={`side-nav-tab-toggle ${
                active.thursday ? "active" : ""
              }`}
              onClick={() => {
                close();
                toggleDayActive(4, setActive);
              }}
            >
              Thursday
            </HomeScreenMainSideNavTabs>
            <HomeScreenMainSideNavTabs
              className={`side-nav-tab-toggle ${active.friday ? "active" : ""}`}
              onClick={() => {
                close();
                toggleDayActive(5, setActive);
              }}
            >
              Friday
            </HomeScreenMainSideNavTabs>
            <HomeScreenMainSideNavTabs
              className={`side-nav-tab-toggle ${
                active.saturday ? "active" : ""
              }`}
              onClick={() => {
                close();
                toggleDayActive(6, setActive);
              }}
            >
              Saturday
            </HomeScreenMainSideNavTabs>
            <HomeScreenMainSideNavTabs
              className={`side-nav-tab-toggle ${active.sunday ? "active" : ""}`}
              onClick={() => {
                close();
                toggleDayActive(7, setActive);
              }}
            >
              Sunday
            </HomeScreenMainSideNavTabs>
          </HomeScreenMainSideNavToggle>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default NavToggle;
