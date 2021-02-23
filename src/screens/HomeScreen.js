import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/HomeScreen/styles.scss";
import ShiftCard from "../components/HomeScreenComponents/ShiftCard";
import AddEmployeeToDayModal from "../components/HomeScreenComponents/AddEmployeeToDayModal";
import ClearShiftsModal from "../components/HomeScreenComponents/ClearShiftsModal";
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
  HomeScreenMainContentHeaderNoShifts,
} from "../components/HomeScreenComponents/HomeScreenComponents";
import NavToggle from "../components/HomeScreenComponents/NavToggle";
import { toggleDayActive } from "../utils/toggleDayActive";
import {
  retrieveUserToken,
  retrieveUserDetails,
} from "../redux/actions/user/userActions";
import { getAllShifts } from "../redux/actions/shift/shiftActions";

const HomeScreen = () => {
  const id = useSelector((state) => state.user.userId);
  const user = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const [active, setActive] = useState({
    monday: true,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    employees: false,
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const [shiftModalIsOpen, setShiftModalIsOpen] = useState(false);
  const openShiftsModal = () => {
    setShiftModalIsOpen(true);
  };
  const closeShiftModal = () => {
    setShiftModalIsOpen(false);
  };

  const [shiftDay, setShiftDay] = useState("Monday");

  useEffect(() => {
    dispatch(retrieveUserToken());
    if (id) {
      dispatch(retrieveUserDetails(id));
      dispatch(getAllShifts());
      setShiftDay("Monday");
    }
  }, [dispatch, id]);

  const { shifts } = useSelector((state) => state.shift);

  console.log(shifts);

  const renderDayShifts = shifts
    .filter((shift) => shift.day === shiftDay)
    .map((shift) => (
      <ShiftCard key={shift.employee.employeeId} shift={shift} />
    ));

  return (
    <HomeScreenContainer>
      <AddEmployeeToDayModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <ClearShiftsModal
        shiftModalIsOpen={shiftModalIsOpen}
        closeShiftModal={closeShiftModal}
      />
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
            onClick={async () => {
              toggleDayActive(1, setActive);
              setShiftDay("Monday");
            }}
          >
            Monday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.tuesday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(2, setActive);
              setShiftDay("Tuesday");
            }}
          >
            Tuesday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.wednesday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(3, setActive);
              setShiftDay("Wednesday");
            }}
          >
            Wednesday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.thursday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(4, setActive);
              setShiftDay("Thursday");
            }}
          >
            Thursday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.friday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(5, setActive);
              setShiftDay("Friday");
            }}
          >
            Friday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.saturday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(6, setActive);
              setShiftDay("Saturday");
            }}
          >
            Saturday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.sunday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(7, setActive);
              setShiftDay("Sunday");
            }}
          >
            Sunday
          </HomeScreenMainSideNavTabs>
          {user && user.role.length !== undefined && user.role === "ADMIN" && (
            <HomeScreenMainSideNavTabs
              className={`side-nav-tab ${active.employees ? "active" : ""}`}
              onClick={async () => {
                toggleDayActive(1, setActive);
                setShiftDay("Monday");
              }}
            >
              Employees
            </HomeScreenMainSideNavTabs>
          )}
        </HomeScreenMainSideNav>
        <HomeScreenMainContentContainer>
          <HomeScreenMainContentHeader>
            <HomeScreenMainContentHeaderBtnContainer>
              <HomeScreenMainContentHeaderBtn
                className="grid-btn"
                onClick={openModal}
              >
                Add Shift
              </HomeScreenMainContentHeaderBtn>
              <HomeScreenMainContentHeaderBtn
                className="grid-btn"
                onClick={openShiftsModal}
              >
                Clear Shifts
              </HomeScreenMainContentHeaderBtn>
            </HomeScreenMainContentHeaderBtnContainer>
          </HomeScreenMainContentHeader>
          <HomeScreenMainContentGridContainer>
            <HomeScreenMainContentGridCardContainer>
              {renderDayShifts.length > 0 ? (
                renderDayShifts
              ) : (
                <HomeScreenMainContentHeaderNoShifts>
                  <h2>
                    No shifts added to <span>{shiftDay}</span> yet
                  </h2>
                </HomeScreenMainContentHeaderNoShifts>
              )}
            </HomeScreenMainContentGridCardContainer>
          </HomeScreenMainContentGridContainer>
        </HomeScreenMainContentContainer>
      </HomeScreenMainSection>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
