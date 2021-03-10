import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/HomeScreen/styles.scss";
import { Message } from "rsuite";
import AddEmployeeToDayModal from "../components/HomeScreenComponents/AddEmployeeToDayModal";
import ClearShiftsModal from "../components/HomeScreenComponents/ClearShiftsModal";
import EditShiftModal from "../components/HomeScreenComponents/EditShiftModal";
import DeleteShiftModal from "../components/HomeScreenComponents/DeleteShiftModal";
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
import {
  retrieveUserToken,
  retrieveUserDetails,
} from "../redux/actions/user/userActions";
import {
  getAllShifts,
  getShiftsByDay,
} from "../redux/actions/shift/shiftActions";
import { getEmployees } from "../redux/actions/employee/employeeActions";
import { findUsers } from "../redux/actions/user/userActions";
import { logout } from "../utils/auth";
import RenderShifts from "../components/HomeScreenComponents/RenderShifts";
import RenderEmployees from "../components/HomeScreenComponents/RenderEmployees";
import RenderUsers from "../components/HomeScreenComponents/RenderUsers";

const HomeScreen = () => {
  const id = useSelector((state) => state.user.userId);
  const user = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const [gridNum, setGridNum] = useState(1);
  const [refreshShiftsByDay, setRefreshShiftsByDay] = useState(false);
  const [refreshEmployees, setRefreshEmployees] = useState(false);
  const [refreshUsers, setRefreshUsers] = useState(false);
  const [globalMessage, setGlobalMessage] = useState("");
  const handleGlobalMessage = (message) => {
    setGlobalMessage(message);
    setTimeout(() => {
      setGlobalMessage("");
    }, 5000);
  };
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

  const [editShiftModalIsOpen, setEditShiftModalIsOpen] = useState(false);

  const openEditShiftsModal = () => {
    setEditShiftModalIsOpen(true);
  };

  const closeEditShiftsModal = () => {
    setEditShiftModalIsOpen(false);
  };

  const [deleteShiftModalIsOpen, setDeleteShiftModalIsOpen] = useState(false);

  const openDeleteShiftsModal = () => {
    setDeleteShiftModalIsOpen(true);
  };

  const closeDeleteShiftsModal = () => {
    setDeleteShiftModalIsOpen(false);
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
      dispatch(getShiftsByDay("Monday"));
    }
  }, [dispatch, id]);

  const renderGridComponent = (num) => {
    switch (num) {
      case 1:
        return (
          <RenderShifts
            day={shiftDay}
            setRefreshShiftsByDay={setRefreshShiftsByDay}
            refreshShiftsByDay={refreshShiftsByDay}
            openEditShiftsModal={openEditShiftsModal}
            openDeleteShiftsModal={openDeleteShiftsModal}
          />
        );
      case 2:
        return <RenderEmployees gridNum={gridNum} setGridNum={setGridNum} />;
      case 3:
        return (
          <RenderUsers
            refreshUsers={refreshUsers}
            setRefreshUsers={setRefreshUsers}
          />
        );
      default:
        break;
    }
  };

  return (
    <HomeScreenContainer>
      {globalMessage && (
        <Message
          style={{ width: "100%" }}
          closable
          showIcon
          type="success"
          title="Success"
          description={globalMessage}
        />
      )}
      <AddEmployeeToDayModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleGlobalMessage={handleGlobalMessage}
        setRefreshShiftsByDay={setRefreshShiftsByDay}
      />
      <ClearShiftsModal
        shiftModalIsOpen={shiftModalIsOpen}
        closeShiftModal={closeShiftModal}
      />

      <EditShiftModal
        editShiftModalIsOpen={editShiftModalIsOpen}
        closeEditShiftsModal={closeEditShiftsModal}
        handleGlobalMessage={handleGlobalMessage}
        setRefreshShiftsByDay={setRefreshShiftsByDay}
      />

      <DeleteShiftModal
        deleteShiftModalIsOpen={deleteShiftModalIsOpen}
        closeDeleteShiftsModal={closeDeleteShiftsModal}
        handleGlobalMessage={handleGlobalMessage}
        setRefreshShiftsByDay={setRefreshShiftsByDay}
      />

      <HomeScreenNav>
        <HomeScreenNavLeft>
          <div className="nav-toggle">
            <NavToggle
              logout={logout}
              toggleDayActive={toggleDayActive}
              setShiftDay={setShiftDay}
              setGridNum={setGridNum}
            />
          </div>
          <div
            className="navbar-text username"
            onClick={() => handleGlobalMessage("This is a test")}
          >
            rzounlome
          </div>
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
              await dispatch(getShiftsByDay("Monday"));
              setGridNum(1);
              setRefreshShiftsByDay(true);
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
              dispatch(getShiftsByDay("Tuesday"));
              setGridNum(1);
              setRefreshShiftsByDay(true);
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
              await dispatch(getShiftsByDay("Wednesday"));
              setGridNum(1);
              setRefreshShiftsByDay(true);
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
              await dispatch(getShiftsByDay("Thursday"));
              setGridNum(1);
              setRefreshShiftsByDay(true);
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
              await dispatch(getShiftsByDay("Friday"));
              setGridNum(1);
              setRefreshShiftsByDay(true);
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
              await dispatch(getShiftsByDay("Saturday"));
              setGridNum(1);
              setRefreshShiftsByDay(true);
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
              await dispatch(getShiftsByDay("Sunday"));
              setGridNum(1);
              setRefreshShiftsByDay(true);
            }}
          >
            Sunday
          </HomeScreenMainSideNavTabs>
          <HomeScreenMainSideNavTabs
            className={`side-nav-tab ${active.employees ? "active" : ""}`}
            onClick={async () => {
              toggleDayActive(8, setActive);
              await dispatch(getEmployees());
              setGridNum(2);
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
              setGridNum(3);
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
              {renderGridComponent(gridNum)}
            </HomeScreenMainContentGridCardContainer>
          </HomeScreenMainContentGridContainer>
        </HomeScreenMainContentContainer>
      </HomeScreenMainSection>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
