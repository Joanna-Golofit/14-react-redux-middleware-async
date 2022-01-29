import { useEffect } from "react";
import { useSelector } from "react-redux"; // zeby dostac sie do state
import { useDispatch } from "react-redux"; // zeby zmienic state? czyli wyslac akcje..dispatch an action
import { fetchUsers } from "../redux";


const UserContainer = () => {
  const users = useSelector((state) => state.user.users);
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchUsers());
}, []);

console.log("users", users);
console.log("error", error);
console.log("loading", loading);

  return (
    <div>
      <h3>Users from API:</h3>
      {loading && <h1>Loading</h1>}
      {users && !error && users.map((user) => <p key={user.id}>{user.name}</p>)}
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserContainer;
