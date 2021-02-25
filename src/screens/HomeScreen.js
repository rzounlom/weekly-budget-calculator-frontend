import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/HomeScreen/styles.scss";
import ShiftCard from "../components/HomeScreenComponents/ShiftCard";
import UserCard from "../components/HomeScreenComponents/UserCard";
import EmployeeCard from "../components/HomeScreenComponents/EmployeeCard";
import AddEmployeeToDayModal from "../components/HomeScreenComponents/AddEmployeeToDayModal";
import ClearShiftsModal from "../components/HomeScreenComponents/ClearShiftsModal";
import { Loader } from "rsuite";
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
import { getEmployees } from "../redux/actions/employee/employeeActions";
import { findUsers } from "../redux/actions/user/userActions";
import { logout } from "../utils/auth";

const HomeScreen = () => {
  const id = useSelector((state) => state.user.userId);
  const user = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const [cardNumber, setCardNumber] = useState(1);
  const [active, setActive] = useState({
    monday: true,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    employees: false,
    users: false,
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
      toggleDayActive(1, setActive);
      setShiftDay("Monday");
      dispatch(retrieveUserDetails(id));
      dispatch(getAllShifts());
      dispatch(getEmployees());
      dispatch(findUsers());
    }
  }, [dispatch, id]);

  const { shifts, loading } = useSelector((state) => state.shift);
  const { users } = useSelector((state) => state.user);
  const { employees } = useSelector((state) => state.employee);

  const renderDayShifts = shifts
    .filter((shift) => shift.day === shiftDay)
    .map((shift) => (
      <ShiftCard key={shift.employee.employeeId} shift={shift} />
    ));

  const renderUsers = users.map((user) => (
    <UserCard key={user.username} user={user} />
  ));

  const renderEmployees = employees.map((employee) => {
    return <EmployeeCard key={employee.employeeId} employee={employee} />;
  });

  const renderCards = (num) => {
    switch (num) {
      case 1:
        return loading ? (
          <Loader size="lg" backdrop content="loading..." vertical />
        ) : renderDayShifts.length > 0 ? (
          renderDayShifts
        ) : (
          <HomeScreenMainContentHeaderNoShifts>
            <h2>
              No shifts added to <span>{shiftDay}</span> yet.
            </h2>
          </HomeScreenMainContentHeaderNoShifts>
        );
      case 2:
        return renderEmployees.length > 0 ? (
          renderEmployees
        ) : (
          <HomeScreenMainContentHeaderNoShifts>
            <h2>
              No <span>Employees</span> added yet.
            </h2>
          </HomeScreenMainContentHeaderNoShifts>
        );
      case 3:
        return renderUsers.length > 0 ? (
          renderUsers
        ) : (
          <HomeScreenMainContentHeaderNoShifts>
            <h2>
              No <span>Users</span> added yet.
            </h2>
          </HomeScreenMainContentHeaderNoShifts>
        );
      default:
        return loading ? (
          <Loader size="lg" backdrop content="loading..." vertical />
        ) : renderDayShifts.length > 0 ? (
          renderDayShifts
        ) : (
          <HomeScreenMainContentHeaderNoShifts>
            <h2>
              No shifts added to <span>{shiftDay}</span> yet
            </h2>
          </HomeScreenMainContentHeaderNoShifts>
        );
    }
  };

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
          <div
            className="navbar-text logout"
            onClick={async () => {
              await logout();
              await window.location.replace("/home");
            }}
          >
            Logout
          </div>
        </HomeScreenNavRight>
      </HomeScreenNav>
      <HomeScreenMainSection>
        <HomeScreenMainSideNav>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.monday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(1, setActive);
              await dispatch(getAllShifts());
              setShiftDay("Monday");
              setCardNumber(1);
            }}
          >
            Monday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.tuesday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(2, setActive);
              await dispatch(getAllShifts());
              setShiftDay("Tuesday");
              setCardNumber(1);
            }}
          >
            Tuesday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.wednesday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(3, setActive);
              await dispatch(getAllShifts());
              setShiftDay("Wednesday");
              setCardNumber(1);
            }}
          >
            Wednesday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.thursday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(4, setActive);
              await dispatch(getAllShifts());
              setShiftDay("Thursday");
              setCardNumber(1);
            }}
          >
            Thursday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.friday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(5, setActive);
              await dispatch(getAllShifts());
              setShiftDay("Friday");
              setCardNumber(1);
            }}
          >
            Friday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.saturday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(6, setActive);
              await dispatch(getAllShifts());
              setShiftDay("Saturday");
              setCardNumber(1);
            }}
          >
            Saturday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.sunday ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(7, setActive);
              await dispatch(getAllShifts());
              setShiftDay("Sunday");
              setCardNumber(1);
            }}
          >
            Sunday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.employees ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(8, setActive);
              await dispatch(getEmployees());
              setCardNumber(2);
            }}
          >
            Employees
          </HomeScreenMainSideNavTabs>
          {/* {user && user.role.length !== undefined && user.role === "ADMIN" && ( */}
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.users ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(9, setActive);
              await dispatch(findUsers());
              setCardNumber(3);
            }}
          >
            Users
          </HomeScreenMainSideNavTabs>
          {/*)*/}
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
              {loading ? (
                <Loader size="lg" backdrop content="loading..." vertical />
              ) : (
                renderCards(cardNumber)
              )}
            </HomeScreenMainContentGridCardContainer>
          </HomeScreenMainContentGridContainer>
        </HomeScreenMainContentContainer>
      </HomeScreenMainSection>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
