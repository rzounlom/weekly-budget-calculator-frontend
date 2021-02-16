import React from "react";
import { Drawer, Icon } from "rsuite";
import {
  HomeScreenMainSideNavToggle,
  HomeScreenMainSideNavTabs,
} from "../HomeScreenComponents/HomeScreenComponents";

class NavToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: false,
      show: false,
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  close() {
    this.setState({
      show: false,
    });
  }
  toggleDrawer() {
    this.setState({ show: true });
  }
  render() {
    const { backdrop, show } = this.state;

    return (
      <div>
        <Icon icon="bars" onClick={this.toggleDrawer} />

        <Drawer
          backdrop={backdrop}
          show={show}
          onHide={this.close}
          size="xs"
          placement="left"
          style={{ width: "50%" }}
        >
          <Drawer.Header></Drawer.Header>
          <Drawer.Body>
            <HomeScreenMainSideNavToggle>
              <HomeScreenMainSideNavTabs className="side-nav-tab-toggle">
                Monday
              </HomeScreenMainSideNavTabs>
              <HomeScreenMainSideNavTabs className="side-nav-tab-toggle">
                Tuesday
              </HomeScreenMainSideNavTabs>
              <HomeScreenMainSideNavTabs className="side-nav-tab-toggle">
                Wednesday
              </HomeScreenMainSideNavTabs>
              <HomeScreenMainSideNavTabs className="side-nav-tab-toggle">
                Thursday
              </HomeScreenMainSideNavTabs>
              <HomeScreenMainSideNavTabs className="side-nav-tab-toggle">
                Friday
              </HomeScreenMainSideNavTabs>
              <HomeScreenMainSideNavTabs className="side-nav-tab-toggle">
                Saturday
              </HomeScreenMainSideNavTabs>
              <HomeScreenMainSideNavTabs className="side-nav-tab-toggle">
                Sunday
              </HomeScreenMainSideNavTabs>
            </HomeScreenMainSideNavToggle>
          </Drawer.Body>
        </Drawer>
      </div>
    );
  }
}

export default NavToggle;
