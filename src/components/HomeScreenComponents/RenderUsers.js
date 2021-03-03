import { Loader } from "rsuite";
import { useQuery } from "@apollo/client";
import { FIND_USERS } from "../../graphql/Queries/user/userQueries";
import { HomeScreenMainContentHeaderNoShifts } from "./HomeScreenComponents";
import UserCard from "./UserCard";

const RenderUsers = ({ refreshUsers, setRefreshUsers }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    FIND_USERS,
    {
      notifyOnNetworkStatusChange: true,
    }
  );
  const handleRefetch = () => {
    refetch();
    setRefreshUsers(false);
  };
  if (networkStatus === networkStatus.refetch) return "Refetching!";
  if (loading)
    return <Loader size="lg" backdrop content="loading..." vertical />;
  if (error) return `Error! ${error}`;
  if (refreshUsers) {
    handleRefetch();
  }
  console.log(data);
  if (data.users && data.users < 1) {
    return (
      <HomeScreenMainContentHeaderNoShifts>
        <h2>
          No <span>Users</span> added yet.
        </h2>
      </HomeScreenMainContentHeaderNoShifts>
    );
  } else {
    return data.users.map((user) => (
      <UserCard key={user.username} user={user} />
    ));
  }
};

export default RenderUsers;
