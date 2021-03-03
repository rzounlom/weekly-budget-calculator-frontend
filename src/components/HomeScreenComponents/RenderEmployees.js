import { Loader } from "rsuite";
import { useQuery } from "@apollo/client";
import { GET_EMPLOYEES } from "../../graphql/Queries/employee/employeeQueries";
import { HomeScreenMainContentHeaderNoShifts } from "./HomeScreenComponents";
import EmployeeCard from "./EmployeeCard";

const RenderEmployees = ({ refreshEmployees, setRefreshEmployees }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_EMPLOYEES,
    {
      notifyOnNetworkStatusChange: true,
    }
  );
  const handleRefetch = () => {
    refetch();
    setRefreshEmployees(false);
  };
  if (networkStatus === networkStatus.refetch) return "Refetching!";
  if (loading)
    return <Loader size="lg" backdrop content="loading..." vertical />;
  if (error) return `Error! ${error}`;
  if (refreshEmployees) {
    handleRefetch();
  }
  console.log(data);
  if (data.employees && data.employees < 1) {
    return (
      <HomeScreenMainContentHeaderNoShifts>
        <h2>
          No <span>Employees</span> added yet.
        </h2>
      </HomeScreenMainContentHeaderNoShifts>
    );
  } else {
    return data.employees.map((employee) => (
      <EmployeeCard key={employee.employeeId} employee={employee} />
    ));
  }
};

export default RenderEmployees;
