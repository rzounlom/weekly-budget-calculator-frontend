import { Loader } from "rsuite";
import { useQuery } from "@apollo/client";
import { GET_SHIFTS_BY_DAY } from "../../graphql/Queries/shift/shiftQueries";
import { HomeScreenMainContentHeaderNoShifts } from "./HomeScreenComponents";
import ShiftCard from "./ShiftCard";

const RenderShifts = ({ day, refreshShiftsByDay, setRefreshShiftsByDay }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_SHIFTS_BY_DAY,
    {
      variables: { day },
      notifyOnNetworkStatusChange: true,
    }
  );
  const handleRefetch = () => {
    refetch();
    setRefreshShiftsByDay(false);
  };
  if (networkStatus === networkStatus.refetch) return "Refetching!";
  if (loading)
    return <Loader size="lg" backdrop content="Loading Shifts..." vertical />;
  if (error) return `Error! ${error}`;
  if (refreshShiftsByDay) {
    handleRefetch();
  }
  if (data.shifts && data.shifts < 1) {
    return (
      <HomeScreenMainContentHeaderNoShifts>
        <h2>
          No Shifts added to <span>{day}</span> yet.
        </h2>
      </HomeScreenMainContentHeaderNoShifts>
    );
  } else {
    return data.shifts.map((shift) => (
      <ShiftCard key={shift.employee.employeeId} shift={shift} />
    ));
  }
};

export default RenderShifts;
